
# Documentation
- Class name: Inference_Core_Unimatch_OptFlowPreprocessor
- Category: ControlNet Preprocessors/Optical Flow
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed specifically for preprocessing flow estimation data, with a focus on enhancing and optimizing flow estimation through techniques such as upsampling, masking, and applying attention mechanisms. It leverages the Unimatch algorithm to process and improve the quality of flow predictions, making it suitable for tasks requiring precise motion analysis between video frames.

# Input types
## Required
- image
    - Image sequences requiring flow estimation. This input is critical to the node's operation, as it directly impacts the accuracy and quality of flow predictions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ckpt_name
    - Checkpoint filename for the Unimatch model. This determines the specific pre-trained model version used for flow estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- backward_flow
    - A boolean flag indicating whether to estimate backward flow. This affects the directionality of flow estimation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bidirectional_flow
    - A boolean flag indicating whether to estimate bidirectional flow, enhancing motion analysis by considering both forward and backward flows simultaneously.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- OPTICAL_FLOW
    - Enhanced flow predictions processed by the Unimatch algorithm, providing fine-grained motion estimation between video frames.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- PREVIEW_IMAGE
    - Visualization of flow predictions, offering a visual representation of inter-frame motion for easier interpretation and analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Unimatch_OptFlowPreprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": dict(
                image=("IMAGE",),
                ckpt_name=(
                    ["gmflow-scale1-mixdata.pth", "gmflow-scale2-mixdata.pth", "gmflow-scale2-regrefine6-mixdata.pth"],
                    {"default": "gmflow-scale2-regrefine6-mixdata.pth"}
                ),
                backward_flow=("BOOLEAN", {"default": False}),
                bidirectional_flow=("BOOLEAN", {"default": False})
            )
        }

    RETURN_TYPES = ("OPTICAL_FLOW", "IMAGE")
    RETURN_NAMES = ("OPTICAL_FLOW", "PREVIEW_IMAGE")
    FUNCTION = "estimate"

    CATEGORY = "ControlNet Preprocessors/Optical Flow"

    def estimate(self, image, ckpt_name, backward_flow=False, bidirectional_flow=False):
        assert len(image) > 1, "[Unimatch] Requiring as least two frames as a optical flow estimator. Only use this node on video input."    
        from controlnet_aux.unimatch import UnimatchDetector
        tensor_images = image
        model = UnimatchDetector.from_pretrained(filename=ckpt_name).to(model_management.get_torch_device())
        flows, vis_flows = [], []
        for i in range(len(tensor_images) - 1):
            image0, image1 = np.asarray(image[i:i+2].cpu() * 255., dtype=np.uint8)
            flow, vis_flow = model(image0, image1, output_type="np", pred_bwd_flow=backward_flow, pred_bidir_flow=bidirectional_flow)
            flows.append(torch.from_numpy(flow).float())
            vis_flows.append(torch.from_numpy(vis_flow).float() / 255.)
        del model
        return (torch.stack(flows, dim=0), torch.stack(vis_flows, dim=0))

```

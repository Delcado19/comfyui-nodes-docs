
# Documentation
- Class name: Unimatch_OptFlowPreprocessor
- Category: ControlNet Preprocessors/Optical Flow
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is specifically designed to process flow data, preparing it for subsequent processing or analysis, particularly within the context of the Unimatch system. Unimatch is a system for estimating and manipulating optical flow in video sequences. This node abstracts the complexities involved in preparing flow data, ensuring that the data format and resolution are suitable for effective operation of the Unimatch algorithm.

# Input types
## Required
- image
    - Image sequences that need to be processed to estimate optical flow. This input is essential for generating flow data between consecutive frames in a video sequence, serving as the foundation for flow analysis or manipulation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ckpt_name
    - The checkpoint filename of the Unimatch model. This parameter allows selection of a specific pre-trained model, affecting the accuracy and quality of optical flow estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- backward_flow
    - A boolean flag indicating whether to estimate reverse optical flow. This option enables bidirectional flow estimation, enhancing the analysis of inter-frame motion.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bidirectional_flow
    - A boolean flag indicating whether to estimate bidirectional flow. This enhances motion analysis by considering both forward and backward motion between frames.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- OPTICAL_FLOW
    - Preprocessed optical flow data, ready for further analysis or visualization. This output is optimized for accuracy and efficiency in subsequent processing steps.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- PREVIEW_IMAGE
    - A visual representation of the flow data, typically used for motion preview or debugging purposes. This image can help understand the characteristics of the flow and verify the effectiveness of preprocessing.
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

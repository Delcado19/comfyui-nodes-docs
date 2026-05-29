
# Documentation
- Class name: Inference_Core_MaskOptFlow
- Category: ControlNet Preprocessors/Optical Flow
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_MaskOptFlow node is designed for processing optical flow data by applying masks to the optical flow. This preprocessing step is critical for tasks that require focused analysis on specific regions of optical flow, improving the accuracy and relevance of optical flow data in subsequent processing stages.

# Input types
## Required
- optical_flow
    - The optical_flow parameter represents the optical flow data to be processed. It is essential for determining motion between two images or frames.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- mask
    - The mask parameter is used to specify regions of interest within the optical flow data. It plays a key role in filtering and optimizing flow data for targeted analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- OPTICAL_FLOW
    - The modified optical flow data filtered by the mask, ready for further analysis or processing.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- PREVIEW_IMAGE
    - A visualization of the masked optical flow, providing a preview of the mask's impact on the flow data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MaskOptFlow:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": dict(optical_flow=("OPTICAL_FLOW",), mask=("MASK",))
        }
    
    RETURN_TYPES = ("OPTICAL_FLOW", "IMAGE")
    RETURN_NAMES = ("OPTICAL_FLOW", "PREVIEW_IMAGE")
    FUNCTION = "mask_opt_flow"

    CATEGORY = "ControlNet Preprocessors/Optical Flow"
    
    def mask_opt_flow(self, optical_flow, mask):
        from controlnet_aux.unimatch import flow_to_image
        assert len(mask) >= len(optical_flow), f"Not enough masks to mask optical flow: {len(mask)} vs {len(optical_flow)}"
        mask = mask[:optical_flow.shape[0]]
        mask = F.interpolate(mask, optical_flow.shape[1:3])
        mask = rearrange(mask, "n 1 h w -> n h w 1")
        vis_flows = torch.stack([torch.from_numpy(flow_to_image(flow)).float() / 255. for flow in optical_flow.numpy()], dim=0)
        vis_flows *= mask
        optical_flow *= mask
        return (optical_flow, vis_flows)

```

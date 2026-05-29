
# Documentation
- Class name: MaskOptFlow
- Category: ControlNet Preprocessors/Optical Flow
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MaskOptFlow node applies a mask to optical flow input, effectively filtering optical flow data according to the provided mask. This operation is essential for isolating relevant motion information from specific regions of interest in the optical flow data.

# Input types
## Required
- optical_flow
    - Optical flow input represents motion between two consecutive frames. It is essential for understanding dynamic changes within the scene.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- mask
    - The mask input is used to filter the optical flow data, retaining only the motion information from regions of interest.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- OPTICAL_FLOW
    - The filtered optical flow data, where only the motion information from the regions specified by the mask is retained.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- PREVIEW_IMAGE
    - A visualization of the filtered optical flow, providing a visual representation of the motion information retained by the mask.
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

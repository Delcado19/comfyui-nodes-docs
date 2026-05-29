
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

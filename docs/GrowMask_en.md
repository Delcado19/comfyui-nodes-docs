# Documentation
- Class name: GrowMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GrowMask node is designed to manipulate binary masks by expanding or eroding their boundaries. It provides advanced functionality for mask modification, which is essential for applications requiring precise control over the shape and size of masked regions.

# Input types
## Required
- mask
    - The 'mask' parameter is the binary mask to be expanded or eroded. It plays a central role in the node's operation, as it directly affects the output shape and quality of the mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- expand
    - The 'expand' parameter determines the amount of expansion or erosion applied to the mask. Positive values cause dilation, while negative values cause erosion. It significantly impacts the final mask's dimensions and details.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- tapered_corners
    - When set to True, the 'tapered_corners' parameter applies a specific erosion pattern to the corners of the mask. This is important for achieving visually appealing mask shapes with rounded corners.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- expanded_mask
    - The 'expanded_mask' output is the result of the mask expansion or erosion process. It is important as it represents the final state of the mask after the node's operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

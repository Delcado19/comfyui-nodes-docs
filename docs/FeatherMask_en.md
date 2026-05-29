# Documentation
- Class name: FeatherMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FeatherMask node aims to smoothly blend the edges of a given mask with its surrounding area. It achieves this by gradually adjusting the pixel opacity of the mask, creating a soft transition at the mask's boundary, commonly used in image processing and editing. This node is particularly useful when a hard edge between the mask and background is visually undesirable.

# Input types
## Required
- mask
    - The 'mask' parameter is a binary tensor defining the region of interest in the image. It is critical to the node as it determines which parts of the image will be feathered. The dimensions and binary nature of the mask directly influence the feathering process and the final output.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- left
    - The 'left' parameter specifies the number of pixels from the left side of the mask where the feathering effect begins. It plays a significant role in determining the width of the feathered area on the left side of the mask, thus affecting the overall visual result.
    - Comfy dtype: int
    - Python dtype: int
- top
    - The 'top' parameter defines the number of pixels from the top edge of the mask where feathering begins. It is crucial for controlling the height of the feathered area at the top of the mask, influencing the node's output.
    - Comfy dtype: int
    - Python dtype: int
- right
    - The 'right' parameter sets the number of pixels from the right side of the mask where feathering starts. It is a key factor in establishing the width of the feathered area on the right side of the mask, affecting the node's execution and final appearance.
    - Comfy dtype: int
    - Python dtype: int
- bottom
    - The 'bottom' parameter indicates the number of pixels from the bottom edge of the mask where feathering begins. It is crucial for determining the height of the feathered area at the bottom of the mask, which significantly impacts the node's result.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- feathered_mask
    - The 'feathered_mask' output is a tensor representing the original mask with feathered edges. It is the primary result of the node's operation, providing a visually smooth transition between the masked and unmasked areas in the image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*


# Documentation
- Class name: CreateShapeMaskOnPath
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CreateShapeMaskOnPath node is used to generate shape-based masks along a specified path, enabling the creation of dynamic and animated mask effects. It utilizes shape parameters and path coordinates to create masks that can change over time, providing a versatile tool for visual effects and image processing.

# Input types
## Required
- shape
    - Specify the geometric shape of the mask to be created. This choice affects the appearance of the mask, which can be a circle, square, or triangle, providing a variety of visual style options for the mask.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- coordinates
    - Define the center position of the mask creation along the path. These coordinates determine the placement of the mask in the frame, allowing precise control over the mask's position.
    - Comfy dtype: STRING
    - Python dtype: str
- grow
    - Determine the amount of shape growth per frame, enabling the creation of animated masks that change size over time.
    - Comfy dtype: INT
    - Python dtype: int
- frame_width
    - Set the width of the frame for mask creation, defining the spatial boundaries for mask generation.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - Set the height of the frame for mask creation, defining the spatial boundaries for mask generation.
    - Comfy dtype: INT
    - Python dtype: int
- shape_width
    - Specify the initial width of the shape used to create the mask, affecting the size and coverage area of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- shape_height
    - Specify the initial height of the shape used to create the mask, affecting the size and coverage area of the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The primary output mask created based on the specified shape and path coordinates.
    - Comfy dtype: MASK
    - Python dtype: Tensor
- mask_inverted
    - The inverted version of the primary mask, providing an alternative mask option where the shape area is transparent and the surrounding area is opaque.
    - Comfy dtype: MASK
    - Python dtype: Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*


# Documentation
- Class name: CreateShapeMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kenjiqq/ComfyUI_KJNodes

CreateShapeMask is a node dedicated to generating masks of specific shapes or batches of multi-frame masks. It allows dynamic creation of animated masks by adjusting the growth of shapes across frames, providing a versatile tool for generating masks at various sizes and shapes.

# Input types
## Required
- shape
    - Specifies the geometric shape of the mask to be created. This selection affects the visual appearance and boundaries of the generated mask.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- frames
    - Determines the number of frames for the animated mask, allowing the creation of a sequence of gradually growing masks.
    - Comfy dtype: INT
    - Python dtype: int
- location_x
    - The x-coordinate of the shape's center position, defining the horizontal placement of the shape within the frame.
    - Comfy dtype: INT
    - Python dtype: int
- location_y
    - The y-coordinate of the shape's center position, defining the vertical placement of the shape within the frame.
    - Comfy dtype: INT
    - Python dtype: int
- grow
    - Controls the amount of shape growth per frame, enabling the mask to produce animation effects.
    - Comfy dtype: INT
    - Python dtype: int
- frame_width
    - The width of the frame in which the shape is placed, setting the horizontal boundary of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The height of the frame in which the shape is placed, setting the vertical boundary of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- shape_width
    - Specifies the initial width of the shape, determining its size before any growth is applied.
    - Comfy dtype: INT
    - Python dtype: int
- shape_height
    - Specifies the initial height of the shape, determining its size before any growth is applied.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The generated mask with the specified shape and dimensions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_inverted
    - An inverted version of the generated mask, where the shape area is transparent and the rest is opaque.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [MaskToImage](../../Comfy/Nodes/MaskToImage.md)

## Source code
[View source repository on GitHub](https://github.com/kenjiqq/ComfyUI_KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: FL_CreateShapeImageOnPath
- Category: 🏵️Fill Nodes/Image
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Creates an image or batch of images with the specified shape.
Locations are center locations.

# Input types
## Required
- shape
    - The shape input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- coordinates
    - The coordinates input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_width
    - The frame_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The frame_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shape_width
    - The shape_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shape_height
    - The shape_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shape_color
    - The shape_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- bg_color
    - The bg_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- blur_radius
    - The blur_radius input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- intensity
    - The intensity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- size_multiplier
    - The size_multiplier input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trailing
    - The trailing input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- border_width
    - The border_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The border_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

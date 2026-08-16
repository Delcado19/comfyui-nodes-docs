# Documentation
- Class name: FL_TextOverlayNode
- Category: 🏵️Fill Nodes/VFX
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

FL_TextOverlayNode applies a text overlay to an image.
You can specify the text, its position (as a percentage of image dimensions),
font size, font color, and choose from available system or local fonts.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- font
    - The font input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- font_size
    - The font_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- font_color_r
    - The font_color_r input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- font_color_g
    - The font_color_g input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- font_color_b
    - The font_color_b input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- x_percent
    - The x_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_percent
    - The y_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- anchor
    - The anchor input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

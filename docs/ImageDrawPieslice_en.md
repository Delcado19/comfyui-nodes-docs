
# Documentation
- Class name: `ImageDrawPieslice`
- Category: `image/draw`
- Output node: `False`
- Repo Ref: ComfyUI_Custom_Nodes\imagetools\nodes.py

The ImageDrawPieslice node's primary function is to draw a pie slice on an image canvas. It allows customization of the pie slice's dimensions, start and end angles, outline, and fill color. This node provides a way to visually represent data portions or create graphical elements within an image.

# Input types
## Required
- width
    - Specifies the width of the image canvas.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the image canvas.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
    - The x-coordinate of the top-left corner of the pie slice bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
    - The y-coordinate of the top-left corner of the pie slice bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
    - The x-coordinate of the bottom-right corner of the pie slice bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
    - The y-coordinate of the bottom-right corner of the pie slice bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start
    - The start angle of the pie slice, in degrees.
    - Comfy dtype: INT
    - Python dtype: float
- end
    - The end angle of the pie slice, in degrees.
    - Comfy dtype: INT
    - Python dtype: float
- outline_size
    - The thickness of the pie slice outline.
    - Comfy dtype: INT
    - Python dtype: int
- outline_red
    - The red component of the outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
    - The green component of the outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
    - The blue component of the outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_alpha
    - The alpha (transparency) component of the outline color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fill_red
    - The red component of the fill color.
    - Comfy dtype: INT
    - Python dtype: int
- fill_green
    - The green component of the fill color.
    - Comfy dtype: INT
    - Python dtype: int
- fill_blue
    - The blue component of the fill color.
    - Comfy dtype: INT
    - Python dtype: int
- fill_alpha
    - The alpha (transparency) component of the fill color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SSAA
    - The supersampling anti-aliasing factor used to improve rendering quality.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - The method used to resize the image after drawing the pie slice.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Outputs an image tensor containing the drawn pie slice.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](ComfyUI_Custom_Nodes\imagetools\nodes.py)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

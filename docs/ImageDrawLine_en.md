
# Documentation
- Class name: ImageDrawLine
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ImageDrawLine node draws lines on an image. It renders a line between two points using provided size and color specifications, supporting customization via line thickness, color, and antialiasing settings.

# Input types
## Required
- width
- Specify the canvas width, essential for determining the line drawing area.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Specify the canvas height, essential for determining the line drawing area.
    - Comfy dtype: INT
    - Python dtype: int
- size
- Specify the line thickness, crucial for the line's visual effect on the image.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
- Starting x coordinate of the line, marking one end of the line on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
- Starting y coordinate of the line, together with start_x defines the line's start point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
- Ending x coordinate of the line, marking the other end of the line on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
- Ending y coordinate of the line, together with end_x defines the line's end point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- red
- Red component of the line, forming the final color of the drawn line.
    - Comfy dtype: INT
    - Python dtype: int
- green
- Green component of the line, forming the final color of the drawn line.
    - Comfy dtype: INT
    - Python dtype: int
- blue
- Blue component of the line, forming the final color of the drawn line.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
- Alpha (transparency) component of the line color, allowing the drawn line to be transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SSAA
- Supersampling antialiasing factor, improving line visual quality by reducing jagged edges.
    - Comfy dtype: INT
    - Python dtype: int
- method
- Method to adjust image size after drawing the line, affecting the line's final appearance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
- Modified image with the drawn line, returned as a tensor.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

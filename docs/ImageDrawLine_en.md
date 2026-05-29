
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
```python
class ImageDrawLine:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "width": ("INT", {
                    "default": 256,
                    "min": 1,
                    "step": 1
                }),
                "height": ("INT", {
                    "default": 256,
                    "min": 1,
                    "step": 1
                }),
                "size": ("INT", {
                    "default": 1,
                    "min": 1,
                    "step": 1
                }),
                "start_x": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "start_y": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "end_x": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "end_y": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "red": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "green": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "blue": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "alpha": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "SSAA": ("INT", {
                    "default": 4,
                    "min": 1,
                    "max": 16,
                    "step": 1
                }),
                "method": (["lanczos", "bicubic", "hamming", "bilinear", "box", "nearest"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/draw"

    # noinspection PyPep8Naming, PyUnresolvedReferences
    def node(self, width, height, size, start_x, start_y, end_x, end_y, red, green, blue, alpha, SSAA, method):
        canvas = Image.new("RGBA", (width * SSAA, height * SSAA), (0, 0, 0, 0))

        draw = ImageDraw.Draw(canvas)
        draw.line(
            [
                (width * start_x * SSAA, height * start_y * SSAA),
                (width * end_x * SSAA, height * end_y * SSAA)
            ],
            (red, green, blue, int(alpha * 255)), size * SSAA
        )

        canvas = canvas.resize((width, height), get_sampler_by_name(method))

        return (canvas.image_to_tensor().unsqueeze(0),)

```


# Documentation
- Class name: ImageDrawEllipseByContainer
- Category: image/draw
- Output node: False

ImageDrawEllipseByContainer node draws an ellipse within a specified container. It customizes the ellipse appearance using parameters such as position, size, color, and antialiasing. The node simplifies drawing complexity and provides a concise interface for creating ellipses in images.

# Input types
## Required
- container
- The container specifies the image or canvas region where the ellipse will be drawn. It determines the boundaries and context of the drawing operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- start_x
- The starting x coordinate of the ellipse, defining one axis of its bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
- The starting y coordinate of the ellipse, defining one axis of its bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
- The ending x coordinate of the ellipse, defining the corresponding axis of its bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
- The ending y coordinate of the ellipse, defining the corresponding axis of its bounding box.
    - Comfy dtype: FLOAT
    - Python dtype: float
- outline_size
- Specifies the thickness of the ellipse outline.
    - Comfy dtype: INT
    - Python dtype: int
- outline_red
- Red component of the ellipse outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
- Green component of the ellipse outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
- Blue component of the ellipse outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_alpha
- Alpha component of the ellipse outline color.
    - Comfy dtype: FLOAT
    - Python dtype: int
- fill_red
- Red component of the ellipse fill color.
    - Comfy dtype: INT
    - Python dtype: int
- fill_green
- Green component of the ellipse fill color.
    - Comfy dtype: INT
    - Python dtype: int
- fill_blue
- Blue component of the ellipse fill color.
    - Comfy dtype: INT
    - Python dtype: int
- fill_alpha
- Alpha component of the ellipse fill color.
    - Comfy dtype: FLOAT
    - Python dtype: int
- SSAA
- Supersampling antialiasing factor to improve drawing quality.
    - Comfy dtype: INT
    - Python dtype: int
- method
- Specifies the drawing method or algorithm used to render the ellipse.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
- Output is an image containing the specified ellipse drawn within the container.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageDrawEllipseByContainer:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "container": ("IMAGE",),
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
                "outline_size": ("INT", {
                    "default": 1,
                    "step": 1
                }),
                "outline_red": ("INT", {
                    "default": 0,
                    "max": 255,
                    "step": 1
                }),
                "outline_green": ("INT", {
                    "default": 0,
                    "max": 255,
                    "step": 1
                }),
                "outline_blue": ("INT", {
                    "default": 0,
                    "max": 255,
                    "step": 1
                }),
                "outline_alpha": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "fill_red": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "fill_green": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "fill_blue": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "fill_alpha": ("FLOAT", {
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

    # noinspection PyPep8Naming
    def node(
            self,
            container,
            start_x,
            start_y,
            end_x,
            end_y,
            outline_size,
            outline_red,
            outline_green,
            outline_blue,
            outline_alpha,
            fill_red,
            fill_green,
            fill_blue,
            fill_alpha,
            SSAA,
            method
    ):
        return ImageDrawEllipse().node(
            container[0, :, :, 0].shape[1],
            container[0, :, :, 0].shape[0],
            start_x,
            start_y,
            end_x,
            end_y,
            outline_size,
            outline_red,
            outline_green,
            outline_blue,
            outline_alpha,
            fill_red,
            fill_green,
            fill_blue,
            fill_alpha,
            SSAA,
            method
        )

```


# Documentation
- Class name: ImageDrawArcByContainer
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ImageDrawArcByContainer node draws an arc on a given image container. It uses the container's size and properties to accurately render the arc, customizing output via parameters such as size, start and end points, color, and drawing method.

# Input types
## Required
- container
- Container input specifies the image on which to draw the arc, providing basic size and property information required for the drawing operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- size
- Defines the thickness of the arc to be drawn on the image.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
- X coordinate of the arc's start point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- start_y
- Y coordinate of the arc's start point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- end_x
- X coordinate of the arc's end point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- end_y
- Y coordinate of the arc's end point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- start
- Starting angle of the arc.
    - Comfy dtype: INT
    - Python dtype: float
- end
- Ending angle of the arc.
    - Comfy dtype: INT
    - Python dtype: float
- red
- Red component of the arc color.
    - Comfy dtype: INT
    - Python dtype: int
- green
- Green component of the arc color.
    - Comfy dtype: INT
    - Python dtype: int
- blue
- Blue component of the arc color.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
- Opacity of the arc color.
    - Comfy dtype: FLOAT
    - Python dtype: int
- SSAA
- Specifies the supersampling anti-aliasing (SSAA) level applied to the arc to improve visual quality.
    - Comfy dtype: INT
    - Python dtype: bool
- method
- Method used to draw the arc, affecting rendering technique.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
- Output is an image containing the specified arc, reflecting the input parameters and modifications.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageDrawArcByContainer:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "container": ("IMAGE",),
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
                "start": ("INT", {
                    "default": 0,
                    "max": 360,
                    "step": 1
                }),
                "end": ("INT", {
                    "default": 180,
                    "max": 360,
                    "step": 1
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

    # noinspection PyPep8Naming
    def node(self, container, size, start_x, start_y, end_x, end_y, start, end, red, green, blue, alpha, SSAA, method):
        return ImageDrawArc().node(
            container[0, :, :, 0].shape[1],
            container[0, :, :, 0].shape[0],
            size,
            start_x,
            start_y,
            end_x,
            end_y,
            start,
            end,
            red,
            green,
            blue,
            alpha,
            SSAA,
            method
        )

```

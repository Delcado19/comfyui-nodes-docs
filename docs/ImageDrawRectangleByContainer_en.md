
# Documentation
- Class name: ImageDrawRectangleByContainer
- Category: image/draw
- Output node: False

The ImageDrawRectangleByContainer node is used to draw rectangles within a specified container, allowing precise control over the rectangle's dimensions and style. By specifying the start and end points, along with color and style properties, this node can create graphical elements in an image.

# Input types
## Required
- container
    - The container used for drawing the rectangle, defining the boundaries and context of the drawing operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- start_x
    - The starting x-coordinate of the rectangle, marking the horizontal boundary's start point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
    - The starting y-coordinate of the rectangle, marking the vertical boundary's start point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
    - The ending x-coordinate of the rectangle, defining the horizontal boundary's end point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
    - The ending y-coordinate of the rectangle, defining the vertical boundary's end point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- outline_size
    - Specifies the thickness of the rectangle's outline, used to customize the rectangle border.
    - Comfy dtype: INT
    - Python dtype: int
- outline_red
    - The red component of the outline color, contributes to the overall color of the rectangle border.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
    - The green component of the outline color, contributes to the overall color of the rectangle border.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
    - The blue component of the outline color, contributes to the overall color of the rectangle border.
    - Comfy dtype: INT
    - Python dtype: int
- outline_alpha
    - The transparency component of the outline color, used for the transparent effect of the rectangle border.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fill_red
    - The red component of the rectangle fill color, determining the primary color inside the rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- fill_green
    - The green component of the rectangle fill color, determining the primary color inside the rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- fill_blue
    - The blue component of the rectangle fill color, determining the primary color inside the rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- fill_alpha
    - The transparency component of the rectangle fill color, used for the transparent effect inside the rectangle.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SSAA
    - Specifies the supersampling anti-aliasing factor, improving image quality by reducing aliasing effects.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - Defines the method used for the drawing operation, affecting rendering quality and performance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Comfy dtype: IMAGE
    - The resulting image with the rectangle drawn within the specified container, reflecting all specified styles and dimensions.
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageDrawRectangleByContainer:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "container": ("IMAGE",),
                "start_x": ("FLOAT", {
                    "default": 0.1,
                    "max": 1.0,
                    "step": 0.01
                }),
                "start_y": ("FLOAT", {
                    "default": 0.2,
                    "max": 1.0,
                    "step": 0.01
                }),
                "end_x": ("FLOAT", {
                    "default": 0.9,
                    "max": 1.0,
                    "step": 0.01
                }),
                "end_y": ("FLOAT", {
                    "default": 0.8,
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
        return ImageDrawRectangle().node(
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

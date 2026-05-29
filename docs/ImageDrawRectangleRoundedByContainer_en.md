
# Documentation
- Class name: `ImageDrawRectangleRoundedByContainer`
- Category: `image/draw`
- Output node: `False`

ImageDrawRectangleRoundedByContainer node is specifically used to draw rounded rectangles within a specified container. It utilizes the container's dimensions to determine the drawing area and allows detailed customization of the rectangle's appearance, including its size, border, fill color, and corner rounding.

# Input types
## Required
- **`container`**
    - Container used for drawing rounded rectangles. It defines the boundaries and context of the drawing operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- **`start_x`**
    - Start x coordinate of the rectangle, defining the left boundary of the shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`start_y`**
    - Start y coordinate of the rectangle, defining the top boundary of the shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`end_x`**
    - End x coordinate of the rectangle, defining the right boundary of the shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`end_y`**
    - End y coordinate of the rectangle, defining the bottom boundary of the shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`radius`**
    - Radius of the rounded corners, determining the roundness of the rectangle's corners.
    - Comfy dtype: INT
    - Python dtype: float
- **`outline_size`**
    - Thickness of the rectangle outline.
    - Comfy dtype: INT
    - Python dtype: float
- **`outline_red`**
    - The red component of the outline color.
    - Comfy dtype: INT
    - Python dtype: float
- **`outline_green`**
    - The green component of the outline color.
    - Comfy dtype: INT
    - Python dtype: float
- **`outline_blue`**
    - The blue component of the outline color.
    - Comfy dtype: INT
    - Python dtype: float
- **`outline_alpha`**
    - Alpha component of the outline color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`fill_red`**
    - Red component of the rectangle fill color.
    - Comfy dtype: INT
    - Python dtype: float
- **`fill_green`**
    - Green component of the rectangle fill color.
    - Comfy dtype: INT
    - Python dtype: float
- **`fill_blue`**
    - Blue component of the rectangle fill color.
    - Comfy dtype: INT
    - Python dtype: float
- **`fill_alpha`**
    - Alpha component of the rectangle fill color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`top_left_corner`**
    - Specifies whether the top-left corner should be rounded.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- **`top_right_corner`**
    - Specifies whether the top-right corner should be rounded.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- **`bottom_right_corner`**
    - Specifies whether the bottom-right corner should be rounded.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- **`bottom_left_corner`**
    - Specifies whether the bottom-left corner should be rounded.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- **`SSAA`**
    - Supersampling anti-aliasing factor used to improve drawing quality.
    - Comfy dtype: INT
    - Python dtype: int
- **`method`**
    - Method used for drawing, affecting the rendering technique.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- **`image`**
    - Resulting image with the rounded rectangle drawn inside the specified container.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageDrawRectangleRoundedByContainer:
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
                "radius": ("INT", {
                    "default": 180,
                    "max": 360,
                    "step": 1
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
                "top_left_corner": (["true", "false"],),
                "top_right_corner": (["true", "false"],),
                "bottom_right_corner": (["true", "false"],),
                "bottom_left_corner": (["true", "false"],),
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

    # noinspection PyPep8Naming, PyUnresolvedReferences, PyArgumentList
    def node(
            self,
            container,
            start_x,
            start_y,
            end_x,
            end_y,
            radius,
            outline_size,
            outline_red,
            outline_green,
            outline_blue,
            outline_alpha,
            fill_red,
            fill_green,
            fill_blue,
            fill_alpha,
            top_left_corner,
            top_right_corner,
            bottom_right_corner,
            bottom_left_corner,
            SSAA,
            method
    ):
        return ImageDrawRectangleRounded().image_draw_rounded(
            container[0, :, :, 0].shape[1],
            container[0, :, :, 0].shape[0],
            start_x,
            start_y,
            end_x,
            end_y,
            radius,
            outline_size,
            outline_red,
            outline_green,
            outline_blue,
            outline_alpha,
            fill_red,
            fill_green,
            fill_blue,
            fill_alpha,
            top_left_corner,
            top_right_corner,
            bottom_right_corner,
            bottom_left_corner,
            SSAA,
            method
        )

```

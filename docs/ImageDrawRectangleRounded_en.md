
# Documentation
- Class name: `ImageDrawRectangleRounded`
- Category: `image/draw`
- Output node: `False`

The ImageDrawRectangleRounded node draws rounded rectangles on images. It allows detailed customization of the rectangle's appearance, including size, border color, fill color, and corner radius, creating visually appealing graphics with rounded corners.

# Input types
## Required
- **`width`**
    - Canvas width for drawing the rounded rectangle.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`height`**
    - Canvas height for drawing the rounded rectangle.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`start_x`**
    - X coordinate of the rectangle's starting point, defining its position on the x-axis.
    - Comfy dtype: `FLOAT`
    - Python dtype: `int`
- **`start_y`**
    - Y coordinate of the rectangle's starting point, defining its position on the y-axis.
    - Comfy dtype: `FLOAT`
    - Python dtype: `int`
- **`end_x`**
    - X coordinate of the rectangle's endpoint, determining the rectangle's width.
    - Comfy dtype: `FLOAT`
    - Python dtype: `int`
- **`end_y`**
    - Y coordinate of the rectangle's endpoint, determining the rectangle's height.
    - Comfy dtype: `FLOAT`
    - Python dtype: `int`
- **`radius`**
    - Corner radius, specifying the degree of rounding.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`outline_size`**
    - Thickness of the rectangle's outline, used to customize the border appearance.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`outline_red`**
    - Red component of the outline color, affecting the overall border color.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`outline_green`**
    - Green component of the outline color, affecting the overall border color.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`outline_blue`**
    - Blue component of the outline color, affecting the overall border color.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`outline_alpha`**
    - Transparency value of the outline, used to adjust border opacity.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`
- **`fill_red`**
    - The red component of the rectangle fill color, determining the primary color inside the rectangle.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`fill_green`**
    - The green component of the rectangle fill color, determining the primary color inside the rectangle.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`fill_blue`**
    - The blue component of the rectangle fill color, determining the primary color inside the rectangle.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`fill_alpha`**
    - Transparency value of the fill, used to adjust the rectangle's internal opacity.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`
- **`top_left_corner`**
    - Flag indicating whether the top-left corner should be rounded.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `bool`
- **`top_right_corner`**
    - Flag indicating whether the top-right corner should be rounded.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `bool`
- **`bottom_right_corner`**
    - Flag indicating whether the bottom-right corner should be rounded.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `bool`
- **`bottom_left_corner`**
    - Flag indicating whether the bottom-left corner should be rounded.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `bool`
- **`SSAA`**
    - Supersampling anti-aliasing factor, improving drawing quality by reducing jagged edges.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`method`**
    - Method used to resize the image, affecting the final output quality.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`

# Output types
- **`image`**
    - Output image with the drawn rounded rectangle, showcasing the applied customizations.
    - Comfy dtype: `IMAGE`
    - Python dtype: `numpy.ndarray`


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageDrawRectangleRounded:
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
            width,
            height,
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
        canvas = Image.new("RGBA", (width * SSAA, height * SSAA), (0, 0, 0, 0))

        draw = ImageDraw.Draw(canvas)
        draw.rounded_rectangle(
            (
                (width * start_x * SSAA, height * start_y * SSAA),
                (width * end_x * SSAA, height * end_y * SSAA)
            ),
            radius * SSAA,
            (fill_red, fill_green, fill_blue, int(fill_alpha * 255)),
            (outline_red, outline_green, outline_blue, int(outline_alpha * 255)),
            outline_size * SSAA,
            corners=(
                True if top_left_corner == "true" else False,
                True if top_right_corner == "true" else False,
                True if bottom_right_corner == "true" else False,
                True if bottom_left_corner == "true" else False
            )
        )

        canvas = canvas.resize((width, height), get_sampler_by_name(method))

        return (canvas.image_to_tensor().unsqueeze(0),)

```

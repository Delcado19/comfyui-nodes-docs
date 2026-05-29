
# Documentation
- Class name: ImageDrawRectangle
- Category: image/draw
- Output node: False

The ImageDrawRectangle node provides the functionality to draw rectangles on images. It allows users to customize the dimensions, outline, and fill properties of the rectangle, enabling the addition of simple geometric shapes on images for various purposes such as highlighting areas, creating borders, or adding visual annotations.

# Input types
## Required
- width
    - Specifies the canvas width for drawing the rectangle, affecting the overall size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the canvas height for drawing the rectangle, affecting the overall size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
    - Specifies the starting x-coordinate of the rectangle, affecting the horizontal position where the rectangle drawing begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
    - Specifies the starting y-coordinate of the rectangle, affecting the vertical position where the rectangle drawing begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
    - Specifies the ending x-coordinate of the rectangle, determining the horizontal extent of the rectangle.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
    - Specifies the ending y-coordinate of the rectangle, determining the vertical extent of the rectangle.
    - Comfy dtype: FLOAT
    - Python dtype: float
- outline_size
    - Determines the thickness of the rectangle's outline, allowing customization of the rectangle border's appearance.
    - Comfy dtype: INT
    - Python dtype: int
- outline_red
    - Specifies the red component of the outline color, contributing to the overall color of the rectangle's border.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
    - Specifies the green component of the outline color, contributing to the overall color of the rectangle's border.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
    - Specifies the blue component of the outline color, contributing to the overall color of the rectangle's border.
    - Comfy dtype: INT
    - Python dtype: int
- outline_alpha
    - Specifies the alpha (transparency) component of the outline color, allowing control over the opacity of the rectangle's border.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fill_red
    - Specifies the red component of the fill color, contributing to the overall color inside the rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- fill_green
    - Specifies the green component of the fill color, contributing to the overall color inside the rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- fill_blue
    - Specifies the blue component of the fill color, contributing to the overall color inside the rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- fill_alpha
    - Specifies the alpha (transparency) component of the fill color, allowing control over the opacity of the color inside the rectangle.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SSAA
    - Supersampling anti-aliasing factor, improving image quality by reducing jagged edges.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - The method parameter specifies the rescaling algorithm used when resizing the image, affecting the quality of the final output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is an image tensor with the drawn rectangle, reflecting the modifications made to the original image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageDrawRectangle:
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

    # noinspection PyPep8Naming, PyUnresolvedReferences
    def node(
            self,
            width,
            height,
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
        canvas = Image.new("RGBA", (width * SSAA, height * SSAA), (0, 0, 0, 0))

        draw = ImageDraw.Draw(canvas)
        draw.rectangle(
            (
                (width * start_x * SSAA, height * start_y * SSAA),
                (width * end_x * SSAA, height * end_y * SSAA)
            ),
            (fill_red, fill_green, fill_blue, int(fill_alpha * 255)),
            (outline_red, outline_green, outline_blue, int(outline_alpha * 255)),
            outline_size * SSAA
        )

        canvas = canvas.resize((width, height), get_sampler_by_name(method))

        return (canvas.image_to_tensor().unsqueeze(0),)

```

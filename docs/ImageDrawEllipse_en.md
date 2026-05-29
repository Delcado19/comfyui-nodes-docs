
# Documentation
- Class name: ImageDrawEllipse
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageDrawEllipse node is used to draw an ellipse on an image. It allows users to customize the appearance of the ellipse, including outline and fill colors, as well as the size and position of the ellipse on the canvas. This node utilizes supersampling anti-aliasing (SSAA) technology to achieve higher quality rendering effects.

# Input types
## Required
- width
    - Specifies the canvas width for drawing the ellipse, affecting the overall size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the canvas height, affecting the vertical dimension of the image and the potential size of the ellipse.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
    - Specifies the starting x coordinate of the ellipse on the image, crucial for defining the ellipse's position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
    - Specifies the starting y coordinate of the ellipse, crucial for positioning the ellipse on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
    - Defines the ending x coordinate of the ellipse, determining its width and affecting its overall shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
    - Defines the ending y coordinate of the ellipse, determining its height and affecting its overall shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- outline_size
    - Determines the thickness of the ellipse outline, affecting the visual prominence of the ellipse on the image.
    - Comfy dtype: INT
    - Python dtype: float
- outline_red
    - Specifies the red component of the ellipse outline color, used for color customization.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
    - Specifies the green component of the ellipse outline color, used for color customization.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
    - Specifies the blue component of the ellipse outline color, used for color customization.
    - Comfy dtype: INT
    - Python dtype: int
- outline_alpha
    - Determines the opacity of the ellipse outline, allowing transparent effects to be set.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fill_red
    - Specifies the red component of the ellipse fill color, used for fill color customization.
    - Comfy dtype: INT
    - Python dtype: int
- fill_green
    - Specifies the green component of the ellipse fill color, used for fill color customization.
    - Comfy dtype: INT
    - Python dtype: int
- fill_blue
    - Specifies the blue component of the ellipse fill color, used for fill color customization.
    - Comfy dtype: INT
    - Python dtype: int
- fill_alpha
    - Determines the opacity of the ellipse fill, allowing transparent effects in the fill color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SSAA
    - Specifies the applied supersampling anti-aliasing (SSAA) level, improving the quality of the ellipse rendering.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - Defines the method for resizing the image after drawing the ellipse, affecting the final image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Returns an image tensor with the drawn ellipse, displaying the customized appearance based on the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageDrawEllipse:
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
        draw.ellipse(
            [
                (width * start_x * SSAA, height * start_y * SSAA),
                (width * end_x * SSAA, height * end_y * SSAA)
            ],
            (fill_red, fill_green, fill_blue, int(fill_alpha * 255)),
            (outline_red, outline_green, outline_blue, int(outline_alpha * 255)),
            outline_size * SSAA
        )

        canvas = canvas.resize((width, height), get_sampler_by_name(method))

        return (canvas.image_to_tensor().unsqueeze(0),)

```

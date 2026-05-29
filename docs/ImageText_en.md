
# Documentation
- Class name: ImageText
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageText node renders text on an image canvas, supporting custom fonts, sizes, colors, alignment, and margins. It allows creating text-based images with specified styles and layouts, including an option for outlined text. This node is particularly useful for adding captions, watermarks, or other text elements to images, providing flexible text rendering for image processing and design workflows.

# Input types
## Required
- text
    - The text to render on the image. It defines the content of the image and is the core of the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str
- font
    - Specifies the font style used for the text, affecting the visual appearance of the rendered text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- size
    - The font size of the text, determining the scale of the text relative to the image.
    - Comfy dtype: INT
    - Python dtype: int
- red
    - The red component of the text color, part of the RGBA color model used to define the text color.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green component of the text color, part of the RGBA color model used to define the text color.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue component of the text color, completing the RGB portion of the text color specification.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha (transparency) component of the text and outline colors, allowing opacity adjustment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- margin_x
    - The horizontal margin size, affecting the positioning of the text from the left and right edges of the image.
    - Comfy dtype: INT
    - Python dtype: int
- margin_y
    - The vertical margin size, affecting the positioning of the text from the top and bottom edges of the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image tensor with rendered text, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageText:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "text": ("STRING", {"multiline": False}),
                "font": (folder_paths.get_filename_list("fonts"),),
                "size": ("INT", {
                    "default": 28,
                    "min": 1,
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
                "margin_x": ("INT", {
                    "default": 0,
                    "step": 1
                }),
                "margin_y": ("INT", {
                    "default": 0,
                    "step": 1
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/draw"

    def node(self, text, font, size, red, green, blue, alpha, margin_x, margin_y):
        outline_size = 0
        outline_red = 255
        outline_green = 255
        outline_blue = 255

        return ImageTextOutlined().node(
            text,
            font,
            size,
            red,
            green,
            blue,
            outline_size,
            outline_red,
            outline_green,
            outline_blue,
            alpha,
            margin_x,
            margin_y
        )

```

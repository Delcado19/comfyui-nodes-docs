
# Documentation
- Class name: ImageTextMultilineOutlined
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageTextMultilineOutlined node is specifically designed for creating images with multiline text and outlined text. It allows detailed customization of text appearance, including font selection, alignment, size, color, and outline properties, as well as the position of text within the image.

# Input types
## Required
- text
    - The text parameter allows input of multiline text to be rendered on the image. It supports newline characters to split text into multiple lines, enabling the creation of text blocks or paragraphs.
    - Comfy dtype: STRING
    - Python dtype: str
- font
    - The font parameter specifies the font style used for the text. It selects from a list of available fonts, allowing aesthetic customization of text appearance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- align
    - The alignment parameter determines the horizontal alignment of text within the image. It supports options such as "left", "center", and "right", enabling text to be positioned according to design requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- size
    - The size parameter controls the font size of the text, allowing adjustment of visual prominence and readability of text within the image.
    - Comfy dtype: INT
    - Python dtype: int
- red
    - The red parameter specifies the red component of the text color, enabling customization of the text's color appearance.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green parameter specifies the green component of the text color, contributing to the overall color customization of the text.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue parameter specifies the blue component of the text color, allowing fine-tuning of the text's visual color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_size
    - The outline size parameter specifies the thickness of the text outline, allowing enhanced visibility and aesthetic customization.
    - Comfy dtype: INT
    - Python dtype: int
- outline_red
    - The outline red parameter defines the red component of the text outline color, enabling further customization of the text's outline appearance.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
    - The outline green parameter defines the green component of the text outline color, contributing to the overall color customization of the outline.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
    - The outline blue parameter defines the blue component of the text outline color, allowing detailed customization of the outline's visual appearance.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha parameter controls the opacity of the text, enabling text to be rendered at different transparency levels.
    - Comfy dtype: FLOAT
    - Python dtype: float
- margin_x
    - The margin_x parameter specifies the horizontal margin around the text, affecting the positioning of text relative to the image edges.
    - Comfy dtype: INT
    - Python dtype: int
- margin_y
    - The margin_y parameter specifies the vertical margin around the text, affecting the vertical spacing and positioning of text within the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output type represents the generated image with rendered text, including any specified outlines and custom settings.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageTextMultilineOutlined:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "text": ("STRING", {"multiline": True}),
                "font": (folder_paths.get_filename_list("fonts"),),
                "align": (["left", "center", "right"],),
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

    def node(
            self, text, font, align, size, red, green, blue, outline_size, outline_red, outline_green, outline_blue,
            alpha, margin_x, margin_y
    ):
        font_path = folder_paths.get_full_path("fonts", font)
        font = ImageFont.truetype(font_path, size, encoding="unic")

        lines = text.split('\n').__len__()
        (_, top, _, _) = font.getbbox(text)

        canvas = Image.new("RGBA", (0, 0))
        draw = ImageDraw.Draw(canvas)
        text_size = draw.multiline_textbbox((0, 0), text, font)

        canvas = Image.new("RGBA", (
            text_size[2] + (margin_x + outline_size) * 2,
            text_size[3] - top + (margin_y + (outline_size * lines)) * 2
        ), (0, 0, 0, 0))

        draw = ImageDraw.Draw(canvas)

        draw.text(
            (margin_x + outline_size, margin_y + outline_size - top),
            text=text, fill=(red, green, blue, int(alpha * 255)),
            stroke_fill=(outline_red, outline_green, outline_blue, int(alpha * 255)),
            stroke_width=outline_size, font=font, align=align
        )

        return (canvas.image_to_tensor().unsqueeze(0),)

```


# Documentation
- Class name: ImageTextOutlined
- Category: image/draw
- Output node: False

The ImageTextOutlined node is used to create text images with outlines. It allows users to customize the appearance of the text, including font, size, color and outline properties, as well as the position of the text in the image. This node is particularly suitable for adding visually clear and recognizable text on images, and can be applied in various scenarios such as graphic design, watermarking, or content creation.

# Input types
## Required
- text
    - The text to be rendered onto the image. This parameter is crucial because it defines the content of the generated image.
    - Comfy dtype: STRING
    - Python dtype: str
- font
    - Specifies the font used for the text. This parameter affects the style and appearance of the text in the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- size
    - Determines the font size of the text, affecting its visibility and space occupation in the image.
    - Comfy dtype: INT
    - Python dtype: int
- red
    - Red component of the text color, used to customize the text color.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - Green component of the text color, used to adjust the text color.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - Blue component of the text color, used to customize the appearance of the text.
    - Comfy dtype: INT
    - Python dtype: int
- outline_size
    - Specifies the thickness of the text outline, enhancing the visibility of the text against complex backgrounds.
    - Comfy dtype: INT
    - Python dtype: int
- outline_red
    - Red component of the outline color, used to customize the outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
    - Green component of the outline color, used to adjust the outline color.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
    - Blue component of the outline color, used to customize the appearance of the outline.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - Controls the opacity of the text, allowing the creation of semi-transparent text effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- margin_x
    - Margin from the text to the horizontal edge of the image, affecting the horizontal positioning of the text.
    - Comfy dtype: INT
    - Python dtype: int
- margin_y
    - Margin from the text to the vertical edge of the image, affecting the vertical positioning of the text in the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image tensor that contains the rendered specified text, including the outline effect around the text.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTextOutlined:
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
            self, text, font, size, red, green, blue, outline_size, outline_red, outline_green, outline_blue, alpha,
            margin_x, margin_y
    ):
        font_path = folder_paths.get_full_path("fonts", font)
        font = ImageFont.truetype(font_path, size, encoding="unic")

        (left, top, right, bottom) = font.getbbox(text)

        canvas = Image.new("RGBA", (
            right + (margin_x + outline_size) * 2,
            bottom - top + (margin_y + outline_size) * 2
        ), (0, 0, 0, 0))

        draw = ImageDraw.Draw(canvas)

        draw.text(
            (margin_x + outline_size, margin_y + outline_size - top),
            text=text, fill=(red, green, blue, int(alpha * 255)),
            stroke_fill=(outline_red, outline_green, outline_blue, int(alpha * 255)),
            stroke_width=outline_size, font=font
        )

        return (canvas.image_to_tensor().unsqueeze(0),)

```

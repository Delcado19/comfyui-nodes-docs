# Documentation
- Class name: TextImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node facilitates creating images with text content, providing a range of customization options such as font style, size, and color. It merges text data with visual representation, enabling generation of custom visual outputs that integrate text and design elements. This node is particularly suitable for application scenarios that require synthesizing text information into image format.

# Input types
## Required
- text
    - The text parameter is crucial; it defines the text content to be rendered into the image. It is the primary input to the node's operation, determining the information or message to be visualized.
    - Comfy dtype: STRING
    - Python dtype: str
- font_path
    - The font_path parameter specifies the font source for the text. It is crucial in determining the stylistic appearance of the text in the generated image, affecting overall aesthetics and readability.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The font_size parameter adjusts the size of the text, directly affecting the prominence and readability of the text in the image. It is a key factor in the visual impact of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- spacing
    - The spacing parameter defines the distance between characters and lines of text, which can enhance or reduce the clarity and visual appeal of the image. It plays an important role in the arrangement and presentation of text content.
    - Comfy dtype: INT
    - Python dtype: int
- text_color
    - The text_color parameter sets the color of the text, affecting the contrast and visual dynamics of the image. It is an important aspect of design, contributing to the overall visual effect.
    - Comfy dtype: STRING
    - Python dtype: str
- vertical
    - The vertical parameter determines the orientation of the text, either horizontal or vertical. This choice affects the layout and structure of the text in the image, influencing composition and flow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- stroke
    - The stroke parameter applies a border or outline around the text, enhancing its definition and separation from the background. This adds extra visual detail and depth to the text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The image output is the primary result of the node, representing the visual representation of the input text. It encapsulates design choices and text layout, providing a tangible output that can be used in various applications.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- MASK
    - The MASK output provides the alpha channel representation of the text image, which can be used for advanced image processing and compositing tasks. It offers control over text transparency and blending with other visual elements.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class TextImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'default': '龍馬精神迎新歲', 'dynamicPrompts': False}), 'font_path': ('STRING', {'multiline': False, 'default': FONT_PATH, 'dynamicPrompts': False}), 'font_size': ('INT', {'default': 100, 'min': 100, 'max': 1000, 'step': 1, 'display': 'number'}), 'spacing': ('INT', {'default': 12, 'min': -200, 'max': 200, 'step': 1, 'display': 'number'}), 'text_color': ('STRING', {'multiline': False, 'default': '#000000', 'dynamicPrompts': False}), 'vertical': ('BOOLEAN', {'default': True}), 'stroke': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Image'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False, False)

    def run(self, text, font_path, font_size, spacing, text_color, vertical, stroke):
        (img, mask) = generate_text_image(text, font_path, font_size, text_color, vertical, stroke, (0, 0, 0), 1, spacing)
        img = pil2tensor(img)
        mask = pil2tensor(mask)
        return (img, mask)
```
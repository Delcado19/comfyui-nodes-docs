# Documentation
- Class name: CR_SimpleTextWatermark
- Category: Comfyroll/Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleTextWatermark node overlays text as a watermark on an image. It allows customization of text attributes such as alignment, opacity, and font style to seamlessly blend the watermark with the image content.

# Input types
## Required
- image
- Image parameter is crucial because it defines the base media on which the watermark text will be applied. The chosen image directly influences the final appearance of the watermark in the image context.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
- Text parameter specifies the watermark content to overlay on the image. The information and style of the text are essential for conveying the intended message or brand to the audience.
    - Comfy dtype: STRING
    - Python dtype: str
- align
- Alignment parameter determines the position of the watermark text relative to the image. This ensures the text is placed in a visually appealing and appropriate location.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
- Font name parameter selects the typeface for the watermark text. Font choice can significantly affect readability and visual appeal of the text within the image.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
- Font size parameter sets the size of the watermark text. This attribute matters because it influences the prominence and legibility of the text when displayed on the image.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
- Font color parameter defines the color of the watermark text. It plays a key role in making the text stand out against the image background while maintaining a consistent visual theme.
    - Comfy dtype: STRING
    - Python dtype: str
- opacity
- Opacity parameter adjusts the transparency level of the watermark text. It is important because it allows the text to be visible without overwhelming the underlying image content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_margin
- x_margin parameter specifies the horizontal spacing from the image edge to the watermark text. This is important for achieving a balanced layout and preventing the text from appearing too close to the image edge.
    - Comfy dtype: INT
    - Python dtype: int
- y_margin
- y_margin parameter specifies the vertical spacing from the image edge to the watermark text. This is critical for maintaining an aesthetically pleasing layout and ensuring the text is not obscured by other image elements.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- font_color_hex
- font_color_hex parameter allows using a custom hexadecimal color value for the watermark text. This may be important for precise color matching with brand or design specifications.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
- IMAGE output provides the final image with the watermark applied. It is the result of all node parameters working together to produce the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- show_help output provides a URL to the node documentation for further guidance or assistance. This is a valuable resource for users seeking more information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleTextWatermark:

    @classmethod
    def INPUT_TYPES(s):
        font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
        ALIGN_OPTIONS = ['center', 'top left', 'top center', 'top right', 'bottom left', 'bottom center', 'bottom right']
        return {'required': {'image': ('IMAGE',), 'text': ('STRING', {'multiline': False, 'default': '@ your name'}), 'align': (ALIGN_OPTIONS,), 'opacity': ('FLOAT', {'default': 0.3, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'font_name': (file_list,), 'font_size': ('INT', {'default': 50, 'min': 1, 'max': 1024}), 'font_color': (COLORS,), 'x_margin': ('INT', {'default': 20, 'min': -1024, 'max': 1024}), 'y_margin': ('INT', {'default': 20, 'min': -1024, 'max': 1024})}, 'optional': {'font_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'overlay_text'
    CATEGORY = icons.get('Comfyroll/Graphics/Text')

    def overlay_text(self, image, text, align, font_name, font_size, font_color, opacity, x_margin, y_margin, font_color_hex='#000000'):
        text_color = get_color_values(font_color, font_color_hex, color_mapping)
        total_images = []
        for img in image:
            img = tensor2pil(img)
            textlayer = Image.new('RGBA', img.size)
            draw = ImageDraw.Draw(textlayer)
            font_file = os.path.join('fonts', str(font_name))
            resolved_font_path = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), font_file)
            font = ImageFont.truetype(str(resolved_font_path), size=font_size)
            textsize = get_text_size(draw, text, font)
            if align == 'center':
                textpos = [(img.size[0] - textsize[0]) // 2, (img.size[1] - textsize[1]) // 2]
            elif align == 'top left':
                textpos = [x_margin, y_margin]
            elif align == 'top center':
                textpos = [(img.size[0] - textsize[0]) // 2, y_margin]
            elif align == 'top right':
                textpos = [img.size[0] - textsize[0] - x_margin, y_margin]
            elif align == 'bottom left':
                textpos = [x_margin, img.size[1] - textsize[1] - y_margin]
            elif align == 'bottom center':
                textpos = [(img.size[0] - textsize[0]) // 2, img.size[1] - textsize[1] - y_margin]
            elif align == 'bottom right':
                textpos = [img.size[0] - textsize[0] - x_margin, img.size[1] - textsize[1] - y_margin]
            draw.text(textpos, text, font=font, fill=text_color)
            if opacity != 1:
                textlayer = reduce_opacity(textlayer, opacity)
            out_image = Image.composite(textlayer, img, textlayer)
            out_image = np.array(out_image.convert('RGB')).astype(np.float32) / 255.0
            out_image = torch.from_numpy(out_image).unsqueeze(0)
            total_images.append(out_image)
        images_out = torch.cat(total_images, 0)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Text-Nodes#cr-simple-text-watermark'
        return (images_out, show_help)
```
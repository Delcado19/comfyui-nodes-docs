# Documentation
- Class name: CR_SimpleImageCompare
- Category: Comfyroll/Graphics/Template
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SimpleImageCompare node is designed to compare two images side by side and overlay text on the images. It provides an intuitive way to visually assess differences between images and includes customization options for text, font, and layout.

# Input types
## Required
- text1
- The first paragraph of text to overlay on the first image. This is essential for providing context or description of the compared image.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
- The second paragraph of text to overlay on the second image. It serves a similar purpose as 'text1', offering a way to annotate or describe the second image in the comparison.
    - Comfy dtype: STRING
    - Python dtype: str
- footer_height
- The footer height where the text is placed. This parameter is crucial for controlling the vertical space allocated to the text overlay.
    - Comfy dtype: INT
    - Python dtype: int
- font_name
- The font name used for the text overlay. This affects the visual appearance of the text and is a key parameter for styled output.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
- The font size of the text overlay. It determines the prominence of the text on the image and is important for adjusting readability.
    - Comfy dtype: INT
    - Python dtype: int
- mode
- The display mode for text and background colors. It allows users to choose between light or dark themes for better contrast and visibility.
    - Comfy dtype: COMBO['normal', 'dark']
    - Python dtype: str
- border_thickness
- The border thickness around the images. This is an important parameter for defining separation and framing of the images being compared.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image1
- The first image to compare. It is the core input for the node's function, as the node is intended to compare and display images.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image2
- The second image to compare. It works together with 'image1' to provide a side‑by‑side comparison for the user.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- image
- The resulting image that contains the two input images compared side by side with overlaid text.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- A URL link to the node's documentation for further guidance on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleImageCompare:

    @classmethod
    def INPUT_TYPES(s):
        font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
        return {'required': {'text1': ('STRING', {'multiline': True, 'default': 'text'}), 'text2': ('STRING', {'multiline': True, 'default': 'text'}), 'footer_height': ('INT', {'default': 100, 'min': 0, 'max': 1024}), 'font_name': (file_list,), 'font_size': ('INT', {'default': 50, 'min': 0, 'max': 1024}), 'mode': (['normal', 'dark'],), 'border_thickness': ('INT', {'default': 20, 'min': 0, 'max': 1024})}, 'optional': {'image1': ('IMAGE',), 'image2': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'layout'
    CATEGORY = icons.get('Comfyroll/Graphics/Template')

    def layout(self, text1, text2, footer_height, font_name, font_size, mode, border_thickness, image1=None, image2=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-simple-image-compare'
        if mode == 'normal':
            font_color = 'black'
            bg_color = 'white'
        else:
            font_color = 'white'
            bg_color = 'black'
        if image1 is not None and image2 is not None:
            img1 = tensor2pil(image1)
            img2 = tensor2pil(image2)
            (image_width, image_height) = (img1.width, img1.height)
            if img2.width != img1.width or img2.height != img1.height:
                img2 = apply_resize_image(img2, image_width, image_height, 8, 'rescale', 'false', 1, 256, 'lanczos')
            margins = 50
            line_spacing = 0
            position_x = 0
            position_y = 0
            align = 'center'
            rotation_angle = 0
            rotation_options = 'image center'
            font_outline_thickness = 0
            font_outline_color = 'black'
            align = 'center'
            footer_align = 'center'
            outline_thickness = border_thickness // 2
            border_thickness = border_thickness // 2
            if footer_height > 0:
                text_panel1 = text_panel(image_width, footer_height, text1, font_name, font_size, font_color, font_outline_thickness, font_outline_color, bg_color, margins, line_spacing, position_x, position_y, align, footer_align, rotation_angle, rotation_options)
            combined_img1 = combine_images([img1, text_panel1], 'vertical')
            if outline_thickness > 0:
                combined_img1 = ImageOps.expand(combined_img1, outline_thickness, fill=bg_color)
            if footer_height > 0:
                text_panel2 = text_panel(image_width, footer_height, text2, font_name, font_size, font_color, font_outline_thickness, font_outline_color, bg_color, margins, line_spacing, position_x, position_y, align, footer_align, rotation_angle, rotation_options)
            combined_img2 = combine_images([img2, text_panel2], 'vertical')
            if outline_thickness > 0:
                combined_img2 = ImageOps.expand(combined_img2, outline_thickness, fill=bg_color)
            result_img = combine_images([combined_img1, combined_img2], 'horizontal')
        else:
            result_img = Image.new('RGB', (512, 512), bg_color)
        if border_thickness > 0:
            result_img = ImageOps.expand(result_img, border_thickness, bg_color)
        return (pil2tensor(result_img), show_help)
```
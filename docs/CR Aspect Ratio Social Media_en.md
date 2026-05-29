# Documentation
- Class name: CR_AspectRatioSocialMedia
- Category: icons.get('Comfyroll/Aspect Ratio')
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

This node is designed to process and resize images according to the requirements of specific social media platforms, ensuring optimal display and user engagement.

# Input types
## Required
- width
    - Width is the fundamental parameter that determines the horizontal dimension of the image, affecting its aspect ratio and overall appearance across different social media platforms.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height is the key parameter that defines the vertical dimension of the image, working together with width to meet the aspect ratio requirements of social media platforms.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- aspect_ratio
    - Aspect ratio presets allow quick selection of sizes optimized for various social media platforms, simplifying the image preparation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- swap_dimensions
    - The swap dimensions option allows width and height to be interchanged, providing flexibility to meet specific requirements of certain social media platforms.
    - Comfy dtype: COMBO
    - Python dtype: str
- upscale_factor
    - The upscale factor is used to enlarge image dimensions, which can improve image quality and visibility when displayed on social media platforms.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The pre-scale factor is used to adjust the initial image size before further processing, affecting the final output resolution and performance on social media.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - Batch size determines the number of images processed simultaneously, which can improve efficiency and throughput when handling multiple social media image adjustments.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - Adjusted image width, optimized for the selected social media platform, ensuring proper display and engagement.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Adjusted image height, customized to meet the requirements of the selected social media platform for optimal display.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The original upscale factor used for the image, indicating the degree of enlargement applied to the dimensions for optimal social media display.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The original pre-scale factor used for the image, representing the initial size adjustment performed before further processing for social media optimization.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The number of images processed in the batch, reflecting the efficiency of handling multiple social media platform image adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - A placeholder latent representation of the image, used for potential further processing or analysis within the social media optimization workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- show_help
    - A link to documentation for further guidance and understanding of how to use the node for social media aspect ratio optimization.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_AspectRatioSocialMedia:

    @classmethod
    def INPUT_TYPES(s):
        aspect_ratios = ['custom', 'Instagram Portrait - 1080x1350', 'Instagram Square - 1080x1080', 'Instagram Landscape - 1080x608', 'Instagram Stories/Reels - 1080x1920', 'Facebook Landscape - 1080x1350', 'Facebook Marketplace - 1200x1200', 'Facebook Stories - 1080x1920', 'TikTok - 1080x1920', 'YouTube Banner - 2560×1440', 'LinkedIn Profile Banner - 1584x396', 'LinkedIn Page Cover - 1128x191', 'LinkedIn Post - 1200x627', 'Pinterest Pin Image - 1000x1500', 'CivitAI Cover - 1600x400', 'OpenArt App - 1500x1000']
        return {'required': {'width': ('INT', {'default': 1024, 'min': 64, 'max': 8192}), 'height': ('INT', {'default': 1024, 'min': 64, 'max': 8192}), 'aspect_ratio': (aspect_ratios,), 'swap_dimensions': (['Off', 'On'],), 'upscale_factor': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 100.0, 'step': 0.1}), 'prescale_factor': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 100.0, 'step': 0.1}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 64})}}
    RETURN_TYPES = ('INT', 'INT', 'FLOAT', 'FLOAT', 'INT', 'LATENT', 'STRING')
    RETURN_NAMES = ('width', 'height', 'upscale_factor', 'prescale_factor', 'batch_size', 'empty_latent', 'show_help')
    FUNCTION = 'Aspect_Ratio'
    CATEGORY = icons.get('Comfyroll/Aspect Ratio')

    def Aspect_Ratio(self, width, height, aspect_ratio, swap_dimensions, upscale_factor, prescale_factor, batch_size):
        if aspect_ratio == 'Instagram Portrait - 1080x1350':
            (width, height) = (1080, 1350)
        elif aspect_ratio == 'Instagram Square - 1080x1080':
            (width, height) = (1080, 1080)
        elif aspect_ratio == 'Instagram Landscape - 1080x608':
            (width, height) = (1080, 608)
        elif aspect_ratio == 'Instagram Stories/Reels - 1080x1920':
            (width, height) = (1080, 1920)
        elif aspect_ratio == 'Facebook Landscape - 1080x1350':
            (width, height) = (1080, 1350)
        elif aspect_ratio == 'Facebook Marketplace - 1200x1200':
            (width, height) = (1200, 1200)
        elif aspect_ratio == 'Facebook Stories - 1080x1920':
            (width, height) = (1080, 1920)
        elif aspect_ratio == 'TikTok - 1080x1920':
            (width, height) = (1080, 1920)
        elif aspect_ratio == 'YouTube Banner - 2560×1440':
            (width, height) = (2560, 1440)
        elif aspect_ratio == 'LinkedIn Profile Banner - 1584x396':
            (width, height) = (1584, 396)
        elif aspect_ratio == 'LinkedIn Page Cover - 1128x191':
            (width, height) = (1584, 396)
        elif aspect_ratio == 'LinkedIn Post - 1200x627':
            (width, height) = (1200, 627)
        elif aspect_ratio == 'Pinterest Pin Image - 1000x1500':
            (width, height) = (1000, 1500)
        elif aspect_ratio == 'Pinterest Cover Image - 1920x1080':
            (width, height) = (1920, 1080)
        elif aspect_ratio == 'CivitAI Cover - 1600x400':
            (width, height) = (1600, 400)
        elif aspect_ratio == 'OpenArt App - 1500x1000':
            (width, height) = (1500, 1000)
        if swap_dimensions == 'On':
            (width, height) = (height, width)
        width = int(width * prescale_factor)
        height = int(height * prescale_factor)
        latent = torch.zeros([batch_size, 4, height // 8, width // 8])
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Aspect-Ratio-Nodes#cr-aspect-ratio-scial-media'
        return (width, height, upscale_factor, prescale_factor, batch_size, {'samples': latent}, show_help)
```
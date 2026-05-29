# Documentation
- Class name: CR_AspectRatioBanners
- Category: Comfyroll/Aspect Ratio
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_AspectRatioBanners node is designed to facilitate the creation and manipulation of image banners conforming to various aspect ratios. It allows users to input custom dimensions or select from a list of predefined banner sizes. The node also provides options to swap dimensions and apply scaling factors to meet specific requirements. Its primary goal is to simplify the process of generating visually consistent banners suitable for diverse display purposes.

# Input types
## Required
- width
    - The width parameter specifies the desired width of the banner. It plays a crucial role in determining the overall size of the output image, ensuring the banner fits the required constraints.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the vertical extent of the banner. It is essential for maintaining the aspect ratio and achieving the desired appearance of the banner.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect ratio determines the proportional relationship between the width and height of the banner. It is a key factor in ensuring the banner dimensions are visually appealing and suitable for the intended use.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_dimensions
    - The swap_dimensions parameter allows interchangeability of width and height values, providing flexibility in interpreting and using banner dimensions.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_factor
    - The upscale_factor parameter is used to increase the size of the banner without altering its aspect ratio, thereby enhancing the visual quality of the banner on larger display devices.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The prescale_factor parameter allows adjustment of the banner size before further processing, optimizing the image size and performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size parameter defines the number of banners processed simultaneously, which can significantly improve efficiency when handling multiple banner creation tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The width output provides the final width of the banner after applying the selected aspect ratio and scaling factors.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output gives the final height of the banner considering the aspect ratio and scaling adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The upscale_factor output reflects the scaling factor used to enlarge the banner size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The prescale_factor output indicates the initial scaling factor applied to the banner size before processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size output represents the number of banners processed in the current operation.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - The empty_latent output is a placeholder for the latent representation of the banner for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - The show_help output provides a link to the documentation for further guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_AspectRatioBanners:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        aspect_ratios = ['custom', 'Large Rectangle - 336x280', 'Medium Rectangle - 300x250', 'Small Rectangle - 180x150', 'Square - 250x250', 'Small Square - 200x200', 'Button - 125x125', 'Half Page - 300x600', 'Vertical Banner - 120x240', 'Wide Skyscraper - 160x600', 'Skyscraper - 120x600', 'Billboard - 970x250', 'Portrait - 300x1050', 'Banner - 468x60', 'Leaderboard - 728x90']
        return {'required': {'width': ('INT', {'default': 1024, 'min': 64, 'max': 8192}), 'height': ('INT', {'default': 1024, 'min': 64, 'max': 8192}), 'aspect_ratio': (aspect_ratios,), 'swap_dimensions': (['Off', 'On'],), 'upscale_factor': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 100.0, 'step': 0.1}), 'prescale_factor': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 100.0, 'step': 0.1}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 64})}}
    RETURN_TYPES = ('INT', 'INT', 'FLOAT', 'FLOAT', 'INT', 'LATENT', 'STRING')
    RETURN_NAMES = ('width', 'height', 'upscale_factor', 'prescale_factor', 'batch_size', 'empty_latent', 'show_help')
    FUNCTION = 'Aspect_Ratio'
    CATEGORY = icons.get('Comfyroll/Aspect Ratio')

    def Aspect_Ratio(self, width, height, aspect_ratio, swap_dimensions, upscale_factor, prescale_factor, batch_size):
        if aspect_ratio == 'Large Rectangle - 336x280':
            (width, height) = (336, 280)
        elif aspect_ratio == 'Medium Rectangle - 300x250':
            (width, height) = (300, 250)
        elif aspect_ratio == 'Small Rectangle - 180x150':
            (width, height) = (180, 150)
        elif aspect_ratio == 'Square - 250x250':
            (width, height) = (250, 250)
        elif aspect_ratio == 'Small Square - 200x200':
            (width, height) = (200, 200)
        elif aspect_ratio == 'Button - 125x125':
            (width, height) = (125, 125)
        elif aspect_ratio == 'Half Page - 300x600':
            (width, height) = (300, 600)
        elif aspect_ratio == 'Vertical Banner - 120x240':
            (width, height) = (120, 240)
        elif aspect_ratio == 'Wide Skyscraper - 160x600':
            (width, height) = (160, 600)
        elif aspect_ratio == 'Skyscraper - 120x600':
            (width, height) = (120, 600)
        elif aspect_ratio == 'Billboard - 970x250':
            (width, height) = (970, 250)
        elif aspect_ratio == 'Portrait - 300x1050':
            (width, height) = (300, 1050)
        elif aspect_ratio == 'Banner - 468x60':
            (width, height) = (168, 60)
        elif aspect_ratio == 'Leaderboard - 728x90':
            (width, height) = (728, 90)
        if swap_dimensions == 'On':
            (width, height) = (height, width)
        width = int(width * prescale_factor)
        height = int(height * prescale_factor)
        latent = torch.zeros([batch_size, 4, height // 8, width // 8])
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Aspect-Ratio-Nodes#cr-aspect-ratio-banners'
        return (width, height, upscale_factor, prescale_factor, batch_size, {'samples': latent}, show_help)
```
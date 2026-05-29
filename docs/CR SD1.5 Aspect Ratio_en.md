# Documentation
- Class name: CR_AspectRatioSD15
- Category: Comfyroll/Aspect Ratio
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_AspectRatioSD15 is a node for managing and adjusting image aspect ratios. It allows users to select predefined aspect ratios or input custom dimensions, and provides options for swapping dimensions and upscaling images. The main function of this node is to ensure images are correctly scaled and oriented to meet various display or printing requirements.

# Input types
## Required
- width
    - Width is a key parameter that defines the horizontal dimension of the image. It works together with the height parameter to determine the aspect ratio of the image. The node uses this value to calculate the correct scaling and dimensions for the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height is a key parameter that sets the vertical dimension of the image. When paired with the width parameter, it is essential for maintaining the desired aspect ratio. The node uses this parameter to ensure the vertical scaling of the image is accurate.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect ratio parameter is critical because it determines the proportional relationship between the width and height of the image. It provides a selection of predefined ratios or the option for custom input, allowing flexibility in image format settings.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_dimensions
    - The swap_dimensions parameter allows users to switch between width and height values. This feature is useful when the aspect ratio requires a different orientation or the user needs to manually swap dimensions.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_factor
    - The upscale_factor parameter is important for controlling the magnification level of the image. It multiplies the original dimensions to achieve a larger image size without affecting the aspect ratio.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - Batch size is an important parameter that determines the number of images processed simultaneously. It is particularly useful for optimizing performance when processing large numbers of images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The width output parameter represents the final horizontal dimension of the image after applying the selected aspect ratio and any scaling factors.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output parameter represents the final vertical dimension of the image after considering aspect ratio and scaling adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The upscale_factor output reflects the magnification level applied to the image to increase its size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch size output parameter indicates the number of images processed in a single batch, which is crucial for understanding the throughput of the node.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - The empty_latent output parameter provides an empty latent space representation for the image batch, which can be used for further processing or analysis in downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - The show_help output parameter provides a URL link to the documentation page for additional guidance and information on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_AspectRatioSD15:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        aspect_ratios = ['custom', '1:1 square 512x512', '1:1 square 1024x1024', '2:3 portrait 512x768', '3:4 portrait 512x682', '3:2 landscape 768x512', '4:3 landscape 682x512', '16:9 cinema 910x512', '1.85:1 cinema 952x512', '2:1 cinema 1024x512', '2.39:1 anamorphic 1224x512']
        return {'required': {'width': ('INT', {'default': 512, 'min': 64, 'max': 8192}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 8192}), 'aspect_ratio': (aspect_ratios,), 'swap_dimensions': (['Off', 'On'],), 'upscale_factor': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 100.0, 'step': 0.1}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 64})}}
    RETURN_TYPES = ('INT', 'INT', 'FLOAT', 'INT', 'LATENT', 'STRING')
    RETURN_NAMES = ('width', 'height', 'upscale_factor', 'batch_size', 'empty_latent', 'show_help')
    FUNCTION = 'Aspect_Ratio'
    CATEGORY = icons.get('Comfyroll/Aspect Ratio')

    def Aspect_Ratio(self, width, height, aspect_ratio, swap_dimensions, upscale_factor, batch_size):
        if aspect_ratio == '2:3 portrait 512x768':
            (width, height) = (512, 768)
        elif aspect_ratio == '3:2 landscape 768x512':
            (width, height) = (768, 512)
        elif aspect_ratio == '1:1 square 512x512':
            (width, height) = (512, 512)
        elif aspect_ratio == '1:1 square 1024x1024':
            (width, height) = (1024, 1024)
        elif aspect_ratio == '16:9 cinema 910x512':
            (width, height) = (910, 512)
        elif aspect_ratio == '3:4 portrait 512x682':
            (width, height) = (512, 682)
        elif aspect_ratio == '4:3 landscape 682x512':
            (width, height) = (682, 512)
        elif aspect_ratio == '1.85:1 cinema 952x512':
            (width, height) = (952, 512)
        elif aspect_ratio == '2:1 cinema 1024x512':
            (width, height) = (1024, 512)
        elif aspect_ratio == '2.39:1 anamorphic 1224x512':
            (width, height) = (1224, 512)
        if swap_dimensions == 'On':
            (width, height) = (height, width)
        latent = torch.zeros([batch_size, 4, height // 8, width // 8])
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Aspect-Ratio-Nodes#cr-sd15-aspect-ratio'
        return (width, height, upscale_factor, batch_size, {'samples': latent}, show_help)
```
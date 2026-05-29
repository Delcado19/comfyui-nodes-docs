# Documentation
- Class name: WAS_Image_Monitor_Distortion_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Monitor_Distortion_Filter node applies various distortion effects to images, simulating different types of monitor or signal distortion. It processes the input image based on the selected mode, which can be 'Digital Distortion', 'Signal Distortion', or 'TV Distortion', and uses parameters such as amplitude and offset to control the intensity of the distortion. This node is highly versatile, suitable for a wide range of applications from visual effects to artistic image transformations.

# Input types
## Required
- image
    - The input image that will undergo distortion processing. It serves as the base upon which the node applies the selected distortion effect, and its quality and characteristics significantly impact the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- mode
    - Determines the type of distortion effect to apply to the image. Each mode represents a different distortion style, affecting the overall look and feel of the processed image.
    - Comfy dtype: COMBO['Digital Distortion', 'Signal Distortion', 'TV Distortion']
    - Python dtype: str
- amplitude
    - Controls the intensity of the distortion effect. Higher amplitude values result in more pronounced distortion, while lower values produce subtler effects.
    - Comfy dtype: INT
    - Python dtype: int
- offset
    - Adjusts the position of the distortion effect, allowing fine-tuning of the distortion's appearance. It shifts the distortion pattern, which can alter the visual dynamics of the final result.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the processed image with the distortion effect applied. It reflects the characteristics of the input image while showcasing the chosen distortion style, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Monitor_Distortion_Filter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'mode': (['Digital Distortion', 'Signal Distortion', 'TV Distortion'],), 'amplitude': ('INT', {'default': 5, 'min': 1, 'max': 255, 'step': 1}), 'offset': ('INT', {'default': 10, 'min': 1, 'max': 255, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'image_monitor_filters'
    CATEGORY = 'WAS Suite/Image/Filter'

    def image_monitor_filters(self, image, mode='Digital Distortion', amplitude=5, offset=5):
        image = tensor2pil(image)
        WTools = WAS_Tools_Class()
        if mode:
            if mode == 'Digital Distortion':
                image = WTools.digital_distortion(image, amplitude, offset)
            elif mode == 'Signal Distortion':
                image = WTools.signal_distortion(image, amplitude)
            elif mode == 'TV Distortion':
                image = WTools.tv_vhs_distortion(image, amplitude)
            else:
                image = image
        return (pil2tensor(image),)
```
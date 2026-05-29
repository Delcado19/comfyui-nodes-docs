# Documentation
- Class name: ColorAdjust
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The ColorAdjust node aims to modify the visual characteristics of an image by adjusting its contrast, brightness, saturation, hue, and gamma values. This node enhances the image's appearance and can be used to correct or stylize visual output for various applications.

# Input types
## Required
- image
    - The image parameter is crucial for the ColorAdjust node as it is the input on which color adjustments will be applied. It influences execution by determining the base visual content the node will process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- contrast
    - The contrast parameter allows users to increase or decrease the difference between the darkest and lightest elements in an image. It plays an important role in enhancing the visual clarity and depth of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - Brightness adjustment can make the image appear brighter or darker, controlled by the brightness parameter. It is essential for changing the overall lightness or darkness of the visual content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - The saturation parameter controls the intensity of colors in the image. It is important for users who want to achieve a more vibrant or subdued color palette.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hue
    - Adjusting the hue shifts the colors in the image to a different part of the color spectrum. This parameter plays a key role in changing the overall tint of the visual content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gamma
    - The gamma parameter affects the overall brightness of the image. It is especially useful for adjusting the perceived brightness of the image in a non-linear manner.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The result parameter represents the output of the ColorAdjust node, which is the modified image after applying color adjustments. It is important as it reflects the final visual outcome of the node's processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ColorAdjust:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'contrast': ('FLOAT', {'default': 1.0, 'min': 0, 'max': 255, 'step': 0.01, 'round': 0.001, 'display': 'number'}), 'brightness': ('FLOAT', {'default': 1.0, 'min': -255, 'max': 255, 'step': 0.01, 'round': 0.001, 'display': 'number'}), 'saturation': ('FLOAT', {'default': 1.0, 'min': 0, 'max': 255, 'step': 0.01, 'round': 0.001, 'display': 'number'}), 'hue': ('FLOAT', {'default': 0, 'min': -0.5, 'max': 0.5, 'step': 0.001, 'round': 0.001, 'display': 'number'}), 'gamma': ('FLOAT', {'default': 1.0, 'min': 0, 'max': 255, 'step': 0.01, 'round': 0.001, 'display': 'number'})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, image: Tensor, contrast: float=1, brightness: float=1, saturation: float=1, hue: float=0, gamma: float=1):
        permutedImage = image.permute(0, 3, 1, 2)
        if contrast != 1:
            permutedImage = functional.adjust_contrast(permutedImage, contrast)
        if brightness != 1:
            permutedImage = functional.adjust_brightness(permutedImage, brightness)
        if saturation != 1:
            permutedImage = functional.adjust_saturation(permutedImage, saturation)
        if hue != 0:
            permutedImage = functional.adjust_hue(permutedImage, hue)
        if gamma != 1:
            permutedImage = functional.adjust_gamma(permutedImage, gamma)
        result = permutedImage.permute(0, 2, 3, 1)
        return (result,)
```
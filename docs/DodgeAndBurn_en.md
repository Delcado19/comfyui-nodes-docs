# Documentation
- Class name: DodgeAndBurn
- Category: postprocessing/Blends
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The DodgeAndBurn node is designed to enhance images by applying dodge and burn techniques, which can manipulate the brightness and contrast of specific areas in the image. By using masks and adjusting intensity, this node can selectively lighten or darken areas, creating depth and drawing attention to specific regions.

# Input types
## Required
- image
    - The image parameter is the primary input for the DodgeAndBurn node, serving as the base layer to be modified through dodging and burning techniques. Its quality and content directly impact the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask parameter determines which areas of the image will be affected by the dodge and burn process. It plays a crucial role in controlling the precision of adjustments made to the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- intensity
    - Intensity is a critical parameter that controls the degree of lightening or darkening applied to the image. Adjusting this value affects the overall impact of the dodge and burn techniques.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - The mode parameter determines the specific dodge and burn technique to be applied. It influences how the image is adjusted, catering to different creative or stylistic preferences.
    - Comfy dtype: COMBO[ ['dodge', 'burn', 'dodge_and_burn', 'burn_and_dodge', 'color_dodge', 'color_burn', 'linear_dodge', 'linear_burn'],]
    - Python dtype: str

# Output types
- output_image
    - The output image represents the final result of the dodge and burn process, reflecting the adjustments made to the original image based on the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class DodgeAndBurn:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'mask': ('IMAGE',), 'intensity': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'mode': (['dodge', 'burn', 'dodge_and_burn', 'burn_and_dodge', 'color_dodge', 'color_burn', 'linear_dodge', 'linear_burn'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'dodge_and_burn'
    CATEGORY = 'postprocessing/Blends'

    def dodge_and_burn(self, image: torch.Tensor, mask: torch.Tensor, intensity: float, mode: str):
        if mode in ['dodge', 'color_dodge', 'linear_dodge']:
            dodged_image = self.dodge(image, mask, intensity, mode)
            return (dodged_image,)
        elif mode in ['burn', 'color_burn', 'linear_burn']:
            burned_image = self.burn(image, mask, intensity, mode)
            return (burned_image,)
        elif mode == 'dodge_and_burn':
            dodged_image = self.dodge(image, mask, intensity, 'dodge')
            burned_image = self.burn(dodged_image, mask, intensity, 'burn')
            return (burned_image,)
        elif mode == 'burn_and_dodge':
            burned_image = self.burn(image, mask, intensity, 'burn')
            dodged_image = self.dodge(burned_image, mask, intensity, 'dodge')
            return (dodged_image,)
        else:
            raise ValueError(f'Unsupported dodge and burn mode: {mode}')

    def dodge(self, img, mask, intensity, mode):
        if mode == 'dodge':
            return img / (1 - mask * intensity + 1e-07)
        elif mode == 'color_dodge':
            return torch.where(mask < 1, img / (1 - mask * intensity), img)
        elif mode == 'linear_dodge':
            return torch.clamp(img + mask * intensity, 0, 1)
        else:
            raise ValueError(f'Unsupported dodge mode: {mode}')

    def burn(self, img, mask, intensity, mode):
        if mode == 'burn':
            return 1 - (1 - img) / (mask * intensity + 1e-07)
        elif mode == 'color_burn':
            return torch.where(mask > 0, 1 - (1 - img) / (mask * intensity), img)
        elif mode == 'linear_burn':
            return torch.clamp(img - mask * intensity, 0, 1)
        else:
            raise ValueError(f'Unsupported burn mode: {mode}')
```
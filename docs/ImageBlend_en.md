# Documentation
- Class name: Blend
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Blend node aims to seamlessly combine two images using a specified blend factor and blend mode, producing a visually coherent output. It adjusts opacity and applies various blending techniques to achieve the desired aesthetic effect.

# Input types
## Required
- image1
    - image1 is the first input image that will be blended with the second image. It plays a crucial role in determining the appearance of the final blended image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - image2 is the second input image that will be blended with the first image. Its contribution to the final image is influenced by the blend factor and blend mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blend_factor
    - The blend factor determines the degree to which the second image is blended with the first image. This is a critical parameter used to control the balance between the two images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_mode
    - The blend mode determines the algorithm used to blend the images. It significantly affects the final visual result of the blending operation.
    - Comfy dtype: COMBO['normal', 'multiply', 'screen', 'overlay', 'soft_light', 'difference']
    - Python dtype: str

# Output types
- blended_image
    - The blended image is the output of the blend_images function, representing the combined result of the two input images after applying the blend factor and blend mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Blend:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image1': ('IMAGE',), 'image2': ('IMAGE',), 'blend_factor': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'blend_mode': (['normal', 'multiply', 'screen', 'overlay', 'soft_light', 'difference'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'blend_images'
    CATEGORY = 'image/postprocessing'

    def blend_images(self, image1: torch.Tensor, image2: torch.Tensor, blend_factor: float, blend_mode: str):
        image2 = image2.to(image1.device)
        if image1.shape != image2.shape:
            image2 = image2.permute(0, 3, 1, 2)
            image2 = comfy.utils.common_upscale(image2, image1.shape[2], image1.shape[1], upscale_method='bicubic', crop='center')
            image2 = image2.permute(0, 2, 3, 1)
        blended_image = self.blend_mode(image1, image2, blend_mode)
        blended_image = image1 * (1 - blend_factor) + blended_image * blend_factor
        blended_image = torch.clamp(blended_image, 0, 1)
        return (blended_image,)

    def blend_mode(self, img1, img2, mode):
        if mode == 'normal':
            return img2
        elif mode == 'multiply':
            return img1 * img2
        elif mode == 'screen':
            return 1 - (1 - img1) * (1 - img2)
        elif mode == 'overlay':
            return torch.where(img1 <= 0.5, 2 * img1 * img2, 1 - 2 * (1 - img1) * (1 - img2))
        elif mode == 'soft_light':
            return torch.where(img2 <= 0.5, img1 - (1 - 2 * img2) * img1 * (1 - img1), img1 + (2 * img2 - 1) * (self.g(img1) - img1))
        elif mode == 'difference':
            return img1 - img2
        else:
            raise ValueError(f'Unsupported blend mode: {mode}')

    def g(self, x):
        return torch.where(x <= 0.25, ((16 * x - 12) * x + 4) * x, torch.sqrt(x))
```
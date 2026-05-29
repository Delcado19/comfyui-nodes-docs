# Documentation
- Class name: ArithmeticBlend
- Category: postprocessing/Blends
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node achieves compositing of two images through arithmetic operations, creating visual effects via the selected blend_mode to fuse image1 and image2.

# Input types
## Required
- image1
    - The first image to be blended is crucial for the arithmetic operation and affects the final output result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The second image participating in the blending process interacts with image1 and determines the characteristics of the resulting blended image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blend_mode
    - The mode of arithmetic operation determines how image1 and image2 are combined, significantly affecting the final visual result.
    - Comfy dtype: COMBO['add', 'subtract', 'difference']
    - Python dtype: str

# Output types
- blended_image
    - The generated image after the arithmetic blending process contains the visual effects of the selected blend mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ArithmeticBlend:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image1': ('IMAGE',), 'image2': ('IMAGE',), 'blend_mode': (['add', 'subtract', 'difference'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'arithmetic_blend_images'
    CATEGORY = 'postprocessing/Blends'

    def arithmetic_blend_images(self, image1: torch.Tensor, image2: torch.Tensor, blend_mode: str):
        if blend_mode == 'add':
            blended_image = self.add(image1, image2)
        elif blend_mode == 'subtract':
            blended_image = self.subtract(image1, image2)
        elif blend_mode == 'difference':
            blended_image = self.difference(image1, image2)
        else:
            raise ValueError(f'Unsupported arithmetic blend mode: {blend_mode}')
        blended_image = torch.clamp(blended_image, 0, 1)
        return (blended_image,)

    def add(self, img1, img2):
        return img1 + img2

    def subtract(self, img1, img2):
        return img1 - img2

    def difference(self, img1, img2):
        return torch.abs(img1 - img2)
```
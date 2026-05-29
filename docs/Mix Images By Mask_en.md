# Documentation
- Class name: MixByMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The MixByMask node is designed to blend two images based on a provided mask. It operates by adjusting the contribution of each image according to the mask values, allowing seamless integration of different visual elements within a single composite image.

# Input types
## Required
- image1
    - The first image to blend. This is a fundamental input that determines the basic visual content of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The second image to blend. It provides additional visual content that will be merged with the first image according to the mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask that determines how the two images are blended. It is a key component that controls the blending process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- mixed_image
    - The output is the blended image obtained after applying the mask to the input images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MixByMask:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image1': ('IMAGE',), 'image2': ('IMAGE',), 'mask': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'mix'
    CATEGORY = 'Masquerade Nodes'

    def mix(self, image1, image2, mask):
        (image1, image2) = tensors2common(image1, image2)
        mask = tensor2batch(mask, image1.size())
        return (image1 * (1.0 - mask) + image2 * mask,)
```
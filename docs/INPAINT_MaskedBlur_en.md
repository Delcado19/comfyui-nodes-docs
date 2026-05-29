# Documentation
- Class name: MaskedBlur
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

The MaskedBlur node is designed to fill in missing or unwanted parts of an image using sophisticated inpainting techniques. It applies selective blurring to masked areas, seamlessly blending them with the surrounding image content. This node is particularly useful for content-based image editing and inpainting.

# Input types
## Required
- image
    - The input image to be processed by the node. It is the primary data source for the inpainting operation, and its quality directly affects the final result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask defines the areas of the image that should be blurred and filled. It is a key parameter that determines which parts of the image undergo the inpainting process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- blur
    - The blur parameter controls the intensity of the blur effect applied to the masked areas. This is an important setting that affects the smoothness of the transition between the filled areas and the rest of the image.
    - Comfy dtype: INT
    - Python dtype: int
- falloff
    - The decay parameter determines the rate at which the blur effect fades at the edges of the masked area. It is used to create a more natural and gradual transition from blurred to unblurred regions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - The output image is the result of the inpainting process. It contains the original image with the masked areas filled and blurred to match the surrounding area.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MaskedBlur:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'mask': ('MASK',), 'blur': ('INT', {'default': 255, 'min': 3, 'max': 8191, 'step': 1}), 'falloff': ('INT', {'default': 0, 'min': 0, 'max': 8191, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    CATEGORY = 'inpaint'
    FUNCTION = 'fill'

    def fill(self, image: Tensor, mask: Tensor, blur: int, falloff: int):
        blur = make_odd(blur)
        falloff = min(make_odd(falloff), blur - 2)
        (image, mask) = to_torch(image, mask)
        original = image.clone()
        alpha = mask.floor()
        if falloff > 0:
            erosion = binary_erosion(alpha, falloff)
            alpha = alpha * gaussian_blur(erosion, falloff)
        alpha = alpha.repeat(1, 3, 1, 1)
        image = gaussian_blur(image, blur)
        image = original + (image - original) * alpha
        return (to_comfy(image),)
```
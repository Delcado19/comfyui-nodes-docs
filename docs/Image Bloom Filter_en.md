# Documentation
- Class name: WAS_Image_Bloom_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Bloom_Filter node applies a bloom effect to an image, enhancing its visual appeal by simulating light scattering. It adjusts the image brightness to create a glowing effect, useful for various image processing tasks.

# Input types
## Required
- image
    - The input image to which the bloom filter will be applied. It is the primary object processed by the node, directly affecting the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- radius
    - The radius parameter controls the extent of the Gaussian blur used to create the bloom effect. It is a key factor in determining the softness of the bloom.
    - Comfy dtype: FLOAT
    - Python dtype: float
- intensity
    - The intensity parameter adjusts the brightness of the bloom effect. Higher values result in a more pronounced bloom, while lower values produce a subtler effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - output_image is the processed image with the bloom filter applied. It represents the final visual result of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Bloom_Filter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'radius': ('FLOAT', {'default': 10, 'min': 0.0, 'max': 1024, 'step': 0.1}), 'intensity': ('FLOAT', {'default': 1, 'min': 0.0, 'max': 1.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_bloom'
    CATEGORY = 'WAS Suite/Image/Filter'

    def image_bloom(self, image, radius=0.5, intensity=1.0):
        return (pil2tensor(self.apply_bloom_filter(tensor2pil(image), radius, intensity)),)

    def apply_bloom_filter(self, input_image, radius, bloom_factor):
        blurred_image = input_image.filter(ImageFilter.GaussianBlur(radius=radius))
        high_pass_filter = ImageChops.subtract(input_image, blurred_image)
        bloom_filter = high_pass_filter.filter(ImageFilter.GaussianBlur(radius=radius * 2))
        bloom_filter = ImageEnhance.Brightness(bloom_filter).enhance(2.0)
        bloom_filter = ImageChops.multiply(bloom_filter, Image.new('RGB', input_image.size, (int(255 * bloom_factor), int(255 * bloom_factor), int(255 * bloom_factor))))
        blended_image = ImageChops.screen(input_image, bloom_filter)
        return blended_image
```
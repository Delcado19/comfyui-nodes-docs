# Documentation
- Class name: PixelSort
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

PixelSort node introduces a creative pixel sorting effect to images, reorganizing pixel data according to specified criteria such as hue, saturation, or brightness, enhancing visual impact.

# Input types
## Required
- image
    - Image parameter is required because it supplies the source data for the pixel sorting process, affecting the final output appearance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask parameter is essential for defining the image region affected by the pixel sorting effect, thereby controlling the transformation scope.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- direction
    - Direction parameter determines the axis of pixel sorting, which can be horizontal or vertical, influencing the overall pattern of the effect.
    - Comfy dtype: COMBO['horizontal', 'vertical']
    - Python dtype: str
- sort_by
    - sort_by parameter decides the sorting criterion, such as hue, saturation, or brightness, shaping the final visual result.
    - Comfy dtype: COMBO['hue', 'saturation', 'value']
    - Python dtype: str
- order
    - Order parameter specifies the sorting direction, either ascending (forward) or descending (backward), altering pixel arrangement.
    - Comfy dtype: COMBO['forward', 'backward']
    - Python dtype: str
## Optional
- span_limit
    - Span limit parameter refines sorting by controlling the number of spans per direction, affecting the granularity of the effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output image is the result of the pixel sorting process, reflecting the creative transformation applied to the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class PixelSort:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'mask': ('IMAGE',), 'direction': (['horizontal', 'vertical'],), 'span_limit': ('INT', {'default': None, 'min': 0, 'max': 100, 'step': 5}), 'sort_by': (['hue', 'saturation', 'value'],), 'order': (['forward', 'backward'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'sort_pixels'
    CATEGORY = 'postprocessing/Effects'

    def sort_pixels(self, image: torch.Tensor, mask: torch.Tensor, direction: str, span_limit: int, sort_by: str, order: str):
        horizontal_sort = direction == 'horizontal'
        reverse_sorting = order == 'backward'
        sort_by = sort_by[0].upper()
        span_limit = span_limit if span_limit > 0 else None
        batch_size = image.shape[0]
        result = torch.zeros_like(image)
        for b in range(batch_size):
            tensor_img = image[b].numpy()
            tensor_mask = mask[b].numpy()
            sorted_image = pixel_sort(tensor_img, tensor_mask, horizontal_sort, span_limit, sort_by, reverse_sorting)
            result[b] = torch.from_numpy(sorted_image)
        return (result,)
```
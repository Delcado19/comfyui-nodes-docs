# Documentation
- Class name: InvertMask
- Category: segment_anything
- Output node: False
- Repo Ref: https://github.com/storyicon/comfyui_segment_anything

The InvertMask node is designed to invert the values of a binary mask. It plays a critical role in various image segmentation tasks where inverting a mask to highlight different regions of interest is necessary. The node operates by subtracting 1 from the input mask, effectively flipping the polarity of the mask.

# Input types
## Required
- mask
    - The 'mask' parameter is a binary mask that the node will invert. It is essential to the node's operation as it directly determines the output. The inverted mask is used to identify or isolate certain regions in an image, which is critical for segmentation purposes.
    - Comfy dtype: np.ndarray
    - Python dtype: numpy.ndarray

# Output types
- MASK
    - The 'MASK' output is the inverted version of the input mask. It is important as it represents the result of the node's operation, providing a binary mask with inverted values that can be used for further processing or analysis in segmentation workflows.
    - Comfy dtype: np.ndarray
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
```
class InvertMask:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mask': ('MASK',)}}
    CATEGORY = 'segment_anything'
    FUNCTION = 'main'
    RETURN_TYPES = ('MASK',)

    def main(self, mask):
        out = 1.0 - mask
        return (out,)
```
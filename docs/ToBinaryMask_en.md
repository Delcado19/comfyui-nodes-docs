# Documentation
- Class name: ToBinaryMask
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ToBinaryMask node aims to process input masks by converting them to binary format. It does this by applying a threshold to the mask values to classify each pixel as background or foreground. This operation is crucial for tasks that require clear distinction between different regions in an image, such as in image segmentation or object detection.

# Input types
## Required
- mask
    - The mask parameter is the key input for the ToBinaryMask node. It represents the initial mask from which the binary mask will be derived. The quality and accuracy of this mask directly affect the output of the node, determining the precision of segmentation or object detection tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- threshold
    - The threshold parameter is an optional input that determines the cutoff point for converting mask values to binary format. It plays an important role in the node's operation, influencing the result by controlling the sensitivity of binary classification. A higher threshold results in a more conservative conversion, while a lower threshold results in a more aggressive conversion.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- binary_mask
    - The binary mask output is the result of the ToBinaryMask node operation. It is a binary representation of the input mask, where each pixel is assigned a value of 0 or 1, indicating the presence or absence of the feature of interest. This output is crucial for further analysis or processing in various computer vision applications.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ToBinaryMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'threshold': ('INT', {'default': 20, 'min': 1, 'max': 255})}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, mask, threshold):
        mask = to_binary_mask(mask, threshold / 255.0)
        return (mask,)
```
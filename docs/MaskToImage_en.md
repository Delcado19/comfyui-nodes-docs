# Documentation
- Class name: MaskToImage
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MaskToImage node is designed to convert binary mask data into a color image format. It plays a critical role in visualizing mask data by transforming it into an image that is easier to interpret and understand. The node abstracts the complexity of the conversion process, focusing on the end goal of generating a user-friendly visual representation.

# Input types
## Required
- mask
    - The 'mask' parameter is essential for the MaskToImage node, as it represents the binary mask data that needs to be converted into an image. Correctly inputting this parameter is crucial for the node to effectively perform its conversion function, directly impacting the quality and accuracy of the generated image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- result
    - The 'result' output of the MaskToImage node is a color image derived from the input mask. It marks the successful conversion of binary mask data into a visual format that can be used for further analysis or presentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MaskToImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',)}}
    CATEGORY = 'mask'
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'mask_to_image'

    def mask_to_image(self, mask):
        result = mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])).movedim(1, -1).expand(-1, -1, -1, 3)
        return (result,)
```

# Documentation
- Class name: ImageNormalize_Neg1_To_1
- Category: KJNodes/misc
- Output node: False

The ImageNormalize_Neg1_To_1 node normalizes image pixel values to the range -1 to 1. This process adjusts pixel values to this scale, aiming to standardize image data for subsequent processing or as input to models that require normalized data.

# Input types
## Required
- images
- Images that require normalization. This normalization adjusts pixel values to ensure they fall within -1 to 1, which is essential for maintaining consistency in image processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
- Normalized images, with pixel values adjusted to the range -1 to 1. This normalization is indispensable for models that expect input data to be normalized.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageNormalize_Neg1_To_1:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { 
                              "images": ("IMAGE",),
    
                              }}
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "normalize"
    CATEGORY = "KJNodes/misc"
    DESCRIPTION = """
Normalize the images to be in the range [-1, 1]  
"""

    def normalize(self,images):
        images = images * 2.0 - 1.0
        return (images,)    

```

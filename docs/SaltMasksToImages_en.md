
# Documentation
- Class name: SaltMasksToImages
- Category: SALT/Masking
- Output node: False

This node aims to convert a set of mask images into tensor representations, enabling the transition from image processing to tensor operations for subsequent computational tasks.

# Input types
## Required
- masks
    - The masks input represents a set of mask images that will be converted to tensor format. This conversion is critical for subsequent tensor-based operations and analysis.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Output types
- images
    - The output is an image tensor converted from the input masks, which can be used for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMasksToImages:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",)
            }
        }
    
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)

    CATEGORY = f"{NAME}/Masking"
    FUNCTION = "convert"

    def convert(self, masks):
        images = []
        for mask in masks:
            images.append(pil2tensor(mask2pil(mask)))
        images = torch.cat(images, dim=0)
        return (images, )

```

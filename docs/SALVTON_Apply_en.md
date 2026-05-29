
# Documentation
- Class name: SALVTON_Apply
- Category: Clothing - SAL-VTON
- Output node: False

The SALVTON_Apply node is designed to apply the SAL-VTON (virtual try-on) technology, utilizing deep learning models to superimpose clothing onto a person image. By considering the shape and fit of the clothing relative to the human body, the node achieves realistic try-on effects, precisely overlaying the garment image onto the person image.

# Input types
## Required
- garment
    - The clothing image to be superimposed onto the person image. It plays a key role in the virtual try-on process, providing the specific garment to be tried on.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- person
    - The person image onto which the garment will be applied. This image serves as the basis for the virtual try-on, determining how the clothing will be positioned and fitted.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- garment_mask
    - The mask image of the garment, used to accurately overlay the clothing onto the person image by defining the boundaries of the garment.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The resulting image after applying the virtual try-on process, showing the garment realistically fitted on the person.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SALVTONApply:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "garment": ("IMAGE", ),
                "person": ("IMAGE",),
                "garment_mask": ("IMAGE",)
            }
        }

    CATEGORY = node_category

    RETURN_TYPES = ("IMAGE", )
    FUNCTION = "apply_salvaton"

    def apply_salvaton(self, garment, person, garment_mask):
        return (inferSAL(folder_paths.get_folder_paths('salvton')[0], person, garment, garment_mask),)

```

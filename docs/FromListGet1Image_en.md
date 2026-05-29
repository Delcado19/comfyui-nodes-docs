
# Documentation
- Class name: FromListGet1Image
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1Image node is designed to retrieve a single image from a list of images based on a specified index. The node supports random access, including the use of negative indices to access elements from the end of the list, making it versatile for various image processing tasks.

# Input types
## Required
- list
    - The list of images from which to retrieve a single image. This parameter is essential for specifying the source of the image.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- index
    - The index of the image to retrieve from the list. Supports negative indices for reverse access.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The single image retrieved from the specified index in the list.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Image(metaclass=GetSingleFromListMeta):  TYPE = "IMAGE"

```

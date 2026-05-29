
# Documentation
- Class name: FromListGetImages
- Category: Bmad/Lists/GetAll
- Output node: False

The FromListGetImages node is designed to retrieve a specific image from a list of images based on a given index. It supports random access to images in the list, including the ability to access images in reverse using negative indices.

# Input types
## Required
- list
    - The list parameter represents the image list from which to retrieve a specific image. It is essential for specifying the image source.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Output types
- image
    - This output is the image retrieved from the specified position in the list.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetImages(metaclass=UnMakeListMeta):  TYPE = "IMAGE"

```

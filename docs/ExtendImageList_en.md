
# Documentation
- Class name: ExtendImageList
- Category: Bmad/Lists/Extend
- Output node: False

The ExtendImageList node is designed to add new images to an existing image list. It focuses on aggregating multiple image resources into a comprehensive collection, facilitating operations that require batch image data management.

# Input types
## Required
- inputs_len
    - The 'inputs_len' parameter is crucial for defining the starting point of the set before expansion. It represents the initial number of images to be extended, laying the foundation for the expansion process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The 'image' parameter represents the final image collection after the expansion process. It includes the original images and the newly added images, providing a unified set for further processing.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendImageList(metaclass=ExtendListMeta): TYPE = "IMAGE"

```

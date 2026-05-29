
# Documentation
- Class name: FromListGet1Mask
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1Mask node retrieves a specific item from a list of masks based on a given index. It supports random access, including negative indices to access items from the end of the list.

# Input types
## Required
- list
    - The list of masks from which to retrieve the item. It is essential for specifying which list the operation should be performed on.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
- index
    - The index of the item to retrieve from the list. Supports negative values for reverse access.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The mask retrieved from the specified index in the list.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Mask(metaclass=GetSingleFromListMeta):  TYPE = "MASK"

```

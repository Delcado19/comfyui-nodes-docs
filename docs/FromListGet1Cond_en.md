
# Documentation
- Class name: FromListGet1Cond
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1Cond node is designed to extract a single condition element from a given list based on a specified index. It enables selective access to condition data within the list, facilitating operations that require individual manipulation or inspection of condition elements.

# Input types
## Required
- list
    - The source list from which the condition element needs to be extracted. This parameter is essential for specifying the source list.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[CONDITIONING]
- index
    - Specifies the index of the condition element to extract from the list. Supports negative indexing for reverse access.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - The condition element extracted from the specified index in the list.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Cond(metaclass=GetSingleFromListMeta):  TYPE = "CONDITIONING"

```


# Documentation
- Class name: FromListGetConds
- Category: Bmad/Lists/GetAll
- Output node: False

The FromListGetConds node is used to retrieve a single condition element from a specified list. It can randomly access list elements based on a given index, supporting negative indices for reverse access, thereby enhancing flexibility in handling conditional data.

# Input types
## Required
- list
    - The list from which condition elements are retrieved. It is a key input specifying the data source.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[CONDITIONING]

# Output types
- conditioning
    - The condition element retrieved at the specified index.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetConds(metaclass=UnMakeListMeta):  TYPE = "CONDITIONING"

```

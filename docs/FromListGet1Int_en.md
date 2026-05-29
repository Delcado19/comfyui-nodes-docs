
# Documentation
- Class name: FromListGet1Int
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1Int node retrieves a single integer value from an integer list. It fetches the list element at a specified index, supports negative indices for accessing elements from the end of the list, and provides flexible list element access.

# Input types
## Required
- list
    - The list used to retrieve the integer value. This is the core input of the operation and provides the data source.
    - Comfy dtype: INT
    - Python dtype: List[int]
- index
    - Specifies the index at which to retrieve the integer value from the list. Supports negative values for reverse access, directly affecting the selection of the output integer.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The single integer value retrieved from the specified index in the list.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Int(metaclass=GetSingleFromListMeta): TYPE = "INT"

```

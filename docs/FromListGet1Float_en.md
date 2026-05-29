
# Documentation
- Class name: FromListGet1Float
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1Float node is designed to extract a single floating-point value from a given list based on a specified index. It supports random access of the list, including the use of negative indices to access elements in reverse order, thereby enhancing data operation flexibility.

# Input types
## Required
- list
    - The source list for extracting floating-point values. This parameter is crucial for specifying the data source.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- index
    - Specifies the index position in the list from which to extract the floating-point value. Supports negative indices for reverse order access.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- float
    - The floating-point value extracted from the specified index position in the list.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Float(metaclass=GetSingleFromListMeta): TYPE = "FLOAT"

```

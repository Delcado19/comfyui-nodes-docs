
# Documentation
- Class name: FromListGetFloats
- Category: Bmad/Lists/GetAll
- Output node: False

FromListGetFloats node retrieves a float value at a specific index from a list of floats. It supports random access to list elements, including negative indices for reverse access, enhancing data operation flexibility.

# Input types
## Required
- list
    - This is a list of floats used to retrieve specific values. It is the key input specifying the dataset to access.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]

# Output types
- float
    - Float value retrieved from the specified index in the list.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetFloats(metaclass=UnMakeListMeta): TYPE = "FLOAT"

```

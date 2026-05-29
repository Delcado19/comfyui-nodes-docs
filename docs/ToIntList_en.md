
# Documentation
- Class name: ToIntList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False

The ToIntList node aggregates multiple integer inputs into a single list. This is essential for scenarios where multiple integers need to be processed or operated on as a whole, simplifying workflows involving multiple integer values.

# Input types
## Required
- inputs_len
    - Specifies the number of integer inputs to aggregate into the list. This parameter determines the size of the resulting list and plays a key role in the node's operation by defining how many integer values are considered.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - Outputs a list composed of the integer inputs provided to the node. This list serves as a unified collection of individual integers, facilitating operations that require handling multiple integers as a single structure.
    - Comfy dtype: INT
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToIntList(metaclass=MakeListMeta): TYPE = "INT"

```


# Documentation
- Class name: ExtendIntList
- Category: Bmad/Lists/Extend
- Output node: False

The ExtendIntList node is designed to concatenate multiple integer lists into a single extended list. This feature is particularly useful in scenarios where integer data from different sources needs to be aggregated, enabling seamless data manipulation and analysis.

# Input types
## Required
- inputs_len
    - Specifies the number of integer lists to concatenate. This parameter determines how many lists will be merged into the extended list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The concatenated integer list aggregated from all input lists.
    - Comfy dtype: INT
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendIntList(metaclass=ExtendListMeta): TYPE = "INT"

```


# Documentation
- Class name: ExtendStringList
- Category: Bmad/Lists/Extend
- Output node: False
- Repo Ref: https://github.com/bmad4ever/Bmad-Comfy-Nodes

The ExtendStringList node is designed to concatenate multiple string lists into a single, extended list. This node is particularly useful in scenarios where string data from different sources needs to be aggregated, facilitating tasks involving collective string dataset operations or analysis.

# Input types
## Required
- inputs_len
    - Specifies the number of string lists to concatenate. This parameter determines how many string lists will be merged into the extended list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - The result list after concatenating all provided string lists. This list contains all strings from the input lists in their respective order.
    - Comfy dtype: STRING
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendStringList(metaclass=ExtendListMeta): TYPE = "STRING"

```

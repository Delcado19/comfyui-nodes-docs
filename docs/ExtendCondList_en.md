
# Documentation
- Class name: ExtendCondList
- Category: Bmad/Lists/Extend
- Output node: False

The ExtendCondList node extends a condition list. It allows adding new condition elements to an existing list, enabling dynamic expansion of condition data for various computational models or processes.

# Input types
## Required
- inputs_len
    - The 'inputs_len' parameter specifies the number of condition elements to add to the existing list. It plays a crucial role in expanding list capacity and incorporating new condition data, significantly affecting node execution and results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - The node outputs an extended list of condition elements, integrating newly added samples into the existing list.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Conditioning]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendCondList(metaclass=ExtendListMeta): TYPE = "CONDITIONING"

```

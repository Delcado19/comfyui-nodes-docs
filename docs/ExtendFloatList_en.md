
# Documentation
- Class name: ExtendFloatList
- Category: Bmad/Lists/Extend
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

The ExtendFloatList node is designed to concatenate multiple float lists into a single extended list. This feature is particularly useful in scenarios where data from different sources needs to be aggregated, enabling efficient and seamless processing of numerical data collections.

# Input types
## Required
- inputs_len
    - Specifies the number of float lists to concatenate. This parameter determines how many lists will be merged into the extended list, thereby affecting the node's execution process and the final size of the generated list.
    - Comfy dtype: INT
    - Python dtype: Tuple[int]

# Output types
- float
    - The concatenated float list aggregated from all input lists.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendFloatList(metaclass=ExtendListMeta): TYPE = "FLOAT"

```

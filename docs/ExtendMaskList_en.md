
# Documentation
- Class name: ExtendMaskList
- Category: Bmad/Lists/Extend
- Output node: False

The ExtendMaskList node is designed to extend mask lists, allowing multiple mask elements to be aggregated into a comprehensive list. This functionality is essential for operations that require simultaneous manipulation or analysis of multiple masks, providing a streamlined approach for batch processing mask data.

# Input types
## Required
- inputs_len
    - The 'inputs_len' parameter represents the set of mask elements to be extended. It plays a critical role in the node's operation, serving as the primary data input that the node subsequently processes to generate the extended mask list.
    - Comfy dtype: INT
    - Python dtype: List[torch.Tensor]

# Output types
- mask
    - The output is an extended list of mask elements, consolidated into a single entity for further processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendMaskList(metaclass=ExtendListMeta): TYPE = "MASK"

```

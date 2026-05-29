
# Documentation
- Class name: ToMaskList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ToMaskList node is designed to convert a series of inputs into a mask list. This node plays a critical role in organizing and preparing mask data for further processing or manipulation, ensuring the data is correctly formatted for subsequent nodes that require mask inputs.

# Input types
## Required
- inputs_len
    - The 'inputs_len' parameter represents the collection of inputs to be converted into a mask list. This parameter is essential to the node's operation, as it directly affects the composition of the output mask list, determining the data available for further processing.
    - Comfy dtype: INT
    - Python dtype: List[torch.Tensor]

# Output types
- mask
    - The output is a mask list, structured to facilitate further operations involving mask data in the pipeline.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToMaskList(metaclass=MakeListMeta): TYPE = "MASK"

```

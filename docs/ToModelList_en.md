
# Documentation
- Class name: ToModelList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False

The ToModelList node is designed to aggregate multiple model-related inputs into a single list. This functionality is essential for operations that need to process multiple models simultaneously, such as batch processing or model comparison tasks. It abstracts away the complexity of managing multiple inputs by providing a simplified way to group them together.

# Input types
## Required
- inputs_len
    - Specifies the number of model inputs to aggregate into the list. This parameter determines the size of the resulting list and plays a crucial role in the node's execution, as it defines how many model inputs will be considered.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The output is a list containing the aggregated model inputs. This list facilitates operations that need to process multiple models in a unified manner, improving the flexibility and efficiency of handling model collections.
    - Comfy dtype: MODEL
    - Python dtype: List[torch.nn.Module]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToModelList(metaclass=MakeListMeta): TYPE = "MODEL"

```


# Documentation
- Class name: ExtendModelList
- Category: Bmad/Lists/Extend
- Output node: False

The ExtendModelList node is designed to aggregate multiple model lists into a single extended list. This functionality is essential for scenarios that require merging model lists to form a comprehensive model collection for further processing or analysis.

# Input types
## Required
- inputs_len
    - Specifies the number of model lists to merge. It determines how many lists will be aggregated into the extended list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The merged model list, aggregating all input model lists into a single extended collection.
    - Comfy dtype: MODEL
    - Python dtype: List[torch.nn.Module]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendModelList(metaclass=ExtendListMeta): TYPE = "MODEL"

```

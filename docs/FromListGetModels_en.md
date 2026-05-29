
# Documentation
- Class name: FromListGetModels
- Category: Bmad/Lists/GetAll
- Output node: False

The FromListGetModels node aims to extract a single model from a model list based on a specified index. It implements the functionality to selectively retrieve a model from a collection, aiding operations that require processing of a single model.

# Input types
## Required
- list
    - This is the model list from which a single model is to be retrieved. This parameter is crucial for specifying the source collection of models.
    - Comfy dtype: MODEL
    - Python dtype: List[torch.nn.Module]

# Output types
- model
    - The model extracted from the specified index of the input list. This output is important for subsequent operations that require a specific model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetModels(metaclass=UnMakeListMeta):  TYPE = "MODEL"

```


# Documentation
- Class name: FromListGet1Model
- Category: Bmad/Lists/Get1
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FromListGet1Model node is designed to extract a single model from a model list. It selectively retrieves models by specifying an index, thus achieving focused operations on models of specific interest. This functionality is particularly useful for precise operations and analysis in large model collections.

# Input types
## Required
- list
    - The list parameter represents a model collection and is the data source for node operations. It is crucial for determining the node's working scope, directly affecting the range of models available for selection.
    - Comfy dtype: MODEL
    - Python dtype: List[torch.nn.Module]
- index
    - The index parameter determines the position of the model to retrieve from the list. It supports positive and reverse indexing, providing users with flexible access whether they want to get a model from the beginning, end, or middle of the list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The output model is the single model retrieved from the specified list. It is the core result of the node operation, laying the foundation for subsequent personalized processing or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Model(metaclass=GetSingleFromListMeta):  TYPE = "MODEL"

```

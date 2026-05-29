
# Documentation
- Class name: FromListGetLatents
- Category: Bmad/Lists/GetAll
- Output node: False

The FromListGetLatents node is designed to extract multiple latent representations from a provided list. It supports selection and manipulation of latent data structures, facilitating operations such as retrieval, analysis, and transformation of latent vectors.

# Input types
## Required
- list
    - Specifies the list of latent representations from which elements are to be extracted. This parameter is critical for defining the source of latent data to be operated on.
    - Comfy dtype: LATENT
    - Python dtype: List[torch.Tensor]

# Output types
- latent
    - The latent representations extracted from the specified list. This output is important for further processing or analysis of latent vectors.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetLatents(metaclass=UnMakeListMeta):  TYPE = "LATENT"

```

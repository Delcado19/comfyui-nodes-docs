
# Documentation
- Class name: FromListGet1Latent
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1Latent node extracts a single latent representation from a list of latent representations. It simplifies selecting a specific latent item from a collection, making operations and analysis on latent representation sets more convenient.

# Input types
## Required
- list
    - The list of latent representations from which to extract a single latent representation. This parameter is essential for specifying the source of the latent representation to select.
    - Comfy dtype: LATENT
    - Python dtype: List[torch.Tensor]
- index
    - The index of the latent representation to extract from the list. This parameter determines which item is selected from the list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The single latent representation extracted from the provided list. This output is essential for downstream tasks requiring a specific latent item.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Latent(metaclass=GetSingleFromListMeta):  TYPE = "LATENT"

```


# Documentation
- Class name: ExtendLatentList
- Category: Bmad/Lists/Extend
- Output node: False

The ExtendLatentList node is designed to expand a list of latent representations. It aggregates additional latent vectors into an existing collection, enabling the expansion of latent datasets for further processing or analysis.

# Input types
## Required
- inputs_len
    - The 'inputs_len' parameter represents the initial set of latent vectors to be expanded. It plays a crucial role in determining the base collection to which new latent vectors will be added, influencing both the node's execution process and the final expanded list result.
    - Comfy dtype: INT
    - Python dtype: List[torch.Tensor]

# Output types
- latent
    - The 'latent' output parameter represents the expanded list of latent vectors. It denotes the enhanced collection of latent representations obtained after adding new vectors.
    - Comfy dtype: LATENT
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendLatentList(metaclass=ExtendListMeta): TYPE = "LATENT"

```

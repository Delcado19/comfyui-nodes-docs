
# Documentation
- Class name: ToLatentList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False

The ToLatentList node aims to aggregate individual latent representations into a structured list format. By converting scattered latent samples into a coherent list, it facilitates the organization and processing of latent data, making it easier to handle and manipulate multiple latent samples.

# Input types
## Required
- inputs_len
    - The inputs_len parameter represents the individual latent samples to be aggregated into a list. This parameter is crucial for collecting and structuring latent data into a more manageable format, facilitating further processing or analysis.
    - Comfy dtype: INT
    - Python dtype: List[torch.Tensor]

# Output types
- latent
    - The output latent parameter represents the aggregated list of latent samples. This structured format allows for easier operation and analysis of multiple latent samples as a whole.
    - Comfy dtype: LATENT
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToLatentList(metaclass=MakeListMeta): TYPE = "LATENT"

```


# Documentation
- Class name: DF_Get_latent_size
- Category: Derfuu_Nodes/Functions
- Output node: False

The DF_Get_latent_size node aims to calculate and return the size of a latent representation, either in its original or scaled form. It simplifies the complexity of handling latent data structures by providing direct access to their size properties.

# Input types
## Required
- latent
    - The latent input represents the data structure whose size needs to be calculated. It is essential for determining the size based on the current state of the latent variables.
    - Comfy dtype: LATENT
    - Python dtype: Dict
- original
    - This boolean parameter determines whether to return the original size or the scaled size of the latent variables. It affects the calculation result by potentially altering the returned dimensions.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

# Output types
- WIDTH
    - Comfy dtype: INT
    - Represents the width dimension of the latent variable size.
    - Python dtype: int
- HEIGHT
    - Comfy dtype: INT
    - Represents the height dimension of the latent variable size.
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GetLatentSize:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "latent": Field.latent(),
                "original": Field.field([False, True]),
            }
        }

    RETURN_TYPES = ("INT", "INT",)
    RETURN_NAMES = ("WIDTH", "HEIGHT")
    CATEGORY = TREE_FUNCTIONS

    FUNCTION = 'get_size'

    def get_size(self, latent, original):
        size = sizes.get_latent_size(latent, original)
        return (size[0], size[1],)

```

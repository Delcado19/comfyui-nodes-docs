
# Documentation
- Class name: VAE Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAE Switch node is designed to select and output one from multiple provided Variational Autoencoder (VAE) models based on an integer selection input. It enables dynamic switching between different VAE models in a workflow, allowing flexible model selection at runtime.

# Input types
## Required
- select
    - Determines which VAE model to output. Each integer value corresponds to a specific VAE model input.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- vae_i
    - Represents generic VAE model inputs available for selection output. The index 'i' can range from 1 to 5, allowing dynamic selection among multiple VAE models.
    - Comfy dtype: VAE
    - Python dtype: object

# Output types
- vae_out
    - The VAE model selected according to the 'select' input.
    - Comfy dtype: VAE
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class VAE_Switch:

    CATEGORY = 'JPS Nodes/Switches'
    RETURN_TYPES = ("VAE",)
    RETURN_NAMES = ("vae_out",)
    FUNCTION = "get_vae"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "select": ("INT", {}),
            },
            "optional": {
                "vae_1": ("VAE",),
                "vae_2": ("VAE",),
                "vae_3": ("VAE",),
                "vae_4": ("VAE",),
                "vae_5": ("VAE",),
            }
        }

    def get_vae(self,select,vae_1=None,vae_2=None,vae_3=None,vae_4=None,vae_5=None,):
        
        vae_out = vae_1

        if (select == 2):
            vae_out = vae_2
        elif (select == 3):
            vae_out = vae_3
        elif (select == 4):
            vae_out = vae_4
        elif (select == 5):
            vae_out = vae_5

        return (vae_out,)

```

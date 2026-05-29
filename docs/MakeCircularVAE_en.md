# Documentation
- Class name: MakeCircularVAE
- Category: latent
- Output node: False
- Repo Ref: https://github.com/spinagon/ComfyUI-seamless-tiling

The `run` method of the MakeCircularVAE node aims to modify a Variational Autoencoder (VAE) model to implement circular padding for convolutional layers. This adjustment allows the model to process data with periodic boundary conditions, which is particularly useful for data with inherent cyclic symmetry. The node can apply circular padding to both x and y dimensions, or selectively to one dimension, based on the provided tiling configuration.

# Input types
## Required
- vae
    - The 'vae' parameter is the Variational Autoencoder model to be modified. It is the core component the node operates on, as it determines which model will undergo the circular padding transformation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- tiling
    - The 'tiling' parameter determines how circular padding is applied to the convolutional layers of the VAE model. It controls whether padding is applied to both dimensions or only one, and is critical to the model's ability to handle periodic data.
    - Comfy dtype: COMBO['enable', 'x_only', 'y_only', 'disable']
    - Python dtype: str
- copy_vae
    - The 'copy_vae' parameter determines whether to modify the original VAE model directly or first create a copy of the model. This choice can affect memory usage and the scope of changes made to the model.
    - Comfy dtype: COMBO['Make a copy', 'Modify in place']
    - Python dtype: str

# Output types
- VAE
    - The node's output is the modified or copied Variational Autoencoder model with circular padding applied to its convolutional layers, enhancing its ability to process data with cyclic symmetry.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class MakeCircularVAE:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'vae': ('VAE',), 'tiling': (['enable', 'x_only', 'y_only', 'disable'],), 'copy_vae': (['Make a copy', 'Modify in place'],)}}
    RETURN_TYPES = ('VAE',)
    FUNCTION = 'run'
    CATEGORY = 'latent'

    def run(self, vae, tiling, copy_vae):
        if copy_vae == 'Modify in place':
            vae_copy = vae
        else:
            vae_copy = copy.deepcopy(vae)
        if tiling == 'enable':
            make_circular_asymm(vae_copy.first_stage_model, True, True)
        elif tiling == 'x_only':
            make_circular_asymm(vae_copy.first_stage_model, True, False)
        elif tiling == 'y_only':
            make_circular_asymm(vae_copy.first_stage_model, False, True)
        else:
            make_circular_asymm(vae_copy.first_stage_model, False, False)
        return (vae_copy,)
```
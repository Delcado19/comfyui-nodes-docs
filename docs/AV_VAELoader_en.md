
# Documentation
- Class name: AV_VAELoader
- Category: Art Venture/Loaders
- Output node: False

The AV_VAELoader node is designed to load VAE models and provides an optional override feature, allowing users to specify an alternative VAE model for loading. This feature enhances the flexibility of model selection and usage within the Art Venture framework.

# Input types
## Required
- vae_name
    - The name of the VAE model to load. Unless an override model is specified, this will be the default model loaded.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- vae_override
    - Allows specifying an alternative VAE model for loading. If the specified model cannot be found, the default or expected VAE model will be loaded, providing a flexible approach to model selection.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- vae
    - The loaded VAE model, ready for direct use in the system. This output enables further operations or transformations using the model.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVVAELoader(VAELoader):
    @classmethod
    def INPUT_TYPES(s):
        inputs = VAELoader.INPUT_TYPES()
        inputs["optional"] = {"vae_override": ("STRING", {"default": "None"})}
        return inputs

    CATEGORY = "Art Venture/Loaders"

    def load_vae(self, vae_name, vae_override="None"):
        if vae_override != "None":
            if vae_override not in folder_paths.get_filename_list("vae"):
                print(f"Warning: Not found VAE model {vae_override}. Use {vae_name} instead.")
            else:
                vae_name = vae_override

        return super().load_vae(vae_name)

```

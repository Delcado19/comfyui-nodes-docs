# Documentation
- Class name: CR_VAEDecode
- Category: Comfyroll/Essential/Core
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_VAEDecode node uses a pre-trained Variational Autoencoder (VAE) to decode latent representations into images. It is a fundamental component in generative models, capable of reconstructing images from compressed latent vectors. This node is particularly useful for visualizing latent spaces and generating new samples for further analysis or creative applications.

# Input types
## Required
- samples
- The 'samples' parameter is critical because it contains the latent representations the node will decode into images. It directly influences the output, determining the diversity and quality of the generated images.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
- The 'vae' parameter specifies the pre-trained Variational Autoencoder model the node will use to decode latent samples. The choice of VAE model is crucial for the node's functionality, as it determines the structure and capabilities of the decoding process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- tiled
- The 'tiled' parameter is an optional boolean flag. When set to True, it instructs the node to decode samples in a tiled manner. This can be beneficial for handling larger images or when a specific decoding pattern is required.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- circular
- The 'circular' parameter is another optional boolean flag. When enabled, it applies circular padding to the convolutional layers in the VAE model. This can be important for maintaining feature continuity at the boundaries of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
- The 'IMAGE' output contains the decoded images generated from the input latent samples. It represents the primary result of the decoding process and is significant for visual analysis and further image manipulation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The 'show_help' output provides a URL link to the documentation page for further assistance and detailed information about the node's operation. This is very useful for users seeking additional guidance or wanting to understand the node's capabilities.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class CR_VAEDecode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'vae': ('VAE',), 'tiled': ('BOOLEAN', {'default': False}), 'circular': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'vae_decode'
    CATEGORY = icons.get('Comfyroll/Essential/Core')

    def vae_decode(self, samples, vae, circular=False, tiled=False):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Core-Nodes#cr-vae-decode'
        if circular == True:
            for layer in [layer for layer in vae.first_stage_model.modules() if isinstance(layer, torch.nn.Conv2d)]:
                layer.padding_mode = 'circular'
        if tiled == True:
            c = vae.decode_tiled(samples['samples'], tile_x=512, tile_y=512)
        else:
            c = vae.decode(samples['samples'])
        return (c, show_help)
```
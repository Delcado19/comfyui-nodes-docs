# Documentation
- Class name: VAEEncodeTiled
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAEEncodeTiled node is designed to efficiently and in parallel encode image data into latent space representations using a Variational Autoencoder (VAE). It operates by dividing large images into smaller, independently processable regions, then reassembling them. This approach is particularly useful for handling high-resolution images that may not fit in memory when processed as a whole. The node abstracts the complexity of tiling and encoding, providing users with a simplified interface to leverage VAEs for encoding tasks.

# Input types
## Required
- pixels
    - The 'pixels' parameter is the input image data processed by the node. It is critical as it is the raw material for the encoding process. The node expects this data in a format compatible with the VAE model used for encoding, typically involving image pixels.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The 'vae' parameter represents the Variational Autoencoder model that the node will use to encode the image data. This model is essential to the node's functionality as it defines the architecture and parameters of the encoding process.
    - Comfy dtype: VAE
    - Python dtype: AutoencoderKL
## Optional
- tile_size
    - The 'tile_size' parameter determines the size of the tiles into which the input image is divided for processing. This is an optional parameter that allows users to control the granularity of tiling, which can affect performance and memory usage.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The 'samples' output contains the encoded representation of the input image in latent space. This is the primary result of the node's operation and is essential for any subsequent tasks that require understanding the underlying structure of the image in a compressed form.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class VAEEncodeTiled:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pixels': ('IMAGE',), 'vae': ('VAE',), 'tile_size': ('INT', {'default': 512, 'min': 320, 'max': 4096, 'step': 64})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'encode'
    CATEGORY = '_for_testing'

    def encode(self, vae, pixels, tile_size):
        t = vae.encode_tiled(pixels[:, :, :, :3], tile_x=tile_size, tile_y=tile_size)
        return ({'samples': t},)
```
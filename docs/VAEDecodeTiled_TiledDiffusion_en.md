# Documentation
- Class name: VAEDecodeTiled_TiledDiffusion
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI-TiledDiffusion

This node decodes and reconstructs images from latent representations using a Variational Autoencoder (VAE) model, emphasizing tiled and diffusion techniques for large images. It balances computational efficiency and image quality, providing a robust solution for image reconstruction tasks.

# Input types
## Required
- samples
    - Input samples represent the latent space vectors the node uses to generate reconstructed images. They are essential because they form the basis of the reconstruction process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - VAE parameters refer to the pretrained Variational Autoencoder model the node uses to perform decoding. They are crucial for reconstructing images from latent space.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- tile_size
    - Tile size parameter determines the dimensions of the tiles used to process the image. It is important for optimizing memory usage and computational efficiency during decoding.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- fast
    - When fast mode is enabled, the node allows quicker decoding at the expense of latent image quality. It affects the trade‑off between speed and accuracy in the reconstruction process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - Output image is the result of the node's decoding process, representing the reconstructed version of the original input from latent space. It is a key output that reflects the node's primary function.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class VAEDecodeTiled_TiledDiffusion(TiledVAE):

    @classmethod
    def INPUT_TYPES(s):
        tile_size = get_rcmd_dec_tsize() * opt_f
        return {'required': {'samples': ('LATENT',), 'vae': ('VAE',), 'tile_size': ('INT', {'default': tile_size, 'min': 48 * opt_f, 'max': 4096, 'step': 16}), 'fast': ('BOOLEAN', {'default': True})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'process'
    CATEGORY = '_for_testing'

    def __init__(self):
        self.is_decoder = True
        super().__init__()
```
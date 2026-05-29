# Documentation
- Class name: VAEEncodeTiled_TiledDiffusion
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI-TiledDiffusion

This node encapsulates the process of encoding and diffusing data in a tiled manner, optimizing memory usage and processing efficiency. It aims to handle large-scale data transformations by splitting the input into manageable tile blocks, thereby facilitating efficient computation and resource allocation.

# Input types
## Required
- pixels
    - The input image data is crucial for the encoding and diffusion process, as it provides the raw material for the node to perform transformations. Without this input, the node cannot generate latent representations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The VAE model is the core of the encoding process, responsible for transforming the input data into latent space, which is then used for further diffusion.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- tile_size
    - The tile size parameter determines the granularity of input data partitioning, directly affecting the efficiency of the encoding and diffusion process. It must be carefully chosen to balance computational resources and memory usage.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- fast
    - When the fast parameter is enabled, it allows the node to perform certain optimizations, thereby speeding up the encoding and diffusion process, although there may be a trade-off in quality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- color_fix
    - When this parameter is activated, it applies a color correction step to the input data, ensuring that the latent space representation is more robust and less prone to artifacts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent
    - The output latent representation is a compressed version of the input data, capturing the essential features and structure in a low-dimensional space. It is a key component for subsequent diffusion steps.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class VAEEncodeTiled_TiledDiffusion(TiledVAE):

    @classmethod
    def INPUT_TYPES(s):
        fast = True
        tile_size = get_rcmd_enc_tsize()
        return {'required': {'pixels': ('IMAGE',), 'vae': ('VAE',), 'tile_size': ('INT', {'default': tile_size, 'min': 256, 'max': 4096, 'step': 16}), 'fast': ('BOOLEAN', {'default': fast}), 'color_fix': ('BOOLEAN', {'default': fast})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'process'
    CATEGORY = '_for_testing'

    def __init__(self):
        self.is_decoder = False
        super().__init__()
```
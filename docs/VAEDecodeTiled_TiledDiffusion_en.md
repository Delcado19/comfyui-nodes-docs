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
[View source repository on GitHub](https://github.com/shiimizu/ComfyUI-TiledDiffusion)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

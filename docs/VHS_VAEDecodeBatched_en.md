# Documentation
- Class name: VAEDecodeBatched
- Category: Video Helper Suite 🎥🅥🅗🅢/batched nodes
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The VAEDecodeBatched node is designed to batch decode latent samples using a Variational Autoencoder (VAE) model. It efficiently reconstructs images by processing multiple samples in a batch, which is particularly useful for large datasets or limited computational resources.

# Input types
## Required
- samples
    - The 'samplse' parameter is a key input to the VAEDecodeBatched node because it contains the latent representations that need to be decoded into images. The quality and structure of the latent samples directly affect the output images produced by the node.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The 'vae' parameter specifies the variational autoencoder model that the node will use to decode the latent samples. The model's architecture and training weights are crucial for generating high-quality reconstructed images.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- per_batch
    - The 'per_batch' parameter determines the number of samples processed per batch during decoding. It is important for balancing the trade-off between computational efficiency and memory usage, especially when dealing with large datasets.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- decoded_images
    - The 'decoded_images' output is a tensor containing the reconstructed images, which are obtained from decoding the input latent samples. It represents the main result of the VAEDecodeBatched node operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class VAEDecodeBatched:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'vae': ('VAE',), 'per_batch': ('INT', {'default': 16, 'min': 1})}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/batched nodes'
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'decode'

    def decode(self, vae, samples, per_batch):
        decoded = []
        for start_idx in range(0, samples['samples'].shape[0], per_batch):
            decoded.append(vae.decode(samples['samples'][start_idx:start_idx + per_batch]))
        return (torch.cat(decoded, dim=0),)
```
# Documentation
- Class name: VAEEncodeBatched
- Category: Video Helper Suite 🎥🅥🅗🅢/batched nodes
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The VAEEncodeBatched node is designed to efficiently encode a batch of video frames into a latent space representation using a variational autoencoder (VAE). It processes frames with a specified batch size to optimize computational resources and throughput, making it suitable for handling large volumes of video data.

# Input types
## Required
- pixels
    - The 'pixels' parameter is a key input for the VAEEncodeBatched node as it represents the raw video frames to be encoded. Its efficient processing is critical for the node's performance and the quality of the generated latent space representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The 'vae' parameter specifies the variational autoencoder model that the node will use to encode the video frames. It is essential for determining the structure and characteristics of the latent space for frame encoding.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- per_batch
    - The 'per_batch' parameter defines the size of each batch of pixels to be processed by the node. It is important for managing memory usage and computational efficiency, especially when processing high-resolution or large numbers of video frames.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The 'samples' output of the VAEEncodeBatched node contains the encoded latent space representation of the input video frames. This output is important as it forms the basis for further analysis or processing in downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class VAEEncodeBatched:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pixels': ('IMAGE',), 'vae': ('VAE',), 'per_batch': ('INT', {'default': 16, 'min': 1})}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/batched nodes'
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'encode'

    def encode(self, vae, pixels, per_batch):
        t = []
        for start_idx in range(0, pixels.shape[0], per_batch):
            try:
                sub_pixels = vae.vae_encode_crop_pixels(pixels[start_idx:start_idx + per_batch])
            except:
                sub_pixels = VAEEncode.vae_encode_crop_pixels(pixels[start_idx:start_idx + per_batch])
            t.append(vae.encode(sub_pixels[:, :, :, :3]))
        return ({'samples': torch.cat(t, dim=0)},)
```
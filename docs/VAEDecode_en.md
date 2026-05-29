# Documentation
- Class name: VAEDecode
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAEDecode node aims to convert latent representations back into the original data space. It leverages the decoding capability of a variational autoencoder (VAE) to reconstruct images from its encoded latent vectors. This process is essential for generating new data instances that are structurally and content-wise similar to the original dataset.

# Input types
## Required
- samples
- The 'samples' parameter is a key input to the VAEDecode node because it provides the latent representations that the node decodes into images. It is crucial for the reconstruction process, as the quality of the decoded images largely depends on the fidelity of these latent vectors.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
- The 'vae' parameter specifies the pre‑trained VAE model that the node will use to decode the latent samples. This is a mandatory input because the node relies on the model's parameters and learned distribution to perform the decoding.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Output types
- IMAGE
- The output of the VAEDecode node is the reconstructed image, generated from the decoded latent representation. This output is important because it demonstrates the node's ability to produce coherent images that reflect the input latent space.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class VAEDecode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'vae': ('VAE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'decode'
    CATEGORY = 'latent'

    def decode(self, vae, samples):
        return (vae.decode(samples['samples']),)
```
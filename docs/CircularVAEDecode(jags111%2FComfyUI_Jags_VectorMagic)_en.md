# Documentation
- Class name: CircularVAEDecode
- Category: Jags_vector/latent
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node prepares the model's convolutional layers for the Variational Autoencoder (VAE) decoding process to handle circular padding, ensuring generated images maintain consistency at boundaries.

# Input types
## Required
- samples
    - Input samples represent latent vectors from the VAE encoder, critical for image generation. They drive the entire decoding process and directly affect the quality and features of the output image.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - VAE parameters refer to the Variational Autoencoder model used to decode latent samples into images. They are essential to the node's functionality as they encapsulate the learned data distribution.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Output types
- image
    - Output images are the result of decoding input latent samples using the VAE model. They represent the visual representation of the encoded data and are the direct product of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class CircularVAEDecode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'vae': ('VAE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'decode'
    CATEGORY = 'Jags_vector/latent'

    def decode(self, vae, samples):
        for layer in [layer for layer in vae.first_stage_model.modules() if isinstance(layer, torch.nn.Conv2d)]:
            layer.padding_mode = 'circular'
        return (vae.decode(samples['samples']),)
```
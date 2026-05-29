# Documentation
- Class name: StableCascade_SuperResolutionControlnet
- Category: _for_testing/stable_cascade
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

StableCascade_SuperResolutionControlnet node aims to improve image resolution using a stable cascade approach. It uses a variational autoencoder (VAE) to encode the input image and generates control signals for super‑resolution. This process enlarges the image while preserving its integrity and details.

# Input types
## Required
- image
    - The input image is a fundamental parameter of the node because it is the raw data for super‑resolution processing. Its quality and resolution directly affect the node’s output, determining the clarity and detail of the final enhanced image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - VAE parameters are critical for the node’s operation because they provide the encoding mechanism needed to generate control signals. The choice and configuration of the VAE can significantly impact the node’s ability to effectively upscale images.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Output types
- controlnet_input
    - controlnet_input is a processed version of the input image, already encoded and ready for the super‑resolution control network. This is a key intermediate step that helps produce high‑quality upscaled images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- stage_c
    - stage_c output represents a coarse‑level latent representation, a crucial component in the super‑resolution process. It captures broader image features and guides the upscaling to higher resolutions.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- stage_b
    - stage_b output represents a finer‑grained latent representation, essential for adding detail to the upscaled image. It ensures the final image retains complex details and textures after super‑resolution.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class StableCascade_SuperResolutionControlnet:

    def __init__(self, device='cpu'):
        self.device = device

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'vae': ('VAE',)}}
    RETURN_TYPES = ('IMAGE', 'LATENT', 'LATENT')
    RETURN_NAMES = ('controlnet_input', 'stage_c', 'stage_b')
    FUNCTION = 'generate'
    CATEGORY = '_for_testing/stable_cascade'

    def generate(self, image, vae):
        width = image.shape[-2]
        height = image.shape[-3]
        batch_size = image.shape[0]
        controlnet_input = vae.encode(image[:, :, :, :3]).movedim(1, -1)
        c_latent = torch.zeros([batch_size, 16, height // 16, width // 16])
        b_latent = torch.zeros([batch_size, 4, height // 2, width // 2])
        return (controlnet_input, {'samples': c_latent}, {'samples': b_latent})
```
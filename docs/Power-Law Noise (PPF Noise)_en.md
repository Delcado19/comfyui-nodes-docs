# Documentation
- Class name: PPFNPowerLawNoise
- Category: Power Noise Suite/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node is designed to generate various types of power-law noise, applicable to texture generation, stochastic processes, noise-based art, and more. It provides a flexible interface for specifying parameters such as noise type, scale, and alpha exponent, allowing users to tailor the output to their specific needs.

# Input types
## Required
- batch_size
    - This parameter determines the number of noise images generated in a single batch, affecting computational efficiency and the suitability of the results.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width of the noise image determines the horizontal resolution, affecting the level of detail and the overall size of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Similar to width, the height parameter sets the vertical resolution of the noise image, affecting the size and detail of the output.
    - Comfy dtype: INT
    - Python dtype: int
- noise_type
    - The selected noise type determines the statistical properties of the generated noise, which is critical for applications that depend on specific noise characteristics.
    - Comfy dtype: COMBO
    - Python dtype: str
- scale
    - The scale parameter adjusts the overall amplitude of the noise, controlling the visibility and intensity of the noise pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_exponent
    - The alpha exponent shapes the power-law distribution of the noise, affecting the frequency content and the "color" of the noise (e.g., from white to Brownian noise).
    - Comfy dtype: FLOAT
    - Python dtype: float
- device
    - Specifying the device ('cpu' or 'cuda') determines the hardware on which the computation will be performed, affecting performance and compatibility.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- resampling
    - The resampling parameter affects how the noise image is interpolated when resizing, impacting the quality and appearance of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- modulator
    - The modulation parameter adds modulation to the noise, enabling more complex patterns and variations in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - By setting a seed, users can ensure reproducibility of the noise generation process, which is important for experimental and research purposes.
    - Comfy dtype: INT
    - Python dtype: int
- optional_vae
    - When provided, the optional_vae parameter allows integration of a Variational Autoencoder (VAE), enabling more sophisticated noise manipulation and generation.
    - Comfy dtype: VAE
    - Python dtype: VAE

# Output types
- latents
    - The latent output contains the noise images in latent space representation, which can be further processed or used as input to other nodes.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- previews
    - The preview output provides a visual representation of the generated noise, allowing users to quickly evaluate and compare different noise settings and parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class PPFNPowerLawNoise:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        pln = PowerLawNoise('cpu')
        return {'required': {'batch_size': ('INT', {'default': 1, 'max': 64, 'min': 1, 'step': 1}), 'width': ('INT', {'default': 512, 'max': 8192, 'min': 64, 'step': 1}), 'height': ('INT', {'default': 512, 'max': 8192, 'min': 64, 'step': 1}), 'resampling': (['nearest-exact', 'bilinear', 'area', 'bicubic', 'bislerp'],), 'noise_type': (pln.get_noise_types(),), 'scale': ('FLOAT', {'default': 1.0, 'max': 1024.0, 'min': 0.01, 'step': 0.001}), 'alpha_exponent': ('FLOAT', {'default': 1.0, 'max': 12.0, 'min': -12.0, 'step': 0.001}), 'modulator': ('FLOAT', {'default': 1.0, 'max': 2.0, 'min': 0.1, 'step': 0.01}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'device': (['cpu', 'cuda'],)}, 'optional': {'optional_vae': ('VAE',)}}
    RETURN_TYPES = ('LATENT', 'IMAGE')
    RETURN_NAMES = ('latents', 'previews')
    FUNCTION = 'power_noise'
    CATEGORY = 'Power Noise Suite/Noise'

    def power_noise(self, batch_size, width, height, resampling, noise_type, scale, alpha_exponent, modulator, seed, device, optional_vae=None):
        power_law = PowerLawNoise(device=device)
        tensors = power_law(batch_size, width, height, scale=scale, alpha=alpha_exponent, modulator=modulator, noise_type=noise_type, seed=seed)
        alpha_channel = torch.ones((batch_size, height, width, 1), dtype=tensors.dtype, device='cpu')
        tensors = torch.cat((tensors, alpha_channel), dim=3)
        if optional_vae is None:
            latents = tensors.permute(0, 3, 1, 2)
            latents = F.interpolate(latents, size=(height // 8, width // 8), mode=resampling)
            return ({'samples': latents}, tensors)
        encoder = nodes.VAEEncode()
        latents = []
        for tensor in tensors:
            tensor = tensor.unsqueeze(0)
            latents.append(encoder.encode(optional_vae, tensor)[0]['samples'])
        latents = torch.cat(latents)
        return ({'samples': latents}, tensors)
```
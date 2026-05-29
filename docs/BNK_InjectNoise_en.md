# Documentation
- Class name: InjectNoise
- Category: latent/noise
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_Noise.git

The InjectNoise node introduces noise into a set of latent representations to simulate the effect of noise on the generation process. Its function is to enhance data through controlled variability, which can improve the robustness and diversity of generated outputs.

# Input types
## Required
- latents
    - The latents parameter is critical because it contains the original latent representations into which noise will be injected. It directly influences the result of the noise enhancement process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- strength
    - The strength parameter determines the intensity of noise to inject into the latents. It is essential for controlling the degree of variation introduced to the data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - The optional noise parameter provides the noise source to apply to the latents. It is important because it allows customization of noise characteristics.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- mask
    - When a mask parameter is provided, it specifies which regions of the latents should be affected by noise. This is important for targeted noise application.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- latents
    - The output latents are the modified latent representations with noise injected, ready for further processing or generation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class InjectNoise:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latents': ('LATENT',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 200.0, 'step': 0.01})}, 'optional': {'noise': ('LATENT',), 'mask': ('MASK',)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'inject_noise'
    CATEGORY = 'latent/noise'

    def inject_noise(self, latents, strength, noise=None, mask=None):
        s = latents.copy()
        if noise is None:
            return (s,)
        if latents['samples'].shape != noise['samples'].shape:
            print('warning, shapes in InjectNoise not the same, ignoring')
            return (s,)
        noised = s['samples'].clone() + noise['samples'].clone() * strength
        if mask is not None:
            mask = prepare_mask(mask, noised.shape)
            noised = mask * noised + (1 - mask) * latents['samples']
        s['samples'] = noised
        return (s,)
```
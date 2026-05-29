# Documentation
- Class name: WAS_Latent_Noise
- Category: WAS Suite/Latent/Generate
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The "inject_noise" method introduces random noise into a set of latent samples to enhance the diversity of generated outputs. This method is essential for applications that require random variations in latent space to simulate real-world data distributions.

# Input types
## Required
- samples
    - The "samples" parameter is a key input representing the latent space vectors that will receive noise injection. It is crucial for node execution because it determines the basis for applying random variations.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- noise_std
    - The "noise_std" parameter sets the standard deviation of the noise added to the samples. This optional parameter lets users control the degree of randomness introduced into the latent space.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- samples
    - The output "samples" are the modified latent space vectors with injected noise. This output is important because it forms the basis for subsequent processing or generation steps in the workflow.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Latent_Noise:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'samples': ('LATENT',), 'noise_std': ('FLOAT', {'default': 0.1, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'inject_noise'
    CATEGORY = 'WAS Suite/Latent/Generate'

    def inject_noise(self, samples, noise_std):
        s = samples.copy()
        noise = torch.randn_like(s['samples']) * noise_std
        s['samples'] = s['samples'] + noise
        return (s,)
```
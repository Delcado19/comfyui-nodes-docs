# Documentation
- Class name: InjectNoiseToLatent
- Category: KJNodes/noise
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The InjectNoiseToLatent node is designed to introduce noise into latent space representations, simulating the impact of noise on the generation process. It operates by adding noise of a specified strength to latent samples, with optional normalization of the result and application of a mask to control which regions are affected by the noise. This node is essential for experiments involving robustness to noise and exploring the sensitivity of generative models to input perturbations.

# Input types
## Required
- latents
    - The latents parameter is critical because it contains the original latent space representation to which noise will be injected. This is a key input that determines the fundamental structure of the data processed by the node.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- strength
    - The strength parameter determines the intensity of the noise injected into the latent samples. It plays a significant role in determining the degree of perturbation applied to the data, thereby affecting the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - The noise input represents the noise pattern to be added to the latent space. It is a critical component in the noise injection process, influencing how the noise manifests in the final output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- normalize
    - When the normalize parameter is set to True, the noised latent samples are normalized, ensuring the distribution does not become overly skewed after noise injection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask
    - The optional mask parameter can be used to specify which regions of the latent space should have noise applied. It provides a means to control the spatial distribution of the noise.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mix_randn_amount
    - The mix_randn_amount parameter allows random noise to be mixed with the existing noise pattern, providing a method to introduce additional variability into the noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The provided seed parameter ensures that the randomness in the noise generation process is reproducible, which is useful for consistent experimental results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latents
    - The output latents are the modified latent space representations after the noise injection process. They are important because they form the foundation for subsequent generation steps.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class InjectNoiseToLatent:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latents': ('LATENT',), 'strength': ('FLOAT', {'default': 0.1, 'min': 0.0, 'max': 200.0, 'step': 0.0001}), 'noise': ('LATENT',), 'normalize': ('BOOLEAN', {'default': False}), 'average': ('BOOLEAN', {'default': False})}, 'optional': {'mask': ('MASK',), 'mix_randn_amount': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1000.0, 'step': 0.001}), 'seed': ('INT', {'default': 123, 'min': 0, 'max': 18446744073709551615, 'step': 1})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'injectnoise'
    CATEGORY = 'KJNodes/noise'

    def injectnoise(self, latents, strength, noise, normalize, average, mix_randn_amount=0, seed=None, mask=None):
        samples = latents.copy()
        if latents['samples'].shape != noise['samples'].shape:
            raise ValueError('InjectNoiseToLatent: Latent and noise must have the same shape')
        if average:
            noised = (samples['samples'].clone() + noise['samples'].clone()) / 2
        else:
            noised = samples['samples'].clone() + noise['samples'].clone() * strength
        if normalize:
            noised = noised / noised.std()
        if mask is not None:
            mask = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(noised.shape[2], noised.shape[3]), mode='bilinear')
            mask = mask.expand((-1, noised.shape[1], -1, -1))
            if mask.shape[0] < noised.shape[0]:
                mask = mask.repeat((noised.shape[0] - 1) // mask.shape[0] + 1, 1, 1, 1)[:noised.shape[0]]
            noised = mask * noised + (1 - mask) * latents['samples']
        if mix_randn_amount > 0:
            if seed is not None:
                torch.manual_seed(seed)
            rand_noise = torch.randn_like(noised)
            noised = ((1 - mix_randn_amount) * noised + mix_randn_amount * rand_noise) / (mix_randn_amount ** 2 + (1 - mix_randn_amount) ** 2) ** 0.5
        samples['samples'] = noised
        return (samples,)
```
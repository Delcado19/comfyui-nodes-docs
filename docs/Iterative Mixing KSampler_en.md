# Documentation
- Class name: IterativeMixingKSampler
- Category: test
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

This node refines a batch of latent representations by progressively introducing guidance from a set of reference latent representations, aiming to improve the quality of generated samples through iterative mixing.

# Input types
## Required
- model
    - A generative model used for denoising and refining latent representations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed value for the random number generator used to initialize noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration parameters that influence the denoising process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The name of the sampler used for the iterative denoising process.
    - Comfy dtype: ENUM
    - Python dtype: str
- scheduler
    - The scheduling strategy used to adjust the denoising process over time.
    - Comfy dtype: ENUM
    - Python dtype: str
- step_increment
    - The number of steps added in each iteration of the denoising process.
    - Comfy dtype: INT
    - Python dtype: int
- positive
    - Positive conditioning data used to guide the denoising process.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- negative
    - Negative conditioning data used to further refine the denoising process.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- latent_image_batch
    - The batch of latent representations that need to be denoised and refined.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- denoise
    - A parameter that controls the degree of denoising applied at each step.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_1
    - A parameter that influences the mixing rate between reference latent representations and denoised samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse_batch
    - A flag indicating whether the batch should be reversed before processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent_image_batch
    - The refined batch of latent representations after the iterative denoising process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class IterativeMixingKSampler:
    """
    Take a batch of latents, z_prime, and progressively de-noise them
    step by step from z_prime[0] to z_prime[steps], mixing in a weighted
    fraction of z_prime[i] at each step so that de-noising is guided by
    the z_prime latents. This batch sampler assumes that the number of steps
    is just the length of z_prime, so there is no steps parameter. The parameter
    latent_image_batch should come from the Batch Unsampler node.
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.1, 'round': 0.01}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'step_increment': ('INT', {'default': 1, 'min': 1, 'max': 10000}), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image_batch': ('LATENT',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'alpha_1': ('FLOAT', {'default': 3.0, 'min': 0.1, 'max': 10.0}), 'reverse_batch': ('BOOLEAN', {'default': True})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'test'

    def sample(self, model, seed, cfg, sampler_name, scheduler, step_increment, positive, negative, latent_image_batch, denoise=1.0, alpha_1=3.0, reverse_batch=True):
        if reverse_batch:
            latent_image_batch['samples'] = torch.flip(latent_image_batch['samples'], [0])
        return batched_ksampler(model, seed, cfg, sampler_name, scheduler, step_increment, positive, negative, latent_image_batch, denoise=denoise, alpha_1=alpha_1)
```
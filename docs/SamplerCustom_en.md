# Documentation
- Class name: SamplerCustom
- Category: sampling/custom_sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerCustom node facilitates the sampling process in generative models. It integrates components such as noise addition, model processing, and latent image manipulation to produce high‑quality output. The node offers a customizable and efficient sampling method, allowing fine‑tuning and control of the generation process.

# Input types
## Required
- model
- Model parameter is critical to the node because it defines the generative model used for sampling. It directly affects the quality and type of generated output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
- Positive parameter provides forward conditioning information, guiding the sampling process toward the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
- Negative parameter provides reverse conditioning information to avoid unwanted features in generated samples.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- sampler
- Sampler parameter specifies the sampling method to use, which can significantly impact the efficiency and effectiveness of the sampling process.
    - Comfy dtype: SAMPLER
    - Python dtype: str
- sigmas
- Sigmas parameter defines the noise level used at each step of sampling, influencing noise reduction and image clarity.
    - Comfy dtype: SIGMAS
    - Python dtype: List[float]
- latent_image
- Latent_image parameter is essential because it represents the input latent space where sampling begins.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- add_noise
- Add_noise parameter determines whether noise should be added to the latent image during sampling. This affects the diversity and randomness of generated samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
- Noise_seed parameter initializes the noise generation process, ensuring reproducibility of sampling results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- Cfg parameter adjusts the configuration of the sampling process, allowing users to control fidelity and detail level of generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
- Output parameter represents the main result of the sampling process, containing the generated latent sample.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- denoised_output
- Denoised_output parameter provides a denoised version of the generated sample, potentially offering clearer and more refined results.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class SamplerCustom:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'add_noise': ('BOOLEAN', {'default': True}), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.1, 'round': 0.01}), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'sampler': ('SAMPLER',), 'sigmas': ('SIGMAS',), 'latent_image': ('LATENT',)}}
    RETURN_TYPES = ('LATENT', 'LATENT')
    RETURN_NAMES = ('output', 'denoised_output')
    FUNCTION = 'sample'
    CATEGORY = 'sampling/custom_sampling'

    def sample(self, model, add_noise, noise_seed, cfg, positive, negative, sampler, sigmas, latent_image):
        latent = latent_image
        latent_image = latent['samples']
        if not add_noise:
            noise = Noise_EmptyNoise().generate_noise(latent)
        else:
            noise = Noise_RandomNoise(noise_seed).generate_noise(latent)
        noise_mask = None
        if 'noise_mask' in latent:
            noise_mask = latent['noise_mask']
        x0_output = {}
        callback = latent_preview.prepare_callback(model, sigmas.shape[-1] - 1, x0_output)
        disable_pbar = not comfy.utils.PROGRESS_BAR_ENABLED
        samples = comfy.sample.sample_custom(model, noise, cfg, sampler, sigmas, positive, negative, latent_image, noise_mask=noise_mask, callback=callback, disable_pbar=disable_pbar, seed=noise_seed)
        out = latent.copy()
        out['samples'] = samples
        if 'x0' in x0_output:
            out_denoised = latent.copy()
            out_denoised['samples'] = model.model.process_latent_out(x0_output['x0'].cpu())
        else:
            out_denoised = out
        return (out, out_denoised)
```
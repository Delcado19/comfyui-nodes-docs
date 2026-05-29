# Documentation
- Class name: SamplerCustomAdvanced
- Category: sampling/custom_sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerCustomAdvanced node performs advanced sampling on latent images. It uses components such as noise generation, guidance, and sampling mechanisms to produce high‑quality output. This node is essential in custom sampling workflows, offering a sophisticated method to generate and refine latent representations.

# Input types
## Required
- noise
    - Noise parameters are crucial for sampling because they introduce randomness into latent space, enabling diverse outputs. They significantly affect the quality and variety of the sampled image.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor
- guider
    - Guidance parameters are vital for steering the sampling toward desired results. They provide direction based on specific criteria or goals, helping refine the latent representation.
    - Comfy dtype: GUIDER
    - Python dtype: torch.nn.Module
- sampler
    - Sampler parameters determine the sampling strategy used by the node. They are key to the efficiency and effectiveness of the process, influencing the node’s ability to generate high‑fidelity latent images.
    - Comfy dtype: SAMPLER
    - Python dtype: torch.nn.Module
- sigmas
    - The sigmas parameter denotes the noise level or scale used during sampling. It controls the amount of noise and detail in the generated image, thus affecting overall quality.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor
- latent_image
    - The latent_image parameter is the input to the sampling process, representing the initial state of the latent representation. It forms the basis for the node’s operation and the final sampled image.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- output
    - The output parameters of the SamplerCustomAdvanced node include the sampled latent image. This is the primary result of the node’s operation and is valuable for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- denoised_output
    - The denoised_output parameter provides a version of the sampled latent image after noise reduction. This output is especially useful for applications that prioritize noise minimization.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class SamplerCustomAdvanced:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'noise': ('NOISE',), 'guider': ('GUIDER',), 'sampler': ('SAMPLER',), 'sigmas': ('SIGMAS',), 'latent_image': ('LATENT',)}}
    RETURN_TYPES = ('LATENT', 'LATENT')
    RETURN_NAMES = ('output', 'denoised_output')
    FUNCTION = 'sample'
    CATEGORY = 'sampling/custom_sampling'

    def sample(self, noise, guider, sampler, sigmas, latent_image):
        latent = latent_image
        latent_image = latent['samples']
        noise_mask = None
        if 'noise_mask' in latent:
            noise_mask = latent['noise_mask']
        x0_output = {}
        callback = latent_preview.prepare_callback(guider.model_patcher, sigmas.shape[-1] - 1, x0_output)
        disable_pbar = not comfy.utils.PROGRESS_BAR_ENABLED
        samples = guider.sample(noise.generate_noise(latent), latent_image, sampler, sigmas, denoise_mask=noise_mask, callback=callback, disable_pbar=disable_pbar, seed=noise.seed)
        samples = samples.to(comfy.model_management.intermediate_device())
        out = latent.copy()
        out['samples'] = samples
        if 'x0' in x0_output:
            out_denoised = latent.copy()
            out_denoised['samples'] = guider.model_patcher.model.process_latent_out(x0_output['x0'].cpu())
        else:
            out_denoised = out
        return (out, out_denoised)
```
# Documentation
- Class name: StyleAlignedSampleReferenceLatents
- Category: style_aligned
- Output node: False
- Repo Ref: https://github.com/brianfitzgerald/style_aligned_comfy

The 'sample' method of the StyleAlignedSampleReferenceLatents node generates a reference latent sequence consistent with the style of a given latent image. It samples noise that matches the input condition's style. This node is essential for applications requiring a series of generated images to maintain style consistency.

# Input types
## Required
- model
- Model parameters are critical for the node's operation because they provide the underlying neural network architecture used for sampling. They directly affect the quality and style of the generated latents.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
- The positive parameter defines the forward conditioning factors that guide sampling toward a specific style. It plays an important role in shaping the output's stylistic features.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, torch.Tensor]
- negative
- The negative parameter specifies conditioning factors to avoid during sampling, ensuring the generated latents do not exhibit undesired style traits.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, torch.Tensor]
- sampler
- The sampler parameter determines the sampling strategy used by the node. It is vital for controlling the randomness and diversity of the generated latents.
    - Comfy dtype: SAMPLER
    - Python dtype: Callable
- sigmas
- The sigmas parameter represents the variance used during sampling to control noise propagation. It is a key factor for fine‑tuning latent style details.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor
- latent_image
- The latent_image parameter is a key input that provides the initial latent state at the start of the sampling process. It sets the base style for the generated reference latents.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- noise_seed
- The noise_seed parameter initializes the random noise applied during sampling. It ensures reproducibility when a specific noise pattern is required.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The cfg parameter controls the configuration of the sampling process, affecting the scale and detail of the generated latents. It is crucial for achieving the desired style outcome.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- ref_latents
- The ref_latents output is a series of reference latents produced by the node. These latents match the style of the input latent image and are used for further processing or analysis.
    - Comfy dtype: STEP_LATENTS
    - Python dtype: torch.Tensor
- noised_output
- The noised_output parameter represents the final output of the sampling process, a noisy version of the input latent image. It encapsulates the essence of the input's style while introducing variability.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class StyleAlignedSampleReferenceLatents:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.1, 'round': 0.01}), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'sampler': ('SAMPLER',), 'sigmas': ('SIGMAS',), 'latent_image': ('LATENT',)}}
    RETURN_TYPES = ('STEP_LATENTS', 'LATENT')
    RETURN_NAMES = ('ref_latents', 'noised_output')
    FUNCTION = 'sample'
    CATEGORY = 'style_aligned'

    def sample(self, model, noise_seed, cfg, positive, negative, sampler, sigmas, latent_image):
        sigmas = sigmas.flip(0)
        if sigmas[0] == 0:
            sigmas[0] = 0.0001
        latent = latent_image
        latent_image = latent['samples']
        noise = torch.zeros(latent_image.size(), dtype=latent_image.dtype, layout=latent_image.layout, device='cpu')
        noise_mask = None
        if 'noise_mask' in latent:
            noise_mask = latent['noise_mask']
        ref_latents = []

        def callback(step: int, x0: T, x: T, steps: int):
            ref_latents.insert(0, x[0])
        disable_pbar = not comfy.utils.PROGRESS_BAR_ENABLED
        samples = comfy.sample.sample_custom(model, noise, cfg, sampler, sigmas, positive, negative, latent_image, noise_mask=noise_mask, callback=callback, disable_pbar=disable_pbar, seed=noise_seed)
        out = latent.copy()
        out['samples'] = samples
        out_noised = out
        ref_latents = torch.stack(ref_latents)
        return (ref_latents, out_noised)
```
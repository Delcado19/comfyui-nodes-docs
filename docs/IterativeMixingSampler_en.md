# Documentation
- Class name: IterativeMixingSamplerNode
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

The node enhances diversity and quality of generated samples by iteratively mixing latent variables. It finely controls output by gradually adjusting each latent variable's influence during sampling.

# Input types
## Required
- model
- Model parameters are critical because they define the generation network used by the sampler. They determine the architecture and learned outcomes the node will leverage to create new samples.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- sampler
- Sampler parameters are essential for defining the sampling strategy. They affect how latent variables are mixed and interact, influencing sample diversity and consistency.
    - Comfy dtype: COMBO
    - Python dtype: str
- alpha_1
- Alpha_1 controls the initial influence of the primary latent variable in the mixing process. Adjusting this parameter can markedly change the characteristics of the generated content, making it a key factor for achieving desired results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blending_schedule
- Mix progress defines the temporal advancement of the mixing process. It ensures smooth transitions between different latent influences, aiding natural evolution of generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- blending_function
- This function determines how latent variables are combined during mixing. It plays a crucial role in shaping the final features of generated samples by controlling their overall composition.
    - Comfy dtype: COMBO
    - Python dtype: str
- normalize_on_mean
- Enabling this parameter normalizes latent variables by their means. This promotes a more balanced and predictable mixing process, essential for maintaining output consistency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_blending_at_pct
- This parameter sets the starting point of the mixing process as a percentage of total sampling steps. It is important for timing the introduction of mixing, affecting overall sample quality and diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- stop_blending_at_pct
- This parameter defines the stopping point of the mixing process, helping control its duration and thus influencing the final characteristics of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_blending_at_pct
- This parameter limits mixing influence to a specified percentage, ensuring mixing does not overwhelm base latent variables and maintains balance during generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_min
- The blend_min parameter sets the minimum mixing value, ensuring the contribution of mixed latent variables is not too subtle and remains effective in shaping output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_max
- By setting an upper bound, blend_max ensures the influence of mixed latent variables does not exceed a threshold, preserving diversity without compromising the base model's integrity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- perlin_mode
- The perlin_mode parameter introduces a noise pattern during mixing, adding randomness that can enhance creativity and variability of generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- perlin_strength
- Perlin intensity determines the strength of the noise pattern, directly affecting the degree of variation during mixing and thus output diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- perlin_scale
- The scale of Perlin noise influences the granularity of the pattern, affecting fine details and texture of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rewind
- Enabling replay allows the node to revisit previous steps in the sampling process, providing greater control over iterative mixing and potentially yielding finer results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- rewind_min
- rewind_min sets the lower bound of the replay process, preventing the node from rewinding too far in sampling steps, which could undo progress.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rewind_max
- rewind_max defines the upper bound of the replay process, avoiding excessive backtracking that might cause loss of desired features in generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sampler
- The output sampler is a configured sampling strategy instance that combines various parameters to produce diverse, high‑quality samples, reflecting fine‑grained mixing of latent variables.
    - Comfy dtype: SAMPLER
    - Python dtype: comfy.samplers.KSampler

# Usage tips
- Infra type: GPU

# Source code
```
class IterativeMixingSamplerNode:
    """
    A sampler implementing iterative mixing of latents.
    Use this with the SamplerCustom node.
    """
    PERLIN_MODES = ['masks', 'latents', 'matched_noise']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'sampler': (list(SAMPLERS_MAP.keys()), {'default': 'euler'}), 'alpha_1': ('FLOAT', {'default': 2.4, 'min': 0.05, 'max': 100.0, 'step': 0.05}), 'blending_schedule': (list(BLENDING_SCHEDULE_MAP.keys()), {'default': 'cosine'}), 'blending_function': (list(BLENDING_FUNCTION_MAP.keys()), {'default': 'addition'}), 'normalize_on_mean': ('BOOLEAN', {'default': False}), 'start_blending_at_pct': ('FLOAT', {'default': 0.0, 'min': 0.0, 'step': 0.01}), 'stop_blending_at_pct': ('FLOAT', {'default': 1.0, 'min': 0.0, 'step': 0.01}), 'clamp_blending_at_pct': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'blend_min': ('FLOAT', {'default': 0.0, 'step': 0.01}), 'blend_max': ('FLOAT', {'default': 1.0, 'step': 0.01}), 'perlin_mode': (s.PERLIN_MODES, {'default': 'masks'}), 'perlin_strength': ('FLOAT', {'default': 0.75, 'step': 0.001}), 'perlin_scale': ('FLOAT', {'default': 10.0, 'min': 0.1, 'max': 400.0}), 'rewind': ('BOOLEAN', {'default': False}), 'rewind_min': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 0.99}), 'rewind_max': ('FLOAT', {'default': 0.8, 'min': 0.01, 'max': 0.99})}}
    RETURN_TYPES = ('SAMPLER',)
    CATEGORY = 'sampling/custom_sampling/samplers'
    FUNCTION = 'get_sampler'

    def set_steps(self, steps, denoise=None):
        self.steps = steps
        if denoise is None or denoise > 0.9999:
            self.sigmas = self.calculate_sigmas(steps).to(self.device)
        else:
            new_steps = int(steps / denoise)
            sigmas = self.calculate_sigmas(new_steps).to(self.device)
            self.sigmas = sigmas[-(steps + 1):]

    def get_sampler(self, model, sampler, alpha_1, blending_schedule, blending_function, normalize_on_mean, start_blending_at_pct, stop_blending_at_pct, clamp_blending_at_pct, blend_min, blend_max, perlin_mode, perlin_strength, perlin_scale, rewind, rewind_min, rewind_max):
        extras = {k: v for (k, v) in locals().items() if k != 'self'}
        extras['model_node'] = extras['model']
        del extras['model']
        if sampler not in SAMPLERS_MAP:
            raise ValueError(f'invalid sampler: {sampler}')
        sampler_obj = SAMPLERS_MAP[sampler]()
        sampler_fn = functools.partial(sampler_obj.__call__)
        del extras['sampler']
        sampler = comfy.samplers.KSAMPLER(sampler_fn, extra_options=extras)
        return (sampler,)
```
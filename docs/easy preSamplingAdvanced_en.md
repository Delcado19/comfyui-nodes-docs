# Documentation
- Class name: samplerSettingsAdvanced
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node provides a configuration workflow for sampling parameters of generative models, offering a robust framework to fine‑tune the generation process for specific needs. It emphasizes adaptability and user control over sampling rather than delving into low‑level method details.

# Input types
## Required
- pipe
    - The `pipe` parameter is the node’s primary information source, containing all context and data required for sampling. It is crucial because it determines data flow and model state at each step.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- steps
    - The `steps` parameter defines the number of iterations to perform during sampling. It is essential for setting sampling granularity and the extent to which model capacity is utilized.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The `cfg` parameter adjusts the sampling configuration, allowing fine‑tuning of model behavior. It plays a key role in shaping output to meet desired specifications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The `sampler_name` parameter selects the specific sampling method to use, influencing overall strategy and effectiveness.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The `scheduler` parameter determines the scheduling strategy for sampling, which is vital for resource management and efficient execution.
    - Comfy dtype: COMBO
    - Python dtype: str
- start_at_step
    - The `start_at_step` parameter sets the starting point of the sampling process, important for controlling timing and order of operations.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The `end_at_step` parameter defines the endpoint of the sampling process, ensuring execution stops at the intended stage.
    - Comfy dtype: INT
    - Python dtype: int
- add_noise
    - The `add_noise` parameter controls the introduction of noise during sampling, affecting diversity and quality of the generated output.
    - Comfy dtype: COMBO
    - Python dtype: str
- seed
    - The `seed` parameter provides a fixed point for random number generation, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - The `return_with_leftover_noise` parameter decides whether to include residual noise in the final output, which may impact aesthetic and stylistic aspects.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- image_to_latent
    - The `image_to_latent` parameter allows conversion of an input image to latent space, fundamental for certain types of generative tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The `latent` parameter directly supplies latent variable input, critical for tasks that operate at the latent‑space level.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- prompt
    - The `prompt` parameter introduces textual guidance to the generative model, steering output toward a specific theme or style.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The `extra_pnginfo` parameter contains additional information related to PNG images, usable for advanced image‑processing tasks.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - The `my_unique_id` parameter assigns a unique identifier to the operation, essential for tracking and managing multiple concurrent processes.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The `pipe` output is a comprehensive structure that encapsulates the updated model state and sampling results, providing a foundation for subsequent operations.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
```
class samplerSettingsAdvanced:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('PIPE_LINE',), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'start_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'end_at_step': ('INT', {'default': 10000, 'min': 0, 'max': 10000}), 'add_noise': (['enable', 'disable'],), 'seed': ('INT', {'default': 0, 'min': 0, 'max': MAX_SEED_NUM}), 'return_with_leftover_noise': (['disable', 'enable'],)}, 'optional': {'image_to_latent': ('IMAGE',), 'latent': ('LATENT',)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('pipe',)
    OUTPUT_NODE = True
    FUNCTION = 'settings'
    CATEGORY = 'EasyUse/PreSampling'

    def settings(self, pipe, steps, cfg, sampler_name, scheduler, start_at_step, end_at_step, add_noise, seed, return_with_leftover_noise, image_to_latent=None, latent=None, prompt=None, extra_pnginfo=None, my_unique_id=None):
        vae = pipe['vae']
        batch_size = pipe['loader_settings']['batch_size'] if 'batch_size' in pipe['loader_settings'] else 1
        if image_to_latent is not None:
            samples = {'samples': vae.encode(image_to_latent[:, :, :, :3])}
            samples = RepeatLatentBatch().repeat(samples, batch_size)[0]
            images = image_to_latent
        elif latent is not None:
            samples = latent
            images = pipe['images']
        else:
            samples = pipe['samples']
            images = pipe['images']
        force_full_denoise = True
        if return_with_leftover_noise == 'enable':
            force_full_denoise = False
        new_pipe = {'model': pipe['model'], 'positive': pipe['positive'], 'negative': pipe['negative'], 'vae': pipe['vae'], 'clip': pipe['clip'], 'samples': samples, 'images': images, 'seed': seed, 'loader_settings': {**pipe['loader_settings'], 'steps': steps, 'cfg': cfg, 'sampler_name': sampler_name, 'scheduler': scheduler, 'start_step': start_at_step, 'last_step': end_at_step, 'denoise': 1.0, 'add_noise': add_noise, 'force_full_denoise': force_full_denoise}}
        del pipe
        return {'ui': {'value': [seed]}, 'result': (new_pipe,)}
```
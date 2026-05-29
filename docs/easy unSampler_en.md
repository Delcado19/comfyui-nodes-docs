# Documentation
- Class name: unsampler
- Category: EasyUse/Sampler
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The unsampler class generates high-quality images from latent vectors through the sampling process. It is designed to be user-friendly and efficient, allowing customization of various parameters to achieve desired results.

# Input types
## Required
- steps
    - Steps determine the progress of the sampling process, with more steps usually leading to improved image quality. This is a key parameter as it directly affects the output.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - This parameter specifies at which step the sampling process should terminate. It is important for controlling the duration and computational cost of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter 'cfg' affects the behavior of the sampling process, such as the level of detail and denoising in the generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter determines the sampling method used, which can significantly alter the characteristics of the generated image.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the sampling strategy adjusted over time, affecting the quality and consistency of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- normalize
    - Normalization is a preprocessing step that can improve the stability and performance of the sampling process by ensuring the input data is standardized.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- pipe
    - The “pipe” parameter is an optional input that, when provided, includes additional context and resources required for the sampling process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- optional_model
    - The “optional_model” parameter allows users to specify a custom model for the sampling process, thereby generating images with unique characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- optional_positive
    - The “optional_positive” parameter provides positive conditioning data that can guide the sampling process towards the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- optional_negative
    - The “optional_negative” parameter provides negative conditioning data that helps avoid undesirable features in the generated images.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- optional_latent
    - The “optional_latent” parameter is used to provide initial latent vectors, which can be refined during the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- pipe
    - The “pipe” output contains the results of the sampling process, including the generated image and any additional context or resources used during the process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- latent
    - The “latent” output provides the final latent vectors representing the generated image, which can be further analyzed or used as input for other processes.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: GPU

# Source code
```
class unsampler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'end_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'cfg': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'normalize': (['disable', 'enable'],)}, 'optional': {'pipe': ('PIPE_LINE',), 'optional_model': ('MODEL',), 'optional_positive': ('CONDITIONING',), 'optional_negative': ('CONDITIONING',), 'optional_latent': ('LATENT',)}}
    RETURN_TYPES = ('PIPE_LINE', 'LATENT')
    RETURN_NAMES = ('pipe', 'latent')
    FUNCTION = 'unsampler'
    CATEGORY = 'EasyUse/Sampler'

    def unsampler(self, cfg, sampler_name, steps, end_at_step, scheduler, normalize, pipe=None, optional_model=None, optional_positive=None, optional_negative=None, optional_latent=None):
        model = optional_model if optional_model is not None else pipe['model']
        positive = optional_positive if optional_positive is not None else pipe['positive']
        negative = optional_negative if optional_negative is not None else pipe['negative']
        latent_image = optional_latent if optional_latent is not None else pipe['samples']
        normalize = normalize == 'enable'
        device = comfy.model_management.get_torch_device()
        latent = latent_image
        latent_image = latent['samples']
        end_at_step = min(end_at_step, steps - 1)
        end_at_step = steps - end_at_step
        noise = torch.zeros(latent_image.size(), dtype=latent_image.dtype, layout=latent_image.layout, device='cpu')
        noise_mask = None
        if 'noise_mask' in latent:
            noise_mask = comfy.sample.prepare_mask(latent['noise_mask'], noise.shape, device)
        noise = noise.to(device)
        latent_image = latent_image.to(device)
        _positive = comfy.sampler_helpers.convert_cond(positive)
        _negative = comfy.sampler_helpers.convert_cond(negative)
        (models, inference_memory) = comfy.sampler_helpers.get_additional_models({'positive': _positive, 'negative': _negative}, model.model_dtype())
        comfy.model_management.load_models_gpu([model] + models, model.memory_required(noise.shape) + inference_memory)
        model_patcher = comfy.model_patcher.ModelPatcher(model.model, load_device=device, offload_device=comfy.model_management.unet_offload_device())
        sampler = comfy.samplers.KSampler(model_patcher, steps=steps, device=device, sampler=sampler_name, scheduler=scheduler, denoise=1.0, model_options=model.model_options)
        sigmas = sampler.sigmas.flip(0) + 0.0001
        pbar = comfy.utils.ProgressBar(steps)

        def callback(step, x0, x, total_steps):
            pbar.update_absolute(step + 1, total_steps)
        samples = sampler.sample(noise, positive, negative, cfg=cfg, latent_image=latent_image, force_full_denoise=False, denoise_mask=noise_mask, sigmas=sigmas, start_step=0, last_step=end_at_step, callback=callback)
        if normalize:
            samples -= samples.mean()
            samples /= samples.std()
        samples = samples.cpu()
        comfy.sample.cleanup_additional_models(models)
        out = latent.copy()
        out['samples'] = samples
        if pipe is None:
            pipe = {}
        new_pipe = {**pipe, 'samples': out}
        return (new_pipe, out)
```
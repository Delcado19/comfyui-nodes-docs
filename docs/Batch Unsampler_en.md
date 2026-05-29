# Documentation
- Class name: BatchUnsampler
- Category: tests
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

The BatchUnsampler node is designed to generate a sequence of reverse-order latent representations starting from a given latent image. It uses the model's noise schedule to progressively add noise, simulating the reverse process of latent diffusion as described in the original paper. This node is essential for testing and analyzing the behavior of diffusion models under various noise conditions and sampling strategies.

# Input types
## Required
- model
    - The model parameter is critical for the BatchUnsampler node, as it provides the underlying diffusion model that the node will use to generate latent representations. The model's noise schedule is particularly important for simulating the reverse diffusion process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- steps
    - The steps parameter determines the number of intermediate latent representations to be generated. It is a key factor in controlling the granularity of the reverse diffusion process and the level of detail in the generated latent sequence.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_name
    - The sampler_name parameter specifies the type of sampler used by the BatchUnsampler node. This choice affects the method of noise addition to the latent representations, thereby influencing the characteristics of the generated sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- latent_image
    - The latent_image parameter is a critical input for the BatchUnsampler node, as it represents the source latent image from which the noisy latent sequence will be generated. This image serves as the starting point for the reverse diffusion process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent_batch
    - The latent_batch output of the BatchUnsampler node contains a batch of latent representations generated through the reverse diffusion process. These latent representations are important for further analysis or as inputs to other nodes in the diffusion model pipeline.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class BatchUnsampler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'end_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'step_increment': ('INT', {'default': 1, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'normalize': (['disable', 'enable'],), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',)}}
    RETURN_TYPES = ('LATENT',)
    RETURN_NAMES = ('latent_batch',)
    FUNCTION = 'unsampler'
    CATEGORY = 'tests'

    def unsampler(self, model, cfg, sampler_name, steps, end_at_step, step_increment, scheduler, normalize, positive, negative, latent_image):
        """
        Generate a batch of latents representing each z[i] in the
        progressively noised sequence of latents stemming from the
        source latent_image, using the model's noising schedule (sigma)
        in reverse and applying normal noise at each step in the manner
        prescribed by the original latent diffusion paper.
        """
        normalize = normalize == 'enable'
        device = comfy.model_management.get_torch_device()
        latent = latent_image
        latent_image = latent['samples']
        batch_of_latents = []
        end_at_step = min(end_at_step, steps - 1)
        end_at_step = steps - end_at_step
        noise = torch.zeros(latent_image.size(), dtype=latent_image.dtype, layout=latent_image.layout, device='cpu')
        noise_mask = None
        if 'noise_mask' in latent:
            noise_mask = comfy.sampler_helpers.prepare_mask(latent['noise_mask'], noise, device)
        real_model = model.model
        noise = noise.to(device)
        latent_image = latent_image.to(device)
        positive = comfy.sampler_helpers.convert_cond(positive)
        negative = comfy.sampler_helpers.convert_cond(negative)
        (models, inference_memory) = comfy.sampler_helpers.get_additional_models({'positive': positive, 'negative': negative}, model.model_dtype())
        comfy.model_management.load_models_gpu([model] + models, model.memory_required(noise.shape) + inference_memory)
        sampler = comfy.samplers.KSampler(real_model, steps=steps, device=device, sampler=sampler_name, scheduler=scheduler, denoise=1.0, model_options=model.model_options)
        sigmas = sampler.sigmas.flip(0)
        z = generate_noised_latents(latent_image, sigmas)
        logger.warning(f'latent_image.shape={latent_image.shape}')
        logger.warning(f'z.shape={z.shape}')
        out = {'samples': z}
        comfy.sampler_helpers.cleanup_additional_models(models)
        return (out,)
```
# Documentation
- Class name: latentNoisy
- Category: EasyUse/Latent
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The latentNoisy class facilitates generating noisy latent samples, which is crucial for various generative models. It manages the process of creating noise and applying it to the model's latent space, allowing manipulation of the output randomness. This class is designed to integrate seamlessly with existing pipelines, enhancing overall flexibility and control over the generation process.

# Input types
## Required
- sampler_name
    - The sampler_name parameter is crucial for defining the type of sampler used in the latent space sampling process. It determines the algorithmic method and behavior, thus affecting the quality and characteristics of the generated samples.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SAMPLERS]
    - Python dtype: str
- scheduler
    - The scheduler parameter is crucial for controlling the learning rate or other hyperparameters during the sampling process. It helps fine-tune the model's performance and achieve better results.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SCHEDULERS]
    - Python dtype: str
- steps
    - The steps parameter defines the number of iterations or duration of the sampling process. It is a key factor in determining the convergence and stability of the generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- start_at_step
    - The start_at_step parameter specifies the starting point of the sampling process. It is important for controlling the timing and order of operations within the pipeline.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter marks the end of the sampling process. It works together with the start_at_step parameter to define the range of sampling steps.
    - Comfy dtype: INT
    - Python dtype: int
- source
    - The source parameter determines whether the computation should be executed on CPU or GPU. It significantly impacts the performance and efficiency of the sampling process.
    - Comfy dtype: COMBO[['CPU', 'GPU']]
    - Python dtype: str
- seed
    - The seed parameter is crucial for ensuring reproducibility and consistency of the sampling process. It initializes the random number generator, affecting the generation of noise.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- pipe
    - The pipe parameter is an optional input that provides additional context and settings for the sampling process. It can include details about the model, loader settings, and other pipeline-specific information.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- optional_model
    - The optional_model parameter allows specifying the model to be used during the sampling process. It is particularly useful when custom models need to be integrated into the pipeline.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- optional_latent
    - The optional_latent parameter provides a way to supply pre-generated latent samples. This is beneficial for further processing or analysis, without needing to regenerate samples from scratch.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- pipe
    - The pipe output contains updated pipeline information, including the generated noise samples. It is a key part of the process as it allows continuing or terminating the pipeline based on the results.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- latent
    - The latent output contains the generated noisy latent samples. These samples are essential for further processing or analysis in the generative model workflow.
    - Comfy dtype: LATENT
    - Python dtype: dict
- sigma
    - The sigma output represents the difference in noise level between the start and end steps of the sampling process. This is an important value that can be used to adjust noise levels in subsequent operations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: GPU

# Source code
```
class latentNoisy:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'steps': ('INT', {'default': 10000, 'min': 0, 'max': 10000}), 'start_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'end_at_step': ('INT', {'default': 10000, 'min': 1, 'max': 10000}), 'source': (['CPU', 'GPU'],), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}, 'optional': {'pipe': ('PIPE_LINE',), 'optional_model': ('MODEL',), 'optional_latent': ('LATENT',)}}
    RETURN_TYPES = ('PIPE_LINE', 'LATENT', 'FLOAT')
    RETURN_NAMES = ('pipe', 'latent', 'sigma')
    FUNCTION = 'run'
    CATEGORY = 'EasyUse/Latent'

    def run(self, sampler_name, scheduler, steps, start_at_step, end_at_step, source, seed, pipe=None, optional_model=None, optional_latent=None):
        model = optional_model if optional_model is not None else pipe['model']
        batch_size = pipe['loader_settings']['batch_size']
        empty_latent_height = pipe['loader_settings']['empty_latent_height']
        empty_latent_width = pipe['loader_settings']['empty_latent_width']
        if optional_latent is not None:
            samples = optional_latent
        else:
            torch.manual_seed(seed)
            if source == 'CPU':
                device = 'cpu'
            else:
                device = comfy.model_management.get_torch_device()
            noise = torch.randn((batch_size, 4, empty_latent_height // 8, empty_latent_width // 8), dtype=torch.float32, device=device).cpu()
            samples = {'samples': noise}
        device = comfy.model_management.get_torch_device()
        end_at_step = min(steps, end_at_step)
        start_at_step = min(start_at_step, end_at_step)
        comfy.model_management.load_model_gpu(model)
        model_patcher = comfy.model_patcher.ModelPatcher(model.model, load_device=device, offload_device=comfy.model_management.unet_offload_device())
        sampler = comfy.samplers.KSampler(model_patcher, steps=steps, device=device, sampler=sampler_name, scheduler=scheduler, denoise=1.0, model_options=model.model_options)
        sigmas = sampler.sigmas
        sigma = sigmas[start_at_step] - sigmas[end_at_step]
        sigma /= model.model.latent_format.scale_factor
        sigma = sigma.cpu().numpy()
        samples_out = samples.copy()
        s1 = samples['samples']
        samples_out['samples'] = s1 * sigma
        if pipe is None:
            pipe = {}
        new_pipe = {**pipe, 'samples': samples_out}
        del pipe
        return (new_pipe, samples_out, sigma)
```
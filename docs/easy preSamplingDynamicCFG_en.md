# Documentation
- Class name: dynamicCFGSettings
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The dynamicCFGSettings node aims to dynamically adjust configuration settings for a given pipeline, optimizing the sampling process based on specified parameters. It allows fine-tuning the sampling procedure through inputs such as steps, cfg, and denoise, which collectively influence the output pipeline generation.

# Input types
## Required
- pipe
    - The pipe parameter represents the pipeline to be configured, crucial for the node's operation as it determines the context in which settings will be applied.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- steps
    - The steps parameter defines the number of steps to take during the sampling process, directly affecting the granularity and duration of sampling.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter is a floating-point value used to adjust the configuration of the sampling process, influencing the behavior and output quality of the entire process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_mode
    - The cfg_mode parameter determines the mode of configuration scaling, essential for controlling dynamic adjustment of sampling settings.
    - Comfy dtype: Enum
    - Python dtype: Enum
- cfg_scale_min
    - The cfg_scale_min parameter sets the minimum scaling value for configuration, ensuring dynamic adjustments do not fall below the specified threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the sampling method to be used, a key decision factor in shaping the output of the sampling process.
    - Comfy dtype: Enum
    - Python dtype: Enum
- scheduler
    - The scheduler parameter determines the scheduling strategy of the sampling process, affecting how steps are managed over time.
    - Comfy dtype: Enum
    - Python dtype: Enum
- denoise
    - The denoise parameter controls the level of noise reduction applied during sampling, improving clarity and quality of results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- image_to_latent
    - When the image_to_latent parameter is provided, it is used to convert an image into a latent representation for further processing in the sampling pipeline.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - If the latent parameter is specified, it indicates that latent space data will be used in the sampling process instead of deriving it from an image.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- prompt
    - The prompt parameter is an optional text input that can be used to guide the sampling process to generate outputs consistent with certain textual descriptions.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - If the extra_pnginfo parameter exists, it contains additional information related to the sampling process, enhancing contextual understanding of input data.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - The my_unique_id parameter is an optional identifier that can be used to track or label specific instances of the sampling process.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The output pipe is the modified pipeline with new settings applied, ready for subsequent sampling operations.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class dynamicCFGSettings:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('PIPE_LINE',), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'cfg_mode': (DynThresh.Modes,), 'cfg_scale_min': ('FLOAT', {'default': 3.5, 'min': 0.0, 'max': 100.0, 'step': 0.5}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': MAX_SEED_NUM})}, 'optional': {'image_to_latent': ('IMAGE',), 'latent': ('LATENT',)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('pipe',)
    OUTPUT_NODE = True
    FUNCTION = 'settings'
    CATEGORY = 'EasyUse/PreSampling'

    def settings(self, pipe, steps, cfg, cfg_mode, cfg_scale_min, sampler_name, scheduler, denoise, seed, image_to_latent=None, latent=None, prompt=None, extra_pnginfo=None, my_unique_id=None):
        dynamic_thresh = DynThresh(7.0, 1.0, 'CONSTANT', 0, cfg_mode, cfg_scale_min, 0, 0, 999, False, 'MEAN', 'AD', 1)

        def sampler_dyn_thresh(args):
            input = args['input']
            cond = input - args['cond']
            uncond = input - args['uncond']
            cond_scale = args['cond_scale']
            time_step = args['timestep']
            dynamic_thresh.step = 999 - time_step[0]
            return input - dynamic_thresh.dynthresh(cond, uncond, cond_scale, None)
        model = pipe['model']
        m = model.clone()
        m.set_model_sampler_cfg_function(sampler_dyn_thresh)
        vae = pipe['vae']
        batch_size = pipe['loader_settings']['batch_size'] if 'batch_size' in pipe['loader_settings'] else 1
        if image_to_latent is not None:
            samples = {'samples': vae.encode(image_to_latent[:, :, :, :3])}
            samples = RepeatLatentBatch().repeat(samples, batch_size)[0]
            images = image_to_latent
        elif latent is not None:
            samples = RepeatLatentBatch().repeat(latent, batch_size)[0]
            images = pipe['images']
        else:
            samples = pipe['samples']
            images = pipe['images']
        new_pipe = {'model': m, 'positive': pipe['positive'], 'negative': pipe['negative'], 'vae': pipe['vae'], 'clip': pipe['clip'], 'samples': samples, 'images': images, 'seed': seed, 'loader_settings': {**pipe['loader_settings'], 'steps': steps, 'cfg': cfg, 'sampler_name': sampler_name, 'scheduler': scheduler, 'denoise': denoise}}
        del pipe
        return {'ui': {'value': [seed]}, 'result': (new_pipe,)}
```
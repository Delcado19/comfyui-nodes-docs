# Documentation
- Class name: samplerSettingsNoiseIn
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node is designed to configure and apply noise settings for the sampling process, which can enhance the diversity and quality of generated samples. It allows adjusting noise factors and schedules, helping achieve a more refined and controllable generation workflow.

# Input types
## Required
- pipe
    - The 'pipe' parameter is essential because it carries the necessary information about the model and samples being processed. It is the backbone of the node's operation, facilitating the data flow required for applying noise and subsequent sampling steps.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- factor
    - The 'factor' parameter is crucial in determining the degree of noise introduced during the sampling process. It directly affects the balance between original noise and varied noise, thereby influencing the diversity and consistency of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The 'steps' parameter defines the number of iterations the sampling process will undergo. It is important because it determines the complexity and depth of sampling, with more steps potentially leading to more refined results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The 'cfg' parameter is used to fine-tune the configuration of the sampling process. It plays a role in adjusting the overall behavior of the node, ensuring sampling proceeds according to the desired specifications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The 'sampler_name' parameter is crucial in selecting the appropriate sampling method. It influences the strategy employed when generating samples, with different samplers offering different approaches to noise application and sample diversity.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The 'scheduler' parameter is important in managing the application of noise across sampling steps. It helps control the rate at which noise is introduced, ensuring smooth transitions from one stage of the sampling process to the next.
    - Comfy dtype: COMBO
    - Python dtype: str
- denoise
    - The 'denoise' parameter is responsible for specifying the level of denoising to be applied. It affects the clarity and sharpness of generated samples, with higher values resulting in clearer outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The 'seed' parameter is essential for ensuring reproducibility in the sampling process. It initializes the random number generator, allowing consistent results when using the same settings across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The 'pipe' output is a modified version of the input 'pipe', now containing adjusted noise settings and generated samples. It is the result of the node's processing, encapsulating the enhanced sampling data for further use.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class samplerSettingsNoiseIn:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('PIPE_LINE',), 'factor': ('FLOAT', {'default': 0.1, 'min': 0.0, 'max': 1.0, 'step': 0.01, 'round': 0.01}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': MAX_SEED_NUM})}, 'optional': {'optional_noise_seed': ('INT', {'forceInput': True}), 'optional_latent': ('LATENT',)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('pipe',)
    OUTPUT_NODE = True
    FUNCTION = 'settings'
    CATEGORY = 'EasyUse/PreSampling'

    def slerp(self, val, low, high):
        dims = low.shape
        low = low.reshape(dims[0], -1)
        high = high.reshape(dims[0], -1)
        low_norm = low / torch.norm(low, dim=1, keepdim=True)
        high_norm = high / torch.norm(high, dim=1, keepdim=True)
        low_norm[low_norm != low_norm] = 0.0
        high_norm[high_norm != high_norm] = 0.0
        omega = torch.acos((low_norm * high_norm).sum(1))
        so = torch.sin(omega)
        res = (torch.sin((1.0 - val) * omega) / so).unsqueeze(1) * low + (torch.sin(val * omega) / so).unsqueeze(1) * high
        return res.reshape(dims)

    def prepare_mask(self, mask, shape):
        mask = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(shape[2], shape[3]), mode='bilinear')
        mask = mask.expand((-1, shape[1], -1, -1))
        if mask.shape[0] < shape[0]:
            mask = mask.repeat((shape[0] - 1) // mask.shape[0] + 1, 1, 1, 1)[:shape[0]]
        return mask

    def expand_mask(self, mask, expand, tapered_corners):
        try:
            import numpy as np
            import scipy
            c = 0 if tapered_corners else 1
            kernel = np.array([[c, 1, c], [1, 1, 1], [c, 1, c]])
            mask = mask.reshape((-1, mask.shape[-2], mask.shape[-1]))
            out = []
            for m in mask:
                output = m.numpy()
                for _ in range(abs(expand)):
                    if expand < 0:
                        output = scipy.ndimage.grey_erosion(output, footprint=kernel)
                    else:
                        output = scipy.ndimage.grey_dilation(output, footprint=kernel)
                output = torch.from_numpy(output)
                out.append(output)
            return torch.stack(out, dim=0)
        except:
            return None

    def settings(self, pipe, factor, steps, cfg, sampler_name, scheduler, denoise, seed, optional_noise_seed=None, optional_latent=None, prompt=None, extra_pnginfo=None, my_unique_id=None):
        latent = optional_latent if optional_latent is not None else pipe['samples']
        model = pipe['model']
        (batch_size, _, height, width) = latent['samples'].shape
        generator = torch.manual_seed(seed)
        base_noise = torch.randn((1, 4, height, width), dtype=torch.float32, device='cpu', generator=generator).repeat(batch_size, 1, 1, 1).cpu()
        if optional_noise_seed is None or optional_noise_seed == seed:
            optional_noise_seed = seed + 1
        generator = torch.manual_seed(optional_noise_seed)
        variation_noise = torch.randn((batch_size, 4, height, width), dtype=torch.float32, device='cpu', generator=generator).cpu()
        slerp_noise = self.slerp(factor, base_noise, variation_noise)
        end_at_step = steps
        start_at_step = round(end_at_step - end_at_step * denoise)
        device = comfy.model_management.get_torch_device()
        comfy.model_management.load_model_gpu(model)
        model_patcher = comfy.model_patcher.ModelPatcher(model.model, load_device=device, offload_device=comfy.model_management.unet_offload_device())
        sampler = comfy.samplers.KSampler(model_patcher, steps=steps, device=device, sampler=sampler_name, scheduler=scheduler, denoise=1.0, model_options=model.model_options)
        sigmas = sampler.sigmas
        sigma = sigmas[start_at_step] - sigmas[end_at_step]
        sigma /= model.model.latent_format.scale_factor
        sigma = sigma.cpu().numpy()
        work_latent = latent.copy()
        work_latent['samples'] = latent['samples'].clone() + slerp_noise * sigma
        if 'noise_mask' in latent:
            noise_mask = self.prepare_mask(latent['noise_mask'], latent['samples'].shape)
            work_latent['samples'] = noise_mask * work_latent['samples'] + (1 - noise_mask) * latent['samples']
            work_latent['noise_mask'] = self.expand_mask(latent['noise_mask'].clone(), 5, True)
        if pipe is None:
            pipe = {}
        new_pipe = {'model': pipe['model'], 'positive': pipe['positive'], 'negative': pipe['negative'], 'vae': pipe['vae'], 'clip': pipe['clip'], 'samples': work_latent, 'images': pipe['images'], 'seed': seed, 'loader_settings': {**pipe['loader_settings'], 'steps': steps, 'cfg': cfg, 'sampler_name': sampler_name, 'scheduler': scheduler, 'denoise': denoise, 'add_noise': 'disable'}}
        return (new_pipe,)
```

# Documentation
- Class name: easy preSamplingCustom
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The preSamplingCustom node is specifically designed for custom pre-sampling configuration in the generation pipeline, allowing tailored operations on the latent space and sampling parameters to achieve specific image generation effects.

# Input types
## Required
- pipe
    - Specify the pipeline configuration, including the model, positive and negative prompts, and other settings as the foundation for the pre-sampling process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- guider
    - Determine the guidance strategy for the sampling process, providing options such as CFG, DualCFG, etc., defaulting to 'Basic'.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cfg
    - Control the condition factor, affecting the strength of conditions applied during the sampling process, providing default values and ranges.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_negative
    - Specify the negative condition factor, adjusting the influence of negative conditions during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Select the specific sampler used during the pre-sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Select the scheduler that controls the sampling steps, affecting the progression of the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - Define the number of steps to take during the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_max
    - Set the maximum sigma value for noise adjustment during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigma_min
    - Determine the minimum sigma value, setting the lower bound for noise adjustment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rho
    - Adjust the rho parameter, affecting sampling dynamics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beta_d
    - Control the beta_d parameter, affecting the diffusion process during sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beta_min
    - Set the minimum value of beta, affecting the lower bound of the diffusion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eps_s
    - Specify the eps_s parameter, adjusting the step size during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- flip_sigmas
    - Enable or disable flipping of sigma values, changing the noise pattern during the sampling process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- denoise
    - Adjust the denoising factor, affecting the clarity and quality of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_noise
    - Enable or disable noise addition, affecting the texture and detail of the generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- seed
    - Set the seed for random number generation, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int

## Optional
- image_to_latent
    - Convert the input image to a latent representation and integrate it into the pre-sampling process.
    - Comfy dtype: IMAGE
    - Python dtype: object
- latent
    - Provide a latent representation directly used in the pre-sampling process.
    - Comfy dtype: LATENT
    - Python dtype: object
- optional_sampler
    - Optionally specify an alternative sampler for the pre-sampling process.
    - Comfy dtype: SAMPLER
    - Python dtype: str
- optional_sigmas
    - Optionally provide a custom set of sigma values for noise adjustment.
    - Comfy dtype: SIGMAS
    - Python dtype: list

# Output types
- pipe
    - Return the modified pipeline configuration, now containing custom pre-sampling settings, ready for further processing or image generation.
    - Comfy dtype: PIPE_LINE
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class samplerCustomSettings:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {"required":
                    {"pipe": ("PIPE_LINE",),
                     "guider": (['CFG','DualCFG','IP2P+DualCFG','Basic'],{"default":"Basic"}),
                     "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                     "cfg_negative": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                     "sampler_name": (comfy.samplers.KSampler.SAMPLERS + ['inversed_euler'],),
                     "scheduler": (comfy.samplers.KSampler.SCHEDULERS + ['karrasADV','exponentialADV','polyExponential', 'sdturbo', 'vp', 'alignYourSteps'],),
                     "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                     "sigma_max": ("FLOAT", {"default": 14.614642, "min": 0.0, "max": 1000.0, "step": 0.01, "round": False}),
                     "sigma_min": ("FLOAT", {"default": 0.0291675, "min": 0.0, "max": 1000.0, "step": 0.01, "round": False}),
                     "rho": ("FLOAT", {"default": 7.0, "min": 0.0, "max": 100.0, "step": 0.01, "round": False}),
                     "beta_d": ("FLOAT", {"default": 19.9, "min": 0.0, "max": 1000.0, "step": 0.01, "round": False}),
                     "beta_min": ("FLOAT", {"default": 0.1, "min": 0.0, "max": 1000.0, "step": 0.01, "round": False}),
                     "eps_s": ("FLOAT", {"default": 0.001, "min": 0.0, "max": 1.0, "step": 0.0001, "round": False}),
                     "flip_sigmas": ("BOOLEAN", {"default": False}),
                     "denoise": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                     "add_noise": (["enable", "disable"], {"default": "enable"}),
                     "seed": ("INT", {"default": 0, "min": 0, "max": MAX_SEED_NUM}),
                     },
                "optional": {
                    "image_to_latent": ("IMAGE",),
                    "latent": ("LATENT",),
                    "optional_sampler":("SAMPLER",),
                    "optional_sigmas":("SIGMAS",),
                },
                "hidden":
                    {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID"},
                }

    RETURN_TYPES = ("PIPE_LINE", )
    RETURN_NAMES = ("pipe",)
    OUTPUT_NODE = True

    FUNCTION = "settings"
    CATEGORY = "EasyUse/PreSampling"

    def ip2p(self, positive, negative, vae=None, pixels=None, latent=None):
        if latent is not None:
            concat_latent = latent
        else:
            x = (pixels.shape[1] // 8) * 8
            y = (pixels.shape[2] // 8) * 8

            if pixels.shape[1] != x or pixels.shape[2] != y:
                x_offset = (pixels.shape[1] % 8) // 2
                y_offset = (pixels.shape[2] % 8) // 2
                pixels = pixels[:, x_offset:x + x_offset, y_offset:y + y_offset, :]

            concat_latent = vae.encode(pixels)

        out_latent = {}
        out_latent["samples"] = torch.zeros_like(concat_latent)

        out = []
        for conditioning in [positive, negative]:
            c = []
            for t in conditioning:
                d = t[1].copy()
                d["concat_latent_image"] = concat_latent
                n = [t[0], d]
                c.append(n)
            out.append(c)
        return (out[0], out[1], out_latent)

    def get_inversed_euler_sampler(self):
        @torch.no_grad()
        def sample_inversed_euler(model, x, sigmas, extra_args=None, callback=None, disable=None, s_churn=0., s_tmin=0.,
                                  s_tmax=float('inf'), s_noise=1.):
            """Implements Algorithm 2 (Euler steps) from Karras et al. (2022)."""
            extra_args = {} if extra_args is None else extra_args
            s_in = x.new_ones([x.shape[0]])
            for i in trange(1, len(sigmas), disable=disable):
                sigma_in = sigmas[i - 1]

                if i == 1:
                    sigma_t = sigmas[i]
                else:
                    sigma_t = sigma_in

                denoised = model(x, sigma_t * s_in, **extra_args)

                if i == 1:
                    d = (x - denoised) / (2 * sigmas[i])
                else:
                    d = (x - denoised) / sigmas[i - 1]

                dt = sigmas[i] - sigmas[i - 1]
                x = x + d * dt
                if callback is not None:
                    callback(
                        {'x': x, 'i': i, 'sigma': sigmas[i], 'sigma_hat': sigmas[i], 'denoised': denoised})
            return x / sigmas[-1]

        ksampler = comfy.samplers.KSAMPLER(sample_inversed_euler)
        return (ksampler,)

    def get_custom_cls(self, sampler_name):
        try:
            cls = custom_samplers.__dict__[sampler_name]
            return cls()
        except:
            raise Exception(f"Custom sampler {sampler_name} not found, Please updated your ComfyUI")

    def settings(self, pipe, guider, cfg, cfg_negative, sampler_name, scheduler, steps, sigma_max, sigma_min, rho, beta_d, beta_min, eps_s, flip_sigmas, denoise, add_noise, seed, image_to_latent=None, latent=None, optional_sampler=None, optional_sigmas=None, prompt=None, extra_pnginfo=None, my_unique_id=None):

        # 图生图转换
        vae = pipe["vae"]
        model = pipe["model"]
        positive = pipe['positive']
        negative = pipe['negative']
        batch_size = pipe["loader_settings"]["batch_size"] if "batch_size" in pipe["loader_settings"] else 1
        _guider, sigmas = None, None
        if image_to_latent is not None:
            if guider == "IP2P+DualCFG":
                positive, negative, latent = self.ip2p(pipe['positive'], pipe['negative'], vae, image_to_latent)
                samples = latent
            else:
                samples = {"samples": vae.encode(image_to_latent[:, :, :, :3])}
                samples = RepeatLatentBatch().repeat(samples, batch_size)[0]
            images = image_to_latent
        elif latent is not None:
            if guider == "IP2P+DualCFG":
                positive, negative, latent = self.ip2p(pipe['positive'], pipe['negative'], latent=latent)
                samples = latent
            else:
                samples = latent
            images = pipe["images"]
        else:
            samples = pipe["samples"]
            images = pipe["images"]

        # guider
        if guider == 'CFG':
            _guider, = self.get_custom_cls('CFGGuider').get_guider(model, positive, negative, cfg)
        elif guider in ['DualCFG', 'IP2P+DualCFG']:
            _guider, =  self.get_custom_cls('DualCFGGuider').get_guider(model, positive, negative, pipe['negative'], cfg, cfg_negative)
        else:
            _guider, = self.get_custom_cls('BasicGuider').get_guider(model, positive)

        # sampler
        if optional_sampler:
            sampler = optional_sampler
        else:
            if sampler_name == 'inversed_euler':
                sampler, = self.get_inversed_euler_sampler()
            else:
                sampler, = self.get_custom_cls('KSamplerSelect').get_sampler(sampler_name)

        # sigmas
        if optional_sigmas is not None:
            sigmas = optional_sigmas
        else:
            match scheduler:
                case 'vp':
                    sigmas, = self.get_custom_cls('VPScheduler').get_sigmas(steps, beta_d, beta_min, eps_s)
                case 'karrasADV':
                    sigmas, = self.get_custom_cls('KarrasScheduler').get_sigmas(steps, sigma_max, sigma_min, rho)
                case 'exponentialADV':
                    sigmas, = self.get_custom_cls('ExponentialScheduler').get_sigmas(steps, sigma_max, sigma_min)
                case 'polyExponential':
                    sigmas, = self.get_custom_cls('PolyexponentialScheduler').get_sigmas(steps, sigma_max, sigma_min, rho)
                case 'sdturbo':
                    sigmas, = self.get_custom_cls('SDTurboScheduler').get_sigmas(model, steps, denoise)
                case 'alignYourSteps':
                    try:
                        model_type = get_sd_version(model)
                        if model_type == 'unknown':
                            raise Exception("This Model not supported")
                        sigmas, = alignYourStepsScheduler().get_sigmas(model_type.upper(), steps, denoise)
                    except:
                        raise Exception("Please update your ComfyUI")
                case _:
                    sigmas, = self.get_custom_cls('BasicScheduler').get_sigmas(model, scheduler, steps, denoise)

            # filp_sigmas
            if flip_sigmas:
                sigmas, = self.get_custom_cls('FlipSigmas').get_sigmas(sigmas)
        # noise
        if add_noise == 'disable':
            noise, = self.get_custom_cls('DisableNoise').get_noise()
        else:
            noise, = self.get_custom_cls('RandomNoise').get_noise(seed)

        new_pipe = {
            "model": pipe['model'],
            "positive": pipe['positive'],
            "negative": pipe['negative'],
            "vae": pipe['vae'],
            "clip": pipe['clip'],

            "samples": samples,
            "images": images,
            "seed": seed,

            "loader_settings": {
                **pipe["loader_settings"],
                "steps": steps,
                "cfg": cfg,
                "sampler_name": sampler_name,
                "scheduler": scheduler,
                "denoise": denoise,
                "custom": {
                    "noise": noise,
                    "guider": _guider,
                    "sampler": sampler,
                    "sigmas": sigmas,
                }
            }
        }

        del pipe

        return {"ui": {"value": [seed]}, "result": (new_pipe,)}

```

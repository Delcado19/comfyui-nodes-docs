
# Documentation
- Class name: KSamplerProgress __Inspire
- Category: InspirePack/analysis
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-Inspire-Pack

KSamplerProgress __Inspire node is designed to iteratively sample and optimize latent images through multiple steps, enabling progressive visualization of the sampling process. It leverages advanced sampling techniques to enhance the quality and diversity of generated images, making it suitable for applications requiring detailed image progression analysis.

# Input types
## Required
- model
    - Specifies the model used for sampling, which is the core determinant of the characteristics and quality of generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - Defines the seed for noise generation, ensuring reproducibility and consistency of sampling results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Determines the number of steps in the sampling process, directly affecting the optimization and progression of latent images.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration settings for the sampling process, used to adjust the sampler's behavior and parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Identifies the specific sampler to be used, influencing the sampling strategy and resulting image characteristics.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduler controlling the sampling process, affecting the progression and quality of image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Positive prompt, guiding the sampling toward desired image attributes, improving relevance and specificity.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative prompt, used to steer sampling away from undesired image attributes, enhancing output quality.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Initial latent image, serving as the starting point for progression, optimized through the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoise
    - Specifies the denoising factor applied during the sampling process, affecting the clarity and detail of generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - The mode of noise application during the sampling process, influencing the texture and detail of generated images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- interval
    - The time interval for capturing and returning latent images, facilitating progressive visualization.
    - Comfy dtype: INT
    - Python dtype: int
- omit_start_latent
    - Indicates whether to exclude the starting latent image from the results, providing flexibility for progression output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent
    - The final latent image after the sampling process is complete, representing the end result of progressive optimization.
    - Comfy dtype: LATENT
    - Python dtype: dict
- progress_latent
    - A collection of latent images captured at specified intervals during the sampling process, demonstrating the progression of image optimization.
    - Comfy dtype: LATENT
    - Python dtype: dict


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class KSampler_progress(a1111_compat.KSampler_inspire):
    @classmethod
    def INPUT_TYPES(s):
        return {"required":
                    {"model": ("MODEL",),
                     "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                     "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                     "sampler_name": (comfy.samplers.KSampler.SAMPLERS, ),
                     "scheduler": (common.SCHEDULERS, ),
                     "positive": ("CONDITIONING", ),
                     "negative": ("CONDITIONING", ),
                     "latent_image": ("LATENT", ),
                     "denoise": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                     "noise_mode": (["GPU(=A1111)", "CPU"],),
                     "interval": ("INT", {"default": 1, "min": 1, "max": 10000}),
                     "omit_start_latent": ("BOOLEAN", {"default": True, "label_on": "True", "label_off": "False"}),
                     }
                }

    CATEGORY = "InspirePack/analysis"

    RETURN_TYPES = ("LATENT", "LATENT")
    RETURN_NAMES = ("latent", "progress_latent")

    def sample(self, model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise, noise_mode, interval, omit_start_latent):
        adv_steps = int(steps / denoise)

        sampler = a1111_compat.KSamplerAdvanced_inspire()

        if omit_start_latent:
            result = []
        else:
            result = [latent_image['samples']]

        for i in range(0, adv_steps+1):
            add_noise = i == 0
            return_with_leftover_noise = i != adv_steps
            latent_image = sampler.sample(model, add_noise, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, i, i+1, noise_mode, return_with_leftover_noise)[0]
            if i % interval == 0 or i == adv_steps:
                result.append(latent_image['samples'])

        if len(result) > 0:
            result = torch.cat(result)
            result = {'samples': result}
        else:
            result = latent_image

        return (latent_image, result)

```

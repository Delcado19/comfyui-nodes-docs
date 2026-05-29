
# Documentation
- Class name: KSamplerAdvancedProgress __Inspire
- Category: InspirePack/analysis
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to progressively sample images using the advanced KSampler algorithm, tailored specifically for the Inspire package. It meticulously adjusts and enhances the image generation process at each iteration through a series of input parameters and conditions, enabling step-by-step image optimization.

# Input types
## Required
- model
    - Specifies the generation model used for sampling, playing a crucial role in the quality and style of the generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- add_noise
    - Determines whether to add noise at the beginning of the sampling process, affecting the initial state and potentially increasing the diversity of generated images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - Provides a seed for noise generation, ensuring reproducibility and consistency in generated images when noise is added.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Specifies the number of steps to perform during the sampling process, directly affecting the refinement and detail of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration settings for the sampling process, allowing customization of the generation process according to specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: dict
- sampler_name
    - Identifies the specific sampler algorithm to be used, enabling selection of different sampling strategies within the advanced KSampler framework.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Defines the scheduling algorithm that controls the sampling process, influencing the progression and quality of image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Positive prompts or conditions used to guide image generation toward desired attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative prompts or conditions used to guide image generation away from certain attributes or themes, used for optimizing the output.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - The initial latent image from which sampling begins, setting the baseline for the progressive optimization process.
    - Comfy dtype: LATENT
    - Python dtype: dict
- start_at_step
    - The step at which the sampling process begins, allowing optimization to start from a specific point in the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The final step at which the sampling process ends, defining the scope of progressive optimization.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mode
    - Specifies the mode of noise application during the sampling process, affecting the texture and detail of the generated images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- return_with_leftover_noise
    - Indicates whether to include remaining noise in the returned samples, potentially increasing the diversity and realism of the images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- interval
    - The interval at which intermediate samples are captured and returned, allowing observation of the progression throughout the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- omit_start_latent
    - If set to true, omits the initial latent image from the results, focusing the output on the progress made during the sampling process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_progress_latent_opt
    - Optional previous progress latent images that can be concatenated with the current sampling results, enabling continuous progression across multiple sampling sessions.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- latent
    - The final latent image after the sampling process is complete, representing the ultimate result of progressive optimization.
    - Comfy dtype: LATENT
    - Python dtype: dict
- progress_latent
    - A collection of latent images captured at specified intervals during the sampling process, showcasing the progression and evolution of image generation.
    - Comfy dtype: LATENT
    - Python dtype: dict


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class KSamplerAdvanced_progress(a1111_compat.KSamplerAdvanced_inspire):
    @classmethod
    def INPUT_TYPES(s):
        return {"required":
                    {"model": ("MODEL",),
                     "add_noise": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                     "noise_seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                     "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0, "step":0.5, "round": 0.01}),
                     "sampler_name": (comfy.samplers.KSampler.SAMPLERS, ),
                     "scheduler": (common.SCHEDULERS, ),
                     "positive": ("CONDITIONING", ),
                     "negative": ("CONDITIONING", ),
                     "latent_image": ("LATENT", ),
                     "start_at_step": ("INT", {"default": 0, "min": 0, "max": 10000}),
                     "end_at_step": ("INT", {"default": 10000, "min": 0, "max": 10000}),
                     "noise_mode": (["GPU(=A1111)", "CPU"],),
                     "return_with_leftover_noise": ("BOOLEAN", {"default": False, "label_on": "enable", "label_off": "disable"}),
                     "interval": ("INT", {"default": 1, "min": 1, "max": 10000}),
                     "omit_start_latent": ("BOOLEAN", {"default": False, "label_on": "True", "label_off": "False"}),
                     },
                "optional": {"prev_progress_latent_opt": ("LATENT",), }
                }

    FUNCTION = "sample"

    CATEGORY = "InspirePack/analysis"

    RETURN_TYPES = ("LATENT", "LATENT")
    RETURN_NAMES = ("latent", "progress_latent")

    def sample(self, model, add_noise, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, start_at_step, end_at_step, noise_mode, return_with_leftover_noise, interval, omit_start_latent, prev_progress_latent_opt=None):
        sampler = a1111_compat.KSamplerAdvanced_inspire()

        if omit_start_latent:
            result = []
        else:
            result = [latent_image['samples']]

        for i in range(start_at_step, min(end_at_step+1, steps+1)):
            cur_add_noise = i == start_at_step and add_noise
            cur_return_with_leftover_noise = i != steps or return_with_leftover_noise
            latent_image = sampler.sample(model, cur_add_noise, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, i, i+1, noise_mode, cur_return_with_leftover_noise)[0]
            if i % interval == 0 or i == steps:
                result.append(latent_image['samples'])

        if len(result) > 0:
            result = torch.cat(result)
            result = {'samples': result}
        else:
            result = latent_image

        if prev_progress_latent_opt is not None:
            result['samples'] = torch.cat((prev_progress_latent_opt['samples'], result['samples']), dim=0)

        return (latent_image, result)

```

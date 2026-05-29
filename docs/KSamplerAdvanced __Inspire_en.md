[Thinking] I will follow the four‑round translation process as required, strictly adhering to the format in the Example. First, refer to the Example, then translate, proofread, and finalize. The final output will contain the # Documentation, # Input types, and # Output types sections, presented in a Markdown code block, with no extra content.

【Translation】


# Documentation
- Class name: KSamplerAdvanced __Inspire
- Category: InspirePack/a1111_compat
- Output node: False

This node enhances the sampling process in generative models, tailored specifically for the Inspire package. It incorporates advanced features and optimizations on top of standard sampling techniques to improve sample quality and efficiency.

# Input types
## Required
- model
    - Specify the generative model used for sampling, serving as the core component around which the sampling operation revolves.
    - Comfy dtype: MODEL
    - Python dtype: str
- add_noise
    - Decide whether to add noise during sampling to increase the diversity and quality of generated samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - Set the seed for noise generation to ensure reproducibility and consistency of generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Define the number of steps to execute during sampling, affecting output detail and quality.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Specify the unconditional guidance scale, influencing the direction and strength of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Determine the specific sampler algorithm to use, allowing customization of sampling techniques.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Choose a scheduler to control the sampling process, further customizing generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Provide positive conditioning to guide sampling toward desired attributes or content.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Provide negative conditioning to steer sampling away from undesired attributes or content.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Input a latent image representation for use or modification during sampling.
    - Comfy dtype: LATENT
    - Python dtype: str
- start_at_step
    - Specify the starting step of the sampling process, allowing mid‑process intervention or adjustment.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - Define the ending step of the sampling process, setting the generation boundary.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mode
    - Determine the compute platform (GPU or CPU) for noise generation, affecting performance and efficiency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- return_with_leftover_noise
    - Indicate whether to return samples with residual noise, providing extra control over the final appearance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- batch_seed_mode
    - Specify the seed generation mode between batches, influencing sample diversity.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- variation_seed
    - Set a seed for introducing variation, enabling controllable diversity in outputs.
    - Comfy dtype: INT
    - Python dtype: int
- variation_strength
    - Decide the intensity of introduced variation, allowing fine‑tuning of output diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- noise_opt
    - Provide custom noise options for further control of the sampling process.
    - Comfy dtype: NOISE
    - Python dtype: str

# Output types
- latent
    - Output the latent representation of generated samples, encapsulating the results of the advanced sampling process.
    - Comfy dtype: LATENT
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class KSamplerAdvanced_inspire:
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
                     "batch_seed_mode": (["incremental", "comfy", "variation str inc:0.01", "variation str inc:0.05"],),
                     "variation_seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "variation_strength": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                     },
                "optional":
                    {
                        "noise_opt": ("NOISE",),
                    }
                }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "sample"

    CATEGORY = "InspirePack/a1111_compat"

    def sample(self, model, add_noise, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, start_at_step, end_at_step, noise_mode, return_with_leftover_noise, denoise=1.0, batch_seed_mode="comfy", variation_seed=None, variation_strength=None, noise_opt=None):
        force_full_denoise = True

        if return_with_leftover_noise:
            force_full_denoise = False

        disable_noise = False

        if not add_noise:
            disable_noise = True

        return common_ksampler(model, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image,
                               denoise=denoise, disable_noise=disable_noise, start_step=start_at_step, last_step=end_at_step,
                               force_full_denoise=force_full_denoise, noise_mode=noise_mode, incremental_seed_mode=batch_seed_mode,
                               variation_seed=variation_seed, variation_strength=variation_strength, noise=noise_opt)

```


# Documentation
- Class name: KSampler __Inspire
- Category: InspirePack/a1111_compat
- Output node: False

KSampler __Inspire node aims to facilitate creative content generation by sampling from a model, inspired by specific inputs. It abstracts sampling algorithm complexity, offering an interface to generate novel outputs based on positive and negative prompts, style guidance, and other parameters.

# Input types
## Required
- model
    - Specify the model to sample from, serving as the basis for generated output.
    - Comfy dtype: MODEL
    - Python dtype: str
- seed
    - Set the initial seed for random number generation to ensure reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Determine the number of steps executed during sampling, affecting detail and quality of the generated output.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configure the unconditional guidance scale, influencing the strength of conditioning during generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Choose the specific sampling algorithm to use, adjusting the generation process for desired characteristics.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Select a scheduler to control the sampling process, further customizing the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Specify positive conditions to steer generation toward desired attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Define negative conditions to steer output away from unwanted attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Provide an initial latent image to be modified or enhanced through the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: str
- denoise
    - Adjust the denoising level applied during generation, affecting clarity and coherence of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - Choose the noise application mode, influencing texture and detail of the generated output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_seed_mode
    - Determine the pattern for seed generation and application during batch processing, affecting output variability.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- variation_seed
    - Specify a seed used to introduce variation, adding extra randomness to the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- variation_strength
    - Control the intensity of variation introduced by the variation seed, influencing output diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - Produce a latent representation of the generated content, encapsulating the desired attributes influenced by input conditions.
    - Comfy dtype: LATENT
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class KSampler_inspire:
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
                     "batch_seed_mode": (["incremental", "comfy", "variation str inc:0.01", "variation str inc:0.05"],),
                     "variation_seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "variation_strength": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                     }
                }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "sample"

    CATEGORY = "InspirePack/a1111_compat"

    def sample(self, model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise, noise_mode, batch_seed_mode="comfy", variation_seed=None, variation_strength=None):
        return common_ksampler(model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise, noise_mode, incremental_seed_mode=batch_seed_mode, variation_seed=variation_seed, variation_strength=variation_strength)

```

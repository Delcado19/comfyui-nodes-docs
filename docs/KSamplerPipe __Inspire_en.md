
# Documentation
- Class name: KSamplerPipe __Inspire
- Category: InspirePack/a1111_compat
- Output node: False

The KSamplerPipe node aims to facilitate the generation of inspired content through a specialized sampling process. It integrates advanced sampling techniques to produce innovative and novel outputs, leveraging the capabilities of the Inspire Pack to enhance the creative process.

# Input types
## Required
- basic_pipe
    - Represents the basic components required for the sampling process, including the model and configuration needed to generate outputs.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: tuple
- seed
    - Specifies the seed of the sampling process, ensuring reproducibility and control over the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Determines the number of steps in the sampling process, affecting the depth and detail of the generation.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configures the conditioning factor, influencing the creativity and coherence of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Selects the specific sampler to use, customizing the sampling process to achieve the desired effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Selects the scheduler that controls the sampling process, optimizing the generation workflow.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- latent_image
    - Provides the initial latent image as the starting point for the sampling process, enabling more targeted and specific content generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- denoise
    - Adjusts the denoising level applied to the output, balancing clarity and creative distortion.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - Specifies the noise application mode, affecting the texture and overall appearance of the generated content.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_seed_mode
    - Defines the seed mode for batch processing, ensuring consistency and variability in the generated outputs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- variation_seed
    - An optional seed for introducing variation, enhancing the diversity of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- variation_strength
    - Determines the intensity of the variation introduced, allowing changes from subtle to significant in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent representation of the generated content, encapsulating the creative essence and potential for further processing.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The variational autoencoder used in the process, crucial for the transformation and optimization of the generated content.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class KSampler_inspire_pipe:
    @classmethod
    def INPUT_TYPES(s):
        return {"required":
                    {"basic_pipe": ("BASIC_PIPE",),
                     "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                     "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                     "sampler_name": (comfy.samplers.KSampler.SAMPLERS, ),
                     "scheduler": (common.SCHEDULERS, ),
                     "latent_image": ("LATENT", ),
                     "denoise": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                     "noise_mode": (["GPU(=A1111)", "CPU"],),
                     "batch_seed_mode": (["incremental", "comfy", "variation str inc:0.01", "variation str inc:0.05"],),
                     "variation_seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "variation_strength": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                     }
                }

    RETURN_TYPES = ("LATENT", "VAE")
    FUNCTION = "sample"

    CATEGORY = "InspirePack/a1111_compat"

    def sample(self, basic_pipe, seed, steps, cfg, sampler_name, scheduler, latent_image, denoise, noise_mode, batch_seed_mode="comfy", variation_seed=None, variation_strength=None):
        model, clip, vae, positive, negative = basic_pipe
        latent = common_ksampler(model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise, noise_mode, incremental_seed_mode=batch_seed_mode, variation_seed=variation_seed, variation_strength=variation_strength)[0]
        return (latent, vae)

```


# Documentation
- Class name: `KSampler SDXL (Eff.)`
- Category: `Efficiency Nodes/Sampling`
- Output node: `True`
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

KSampler SDXL (Eff.) node is an efficient sampling tool designed specifically for Stable Diffusion XL models. It extends the standard and advanced KSampler nodes by adding sampling strategies tailored to SDXL models. These strategies handle larger model scales while optimizing performance without sacrificing sample quality. The node is ideal for SDXL's unique needs, such as larger model size and more complex sampling requirements.

# Input types
## Required
- sdxl_tuple
- This is the collection of model parameters and configurations for Stable Diffusion XL, serving as the core input to the sampling process. It is crucial for defining the behavior and performance of the sampling operation.
    - Comfy dtype: SDXL_TUPLE
    - Python dtype: tuple
- noise_seed
- Seed value used to initialize the noise generation process. It ensures reproducibility and consistency of the model's generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- steps
- Number of steps to execute during sampling. This directly affects the detail and quality of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- Conditioning factor that adjusts the influence of the text prompt on the generated image. It allows finer control over the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
- Identifier for the specific sampler configuration to use. This enables customization and optimization of the sampling process for different use cases.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
- Scheduler strategy that determines the progression of the sampling process, influencing image generation flow and quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- latent_image
- Initial latent image input that serves as the starting point of the sampling process. This input can be modified or refined in subsequent steps.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- start_at_step
- Definition of the starting step of the sampling process. This allows continuation or refinement of previously generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- refine_at_step
- Steps at which refinement operations are applied to enhance detail and quality of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- preview_method
- Method used to generate preview samples during sampling. This helps evaluate and adjust parameters.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vae_decode
- Flag indicating whether to use a VAE decoder to convert latent representations back to image space. This affects the final output quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

## Optional
- optional_vae
- Optional VAE model that can be used for additional image refinement or processing during sampling.
    - Comfy dtype: VAE
    - Python dtype: tuple
- script
- Optional script that can be executed as part of the sampling process, allowing custom operations or modifications.
    - Comfy dtype: SCRIPT
    - Python dtype: str

# Output types
- SDXL_TUPLE
- Output tuple specific to the Stable Diffusion XL model, encapsulating the model state after sampling.
    - Comfy dtype: SDXL_TUPLE
    - Python dtype: tuple
- LATENT
- Latent representation of the image generated during sampling.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- VAE
- VAE model used in the sampling process (if applicable).
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- IMAGE
- Final image output generated from the sampling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [SaveImage](../../Comfy/Nodes/SaveImage.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [Image Filter Adjustments](../../was-node-suite-comfyui/Nodes/Image Filter Adjustments.md)
    - [IterativeLatentUpscale](../../ComfyUI-Impact-Pack/Nodes/IterativeLatentUpscale.md)



## Source code
```python
class TSC_KSamplerSDXL(TSC_KSampler):

    @classmethod
    def INPUT_TYPES(cls):
        return {"required":
                    {"sdxl_tuple": ("SDXL_TUPLE",),
                     "noise_seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                     "cfg": ("FLOAT", {"default": 7.0, "min": 0.0, "max": 100.0}),
                     "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                     "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
                     "latent_image": ("LATENT",),
                     "start_at_step": ("INT", {"default": 0, "min": 0, "max": 10000}),
                     "refine_at_step": ("INT", {"default": -1, "min": -1, "max": 10000}),
                     "preview_method": (["auto", "latent2rgb", "taesd", "none"],),
                     "vae_decode": (["true", "true (tiled)", "false", "output only", "output only (tiled)"],),
                     },
                "optional": {"optional_vae": ("VAE",),
                             "script": ("SCRIPT",),},
                "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID",},
                }

    RETURN_TYPES = ("SDXL_TUPLE", "LATENT", "VAE", "IMAGE",)
    RETURN_NAMES = ("SDXL_TUPLE", "LATENT", "VAE", "IMAGE",)
    OUTPUT_NODE = True
    FUNCTION = "sample_sdxl"
    CATEGORY = "Efficiency Nodes/Sampling"

    def sample_sdxl(self, sdxl_tuple, noise_seed, steps, cfg, sampler_name, scheduler, latent_image,
               start_at_step, refine_at_step, preview_method, vae_decode, prompt=None, extra_pnginfo=None,
               my_unique_id=None, optional_vae=(None,), refiner_extras=None, script=None):
        # sdxl_tuple sent through the 'model' channel
        negative = None
        return super().sample(sdxl_tuple, noise_seed, steps, cfg, sampler_name, scheduler,
               refiner_extras, negative, latent_image, preview_method, vae_decode, denoise=1.0,
               prompt=prompt, extra_pnginfo=extra_pnginfo, my_unique_id=my_unique_id, optional_vae=optional_vae,
               script=script, add_noise=None, start_at_step=start_at_step, end_at_step=refine_at_step,
               return_with_leftover_noise=None,sampler_type="sdxl")

```

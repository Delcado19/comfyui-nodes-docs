
# Documentation
- Class name: Fooocus_KSamplerAdvanced
- Category: Art Venture/Sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Fooocus_KSamplerAdvanced node enhances the sampling process in art generation by introducing a sharpness parameter, enabling more precise control over the texture and details of generated works. Building on advanced sampling capabilities, this node integrates sharpness adjustment directly into the sampling workflow to optimize visual output.

# Input types
## Required
- model
    - Specifies the model used for the sampling process, serving as the core component for generating artwork.
    - Comfy dtype: MODEL
    - Python dtype: str
- add_noise
    - Determines whether to add noise during the sampling process, affecting the texture and details of the generated artwork.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- noise_seed
    - Sets the seed for noise generation, ensuring reproducibility of the artwork's texture and details.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Defines the number of steps in the sampling process, influencing the fineness and detail of the generated artwork.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Controls the configuration of the sampling process, affecting the balance between model guidance and generated details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Selects a specific sampler, influencing how the model traverses the latent space.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Selects the scheduler for the sampling process, determining the progression of steps.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Provides positive conditions to guide sampling toward desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Provides negative conditions to guide sampling away from undesired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Inputs the initial latent image as the starting point for the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: str
- start_at_step
    - Specifies the starting step of the sampling process, allowing mid-process intervention.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - Defines the ending step of the sampling process, determining its completion point.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - Controls whether the output contains residual noise, affecting the final texture.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
## Optional
- sharpness
    - The sharpness parameter allows users to adjust the level of detail and texture in generated artwork, providing a method to fine-tune visual output for more precise artistic control.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - Outputs the latent representation of the sampled artwork, reflecting the combined effect of all input parameters.
    - Comfy dtype: LATENT
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class KSamplerAdvancedWithSharpness(KSamplerAdvanced):
    @classmethod
    def INPUT_TYPES(cls):
        inputs = KSamplerAdvanced.INPUT_TYPES()
        inputs["optional"] = {
            "sharpness": (
                "FLOAT",
                {"default": 2.0, "min": 0.0, "max": 100.0, "step": 0.01},
            )
        }

        return inputs

    CATEGORY = "Art Venture/Sampling"

    def sample(self, *args, sharpness=2.0, **kwargs):
        patch.sharpness = sharpness
        patch_all()
        results = super().sample(*args, **kwargs)
        unpatch_all()
        return results

```

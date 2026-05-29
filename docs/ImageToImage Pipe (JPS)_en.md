
# Documentation
- Class name: ImageToImage Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The ImageToImage Pipe node handles image-to-image settings, extracts and returns various parameters related to the image conversion process. It abstracts the complexity of configuring image-to-image operations, providing a simplified interface for specifying and retrieving conversion parameters.

# Input types
## Required
- img2img_settings
    - Specify settings for image-to-image conversion, including strength and configurations for inpainting, upsampling, and other related processes. This is essential for defining how the image is processed and transformed.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[float, float, int, float, float, comfy.samplers.KSampler.SAMPLERS, comfy.samplers.KSampler.SCHEDULERS]

# Output types
- img2img_strength
    - Strength of the image-to-image conversion.
    - Comfy dtype: FLOAT
    - Python dtype: float
- inpaint_strength
    - Strength of inpainting during conversion.
    - Comfy dtype: FLOAT
    - Python dtype: float
- inpaint_grow_mask
    - Amount by which the inpainting mask should be expanded.
    - Comfy dtype: INT
    - Python dtype: int
- unsampler_strength
    - Strength of the upsampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsampler_cfg
    - Configuration of the upsampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsampler_sampler
    - Sampler used during upsampling.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: comfy.samplers.KSampler.SAMPLERS
- unsampler_scheduler
    - Scheduler used for upsampling.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: comfy.samplers.KSampler.SCHEDULERS


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageToImage_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "img2img_settings": ("BASIC_PIPE",)
            },
        }
    RETURN_TYPES = ("FLOAT", "FLOAT", "INT", "FLOAT", "FLOAT", comfy.samplers.KSampler.SAMPLERS, comfy.samplers.KSampler.SCHEDULERS,)
    RETURN_NAMES = ("img2img_strength", "inpaint_strength", "inpaint_grow_mask", "unsampler_strength", "unsampler_cfg", "unsampler_sampler", "unsampler_scheduler",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Pipes"

    def give_values(self,img2img_settings):
        
        img2img_strength, inpaint_strength, inpaint_grow_mask, unsampler_strength, unsampler_cfg, unsampler_sampler, unsampler_scheduler = img2img_settings

        return(img2img_strength, inpaint_strength, inpaint_grow_mask, unsampler_strength, unsampler_cfg, unsampler_sampler, unsampler_scheduler,)

```

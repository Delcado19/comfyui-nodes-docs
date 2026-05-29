
# Documentation
- Class name: SDXL Basic Settings Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

This node handles the basic settings for SDXL, converting structured setting inputs into specific output values required during image generation. It encapsulates parsing and converting settings related to resolution, sampling, and image optimization parameters into a format usable by downstream processes or components.

# Input types
## Required
- sdxl_basic_settings
    - Represents the basic settings for SDXL, including resolution, sampling, and image optimization parameters. These are essential for determining the output values that configure the image generation process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, int, str, str, int, int, float, float, float, float, int, int, str, int]

# Output types
- image_res
    - Resolution of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Width of the generated image (in pixels).
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the generated image (in pixels).
    - Comfy dtype: INT
    - Python dtype: int
- sampler_name
    - Sampler name used for image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Scheduler used with the sampler for image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps_total
    - Total number of steps in the image generation process.
    - Comfy dtype: INT
    - Python dtype: int
- step_split
    - Step division value used during image generation.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - CFG scale used during image generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_rescale
    - CFG rescale value to adjust CFG's influence on the process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_refiner
    - CFG optimizer scale to optimize CFG's effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ascore_refiner
    - ascore optimizer value to optimize ascore's effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- res_factor
    - Resolution factor affecting overall image resolution.
    - Comfy dtype: INT
    - Python dtype: int
- clip_skip
    - Number of times the CLIP model is skipped during generation.
    - Comfy dtype: INT
    - Python dtype: int
- filename
    - Filename for the generated image.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SDXL_Basic_Settings_Pipe:
    resolution = ["square - 1024x1024 (1:1)","landscape - 1152x896 (4:3)","landscape - 1216x832 (3:2)","landscape - 1344x768 (16:9)","landscape - 1536x640 (21:9)", "portrait - 896x1152 (3:4)","portrait - 832x1216 (2:3)","portrait - 768x1344 (9:16)","portrait - 640x1536 (9:21)"]

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "sdxl_basic_settings": ("BASIC_PIPE",)
            },
        }
    RETURN_TYPES = ("INT","INT","INT",comfy.samplers.KSampler.SAMPLERS,comfy.samplers.KSampler.SCHEDULERS,"INT","INT","FLOAT","FLOAT","FLOAT","FLOAT","INT","INT","STRING",)
    RETURN_NAMES = ("image_res","width","height","sampler_name","scheduler","steps_total","step_split","cfg","cfg_rescale","cfg_refiner","ascore_refiner","res_factor","clip_skip","filename",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Pipes"

    def give_values(self,sdxl_basic_settings):
        
        width, height, sampler_name, scheduler, steps_total, step_split, cfg, cfg_rescale, cfg_refiner, ascore_refiner, res_factor, clip_skip, filename,image_res = sdxl_basic_settings

        return(int(image_res), int(width), int(height), sampler_name, scheduler, int(steps_total), int(step_split), float(cfg), float(cfg_rescale), float(cfg_refiner), float(ascore_refiner), int (res_factor), int(clip_skip), str(filename),)

```

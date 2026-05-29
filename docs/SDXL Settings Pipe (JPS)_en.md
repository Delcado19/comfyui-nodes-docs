
# Documentation
- Class name: SDXL Settings Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The SDXL Settings Pipe node is designed to process and return a comprehensive set of image generation settings, including resolution, sampling, scheduling, and other configuration parameters. It abstracts the complex configuration of all aspects of image generation into a simple interface, allowing users to easily specify and retrieve detailed settings for their image generation tasks.

# Input types
## Required
- sdxl_settings
    - Serves as a comprehensive input, encapsulating all necessary settings required for the SDXL image generation process. It is critical for determining the configuration and final behavior of image generation.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, int, int, int, str, str, int, float, float, int, str, int]

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
- res_factor
    - The factor that affects the resolution of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_name
    - The name of the sampling method used for image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduling method used during the image generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - The number of steps to take during the image generation process.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter that affects the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_rescale
    - The parameter used to rescale the configuration during the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_skip
    - Represents the number of clipping steps to skip during the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- filename
    - The filename where the generated image will be saved.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SDXL_Settings_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "sdxl_settings": ("BASIC_PIPE",)
            },
        }
    RETURN_TYPES = ("INT","INT","INT","INT",comfy.samplers.KSampler.SAMPLERS,comfy.samplers.KSampler.SCHEDULERS,"INT","FLOAT","FLOAT","INT","STRING",)
    RETURN_NAMES = ("image_res","width","height","res_factor","sampler_name","scheduler","steps","cfg","cfg_rescale","clip_skip","filename",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Pipes"

    def give_values(self,sdxl_settings):
        
        width, height, res_factor, sampler_name, scheduler, steps, cfg, cfg_rescale, clip_skip, filename,image_res = sdxl_settings

        return(int(image_res), int(width), int(height), int (res_factor), sampler_name, scheduler, int(steps), float(cfg), float(cfg_rescale), int(clip_skip), str(filename),)

```

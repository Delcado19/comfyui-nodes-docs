
# Documentation
- Class name: SDXL Basic Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SDXL Basic Settings (JPS) node configures the basic settings for SDXL image generation, including resolution, sampler, scheduler, and various parameters related to image optimization and generation steps. It simplifies the setup process, providing a concise interface for users to adjust core settings that affect image quality and characteristics.

# Input types
## Required
- resolution
    - Select the desired image generation resolution from a predefined list. This setting directly affects the output image size.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_name
    - Determine the sampler used for image generation, affecting the sampling process and image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specify the scheduler that manages the sampling process, influencing how generation steps are executed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps_total
    - Total number of steps used during image generation, affecting output detail and quality.
    - Comfy dtype: INT
    - Python dtype: int
- base_percentage
    - Define the percentage of the image generated in the initial steps, influencing the evolution of image detail.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Control configuration parameters that govern the generation process, affecting image coherence and quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_rescale
    - Parameter for rescaling configuration values, allowing fine‑tuning of the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_refiner
    - Adjust configuration for optimizing the generation process, improving final image quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ascore_refiner
    - Optimize ascore to adjust the quality of the generated image, affecting its aesthetic outcome.
    - Comfy dtype: FLOAT
    - Python dtype: float
- res_factor
    - Factor used to adjust the resolution of the generated image, influencing overall image quality.
    - Comfy dtype: INT
    - Python dtype: int
- clip_skip
    - Determine the number of cropping steps to skip during generation, affecting final image output.
    - Comfy dtype: INT
    - Python dtype: int
- filename
    - Filename for the generated image, used for saving and identifying the output file.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- sdxl_basic_settings
    - Encapsulates the basic configuration settings for SDXL image generation, including resolution, sampler, scheduler, and various image optimization and generation parameters.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SDXL_Basic_Settings:
    resolution = ["Use Image Resolution", "square - 1024x1024 (1:1)","landscape - 1152x896 (4:3)","landscape - 1216x832 (3:2)","landscape - 1344x768 (16:9)","landscape - 1536x640 (21:9)", "portrait - 896x1152 (3:4)","portrait - 832x1216 (2:3)","portrait - 768x1344 (9:16)","portrait - 640x1536 (9:21)"]

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "resolution": (s.resolution,),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
                "steps_total": ("INT", {"default": 60, "min": 20, "max": 250, "step": 5}),
                "base_percentage": ("INT", {"default": 80, "min": 5, "max": 100, "step": 5}),
                "cfg": ("FLOAT", {"default": 6.5, "min": 1, "max": 20, "step": 0.1}),
                "cfg_rescale": ("FLOAT", {"default": 0.00, "min": 0.00, "max": 1.00, "step": 0.05}),
                "cfg_refiner": ("FLOAT", {"default": 6.5, "min": 0, "max": 20, "step": 0.1}),
                "ascore_refiner": ("FLOAT", {"default": 6, "min": 1, "max": 10, "step": 0.5}),
                "res_factor": ("INT", {"default": 4, "min": 1, "max": 8, "step": 1}),
                "clip_skip": ("INT", {"default": -2, "min": -24, "max": -1}),
                "filename": ("STRING", {"default": "JPS"}),
        }}
    RETURN_TYPES = ("BASIC_PIPE",)
    RETURN_NAMES = ("sdxl_basic_settings",)
    FUNCTION = "get_values"

    CATEGORY="JPS Nodes/Settings"

    def get_values(self,resolution,sampler_name,scheduler,steps_total,base_percentage,cfg,cfg_rescale,cfg_refiner,ascore_refiner,res_factor,clip_skip,filename):
        width = 1024
        height = 1024
        width = int(width)
        height = int(height)
        steps_total = int(steps_total)
        step_split = steps_total * base_percentage / 100
        cfg = float(cfg)
        cfg_rescale = float(cfg_rescale)
        cfg_refiner = float (cfg_refiner)
        ascore_refiner = float (ascore_refiner)
        res_factor = int (res_factor)
        base_percentage = int (base_percentage)
        image_res = 1

        if(resolution == "Use Image Resolution"):
            image_res = 2
        if(resolution == "square - 1024x1024 (1:1)"):
            width = 1024
            height = 1024
        if(resolution == "landscape - 1152x896 (4:3)"):
            width = 1152
            height = 896
        if(resolution == "landscape - 1216x832 (3:2)"):
            width = 1216
            height = 832
        if(resolution == "landscape - 1344x768 (16:9)"):
            width = 1344
            height = 768
        if(resolution == "landscape - 1536x640 (21:9)"):
            width = 1536
            height = 640
        if(resolution == "portrait - 896x1152 (3:4)"):
            width = 896
            height = 1152
        if(resolution == "portrait - 832x1216 (2:3)"):
            width = 832
            height = 1216
        if(resolution == "portrait - 768x1344 (9:16)"):
            width = 768
            height = 1344
        if(resolution == "portrait - 640x1536 (9:21)"):
            width = 640
            height = 1536

        if(cfg_refiner == 0):
            cfg_refiner = cfg
        
        sdxl_basic_settings = width, height, sampler_name, scheduler, steps_total, step_split, cfg, cfg_rescale, cfg_refiner, ascore_refiner, res_factor, clip_skip, filename,image_res

        return(sdxl_basic_settings,)

```


# Documentation
- Class name: ImageToImage Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

The ImageToImage Settings node is designed to configure and apply specific settings for image-to-image conversion tasks within the JPS Nodes framework. It focuses on adjusting parameters that affect how input images are processed and converted into output images to meet various custom image processing needs.

# Input types
## Required
- img2img_strength
    - Specifies the strength of the image-to-image conversion, affecting the degree of applied changes.
    - Comfy dtype: INT
    - Python dtype: int
- inpaint_strength
    - Determines the strength of the inpainting effect, affecting how missing or unwanted parts of the image are filled.
    - Comfy dtype: INT
    - Python dtype: int
- inpaint_grow_mask
    - Sets the extent of inpainting mask expansion, affecting the area of the image that is repaired.
    - Comfy dtype: INT
    - Python dtype: int
- unsampler_strength
    - Defines the strength of the anti-aliasing process, affecting the degree of detail enhancement in the output image.
    - Comfy dtype: INT
    - Python dtype: int
- unsampler_cfg
    - Specifies the anti-aliasing configuration, affecting the algorithm's behavior and output quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsampler_sampler
    - Selects the sampling method used by the anti-aliasing, affecting the texture and quality of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- unsampler_scheduler
    - Selects the scheduling algorithm for the anti-aliasing process, affecting the progress and quality of the image conversion.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- img2img_settings
    - Outputs the configuration settings for image-to-image conversion, encapsulating all adjustments applied to the input image.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[float, float, int, float, float, str, str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageToImage_Settings:
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "img2img_strength": ("INT", {"default": 50, "min": 0, "max": 100, "step": 1}),
                "inpaint_strength": ("INT", {"default": 100, "min": 2, "max": 100, "step": 1}),
                "inpaint_grow_mask": ("INT", {"default": 20, "min": 0, "max": 200, "step": 2}),
                "unsampler_strength": ("INT", {"default": 30, "min": 0, "max": 100, "step": 1}),
                "unsampler_cfg": ("FLOAT", {"default": 1, "min": 1, "max": 10, "step": 0.1}),
                "unsampler_sampler": (comfy.samplers.KSampler.SAMPLERS,),
                "unsampler_scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
            }   
        }
    RETURN_TYPES = ("BASIC_PIPE",) 
    RETURN_NAMES = ("img2img_settings",)
    FUNCTION = "get_img2img"

    CATEGORY="JPS Nodes/Settings"

    def get_img2img(self, img2img_strength, inpaint_strength, inpaint_grow_mask, unsampler_strength, unsampler_cfg, unsampler_sampler, unsampler_scheduler,):

        img2img_strength = (img2img_strength + 0.001) / 100

        inpaint_strength = (100 - inpaint_strength + 0.001) / 100

        unsampler_strength = (unsampler_strength + 0.001) / 100
        
        img2img_settings = img2img_strength, inpaint_strength, inpaint_grow_mask, unsampler_strength, unsampler_cfg, unsampler_sampler, unsampler_scheduler

        return(img2img_settings,)

```

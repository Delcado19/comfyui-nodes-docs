
# Documentation
- Class name: RegionalPromptColorMask __Inspire
- Category: InspirePack/Regional
- Output node: False

The RegionalPromptColorMask node is designed to generate regional prompts based on color masks. It applies color-based segmentation to images, creating distinct regions that can be prompted individually for creative or targeted image generation tasks. This node facilitates customization of the image generation process by allowing users to influence specific regions of the image through color-coded masks.

# Input types
## Required
- basic_pipe
    - The base pipeline for image processing or generation, laying the foundation for subsequent regional prompt application.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: object
- color_mask
    - An image input serving as a mask, where specific colors indicate regions for applying different prompts.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_color
    - A string specifying the color in the color_mask used to define the region of interest.
    - Comfy dtype: STRING
    - Python dtype: str
- cfg
    - A floating-point value that adjusts the configuration strength, affecting the intensity of prompt application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Specifies the sampling method used during generation, affecting the diversity and quality of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Determines the scheduling algorithm that controls the generation process, influencing how prompts are applied over time.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- wildcard_prompt
    - A string input for dynamic, user-defined prompts that can be applied to specified regions, enhancing creative control.
    - Comfy dtype: STRING
    - Python dtype: str
- controlnet_in_pipe
    - A boolean value indicating whether to retain or override the control network in the pipeline, affecting the final image generation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sigma_factor
    - A floating-point value that adjusts the sigma factor, fine-tuning the application of prompts to regions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- regional_prompts
    - The generated regional prompt, tailored to the specified region of the input image.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: object
- mask
    - A mask generated from the specified color, used to delineate the region for prompt application.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RegionalPromptColorMask:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "basic_pipe": ("BASIC_PIPE",),
                "color_mask": ("IMAGE",),
                "mask_color": ("STRING", {"multiline": False, "default": "#FFFFFF"}),
                "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (common.SCHEDULERS,),
                "wildcard_prompt": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "wildcard prompt"}),
                "controlnet_in_pipe": ("BOOLEAN", {"default": False, "label_on": "Keep", "label_off": "Override"}),
                "sigma_factor": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
            },
        }

    RETURN_TYPES = ("REGIONAL_PROMPTS", "MASK")
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, basic_pipe, color_mask, mask_color, cfg, sampler_name, scheduler, wildcard_prompt, controlnet_in_pipe=False, sigma_factor=1.0):
        mask = color_to_mask(color_mask, mask_color)
        rp = RegionalPromptSimple().doit(basic_pipe, mask, cfg, sampler_name, scheduler, wildcard_prompt, controlnet_in_pipe, sigma_factor=sigma_factor)[0]
        return (rp, mask)

```

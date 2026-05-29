# Documentation
- Class name: RegionalPromptColorMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The RegionalPromptColorMask node aims to generate regional prompts and masks based on color input, then use these prompts and masks to refine details in specific areas of the image. This node enhances the image by applying regional masks, allowing targeted detail and clarity improvements within specified color regions.

# Input types
## Required
- basic_pipe
    - The basic_pipe parameter is crucial for the node as it carries the necessary components for image processing, including the model, clip, VAE, and conditioning information. It is the foundation of the regional refinement process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[model, clip, vae, positive, negative]
- color_mask
    - The color_mask input is a key element that provides visual context, which the node uses to identify color regions that need enhancement. It is used to generate a mask that processes these specific areas.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_color
    - The mask_color parameter is a string representing the RGB mask color value. It is critical because it determines which color areas in the image will be targeted for refinement.
    - Comfy dtype: STRING
    - Python dtype: str
- cfg
    - The cfg parameter is a float value used to adjust the node's configuration settings, affecting the strength and focus of regional refinement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name input specifies the sampling method to use, which is crucial for determining the strategy and efficiency of the regional sampling process.
    - Comfy dtype: SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the node's scheduling strategy, which is essential for managing the iterative process and achieving optimal results.
    - Comfy dtype: SCHEDULERS
    - Python dtype: str
## Optional
- wildcard_prompt
    - The wildcard_prompt is a dynamic text input that allows variable elements to be incorporated into the prompt, enhancing the flexibility and adaptability of the regional refinement process.
    - Comfy dtype: STRING
    - Python dtype: str
- controlnet_in_pipe
    - The controlnet_in_pipe parameter is a boolean flag used to determine whether to keep or override the existing control settings in basic_pipe, affecting overall control over regional refinement.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sigma_factor
    - The sigma_factor is a float value used to adjust the denoising level during the regional sampling process, affecting the quality and detail of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- REGIONAL_PROMPTS
    - The output REGIONAL_PROMPTS is a set of prompts targeting specified color areas, designed to refine and enhance the image according to input parameters.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: Dict[str, Any]
- MASK
    - The MASK output is a binary mask generated from the input color_mask and mask_color, used to isolate and target specific areas in the image for processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class RegionalPromptColorMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'basic_pipe': ('BASIC_PIPE',), 'color_mask': ('IMAGE',), 'mask_color': ('STRING', {'multiline': False, 'default': '#FFFFFF'}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'wildcard_prompt': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'placeholder': 'wildcard prompt'}), 'controlnet_in_pipe': ('BOOLEAN', {'default': False, 'label_on': 'Keep', 'label_off': 'Override'}), 'sigma_factor': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('REGIONAL_PROMPTS', 'MASK')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Regional'

    def doit(self, basic_pipe, color_mask, mask_color, cfg, sampler_name, scheduler, wildcard_prompt, controlnet_in_pipe=False, sigma_factor=1.0):
        mask = color_to_mask(color_mask, mask_color)
        rp = RegionalPromptSimple().doit(basic_pipe, mask, cfg, sampler_name, scheduler, wildcard_prompt, controlnet_in_pipe, sigma_factor=sigma_factor)[0]
        return (rp, mask)
```
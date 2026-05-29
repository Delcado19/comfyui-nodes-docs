# Documentation
- Class name: layerDiffusionSettingsADDTL
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This type of node is responsible for setting additional text prompts for the layer diffusion model to optimize the input conditions for the generation process.

# Input types
## Required
- pipe
    - The 'pipe' parameter is the foundation for node operations, providing important context and data required for the diffusion process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- foreground_prompt
    - This parameter allows users to input foreground prompts, which is crucial for guiding the model to generate content that aligns with the desired focus.
    - Comfy dtype: STRING
    - Python dtype: str
- background_prompt
    - By providing background prompts, users can establish context or set the scene for the model, ensuring the generated content aligns with the expected background.
    - Comfy dtype: STRING
    - Python dtype: str
- blended_prompt
    - The blend prompt parameter allows combining multiple prompts to create more nuanced and detailed outputs, thereby enhancing the richness of the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- optional_fg_cond
    - This optional parameter provides additional conditioning input for the foreground, offering flexibility to customize the model's generation according to user-specific requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- optional_bg_cond
    - Similarly, this optional parameter extends the conditioning capability for the background, allowing for more complex and contextual generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- optional_blended_cond
    - This parameter provides a method for blending multiple conditioning inputs, enabling more harmonious and comprehensive generation results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Output types
- pipe
    - The updated 'pipe' output contains new layer diffusion conditions, which is crucial for subsequent steps in the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
```
class layerDiffusionSettingsADDTL:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('PIPE_LINE',), 'foreground_prompt': ('STRING', {'default': '', 'placeholder': 'Foreground Additional Prompt', 'multiline': True}), 'background_prompt': ('STRING', {'default': '', 'placeholder': 'Background Additional Prompt', 'multiline': True}), 'blended_prompt': ('STRING', {'default': '', 'placeholder': 'Blended Additional Prompt', 'multiline': True})}, 'optional': {'optional_fg_cond': ('CONDITIONING',), 'optional_bg_cond': ('CONDITIONING',), 'optional_blended_cond': ('CONDITIONING',)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('pipe',)
    OUTPUT_NODE = True
    FUNCTION = 'settings'
    CATEGORY = 'EasyUse/PreSampling'

    def settings(self, pipe, foreground_prompt, background_prompt, blended_prompt, optional_fg_cond=None, optional_bg_cond=None, optional_blended_cond=None, prompt=None, extra_pnginfo=None, my_unique_id=None):
        (fg_cond, bg_cond, blended_cond) = (None, None, None)
        clip = pipe['clip']
        if optional_fg_cond is not None:
            fg_cond = optional_fg_cond
        elif foreground_prompt != '':
            (fg_cond,) = CLIPTextEncode().encode(clip, foreground_prompt)
        if optional_bg_cond is not None:
            bg_cond = optional_bg_cond
        elif background_prompt != '':
            (bg_cond,) = CLIPTextEncode().encode(clip, background_prompt)
        if optional_blended_cond is not None:
            blended_cond = optional_blended_cond
        elif blended_prompt != '':
            (blended_cond,) = CLIPTextEncode().encode(clip, blended_prompt)
        new_pipe = {**pipe, 'loader_settings': {**pipe['loader_settings'], 'layer_diffusion_cond': (fg_cond, bg_cond, blended_cond)}}
        del pipe
        return (new_pipe,)
```
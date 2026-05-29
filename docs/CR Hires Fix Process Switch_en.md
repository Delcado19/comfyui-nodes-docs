# Documentation
- Class name: CR_HiResFixProcessSwitch
- Category: Comfyroll/Utils/Process
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_HiResFixProcessSwitch node acts as a decision unit, selecting one of two upscaling processes based on the provided input. It aims to improve the efficiency and flexibility of image processing tasks by intelligently routing the process to either latent or image upscaling methods.

# Input types
## Required
- Input
    - The ‘Input’ parameter is crucial as it determines the selection path for the upscaling process. It decides whether the node will invoke latent or image upscaling methods, thus affecting subsequent processing and output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- latent_upscale
    - When the ‘Input’ parameter specifies the latent upscaling process, the ‘latent_upscale’ parameter is used. It is important because it carries the latent representation to be upscaled, affecting the quality and resolution of the final output.
    - Comfy dtype: LATENT
    - Python dtype: Any
- image_upscale
    - When the ‘Input’ parameter indicates the image upscaling process, the ‘image_upscale’ parameter is used. It is crucial because it contains the image data to be processed for upscaling, directly affecting the visual enhancement of the output.
    - Comfy dtype: LATENT
    - Python dtype: Any

# Output types
- LATENT
    - The ‘LATENT’ output represents the result of the selected upscaling process, whether from latent or image upscaling. It contains data that has undergone the specified enhancement and can be used or analyzed further.
    - Comfy dtype: LATENT
    - Python dtype: Any
- STRING
    - The ‘STRING’ output provides a URL link pointing to the node's help documentation. This is particularly useful for users seeking additional guidance or understanding of the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_HiResFixProcessSwitch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'Input': (['latent_upscale', 'image_upscale'],)}, 'optional': {'latent_upscale': ('LATENT',), 'image_upscale': ('LATENT',)}}
    RETURN_TYPES = ('LATENT', 'STRING')
    RETURN_NAMES = ('LATENT', 'STRING')
    FUNCTION = 'switch'
    CATEGORY = icons.get('Comfyroll/Utils/Process')

    def switch(self, Input, latent_upscale=None, image_upscale=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Process-Nodes#cr-hires-fix-process-switch'
        if Input == 'latent_upscale':
            return (latent_upscale, show_help)
        else:
            return (image_upscale, show_help)
```
# Documentation
- Class name: SeargeCustomAfterUpscaling
- Category: MAGIC_CUSTOM_STAGES
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class is designed to process image data after upscaling operations, using custom output to refine and enhance the visual quality of the image.

# Input types
## Required
- custom_output
    - The `custom_output` parameter is critical, as it serves as the primary input for the node's processing. It is expected to contain the output from a previous stage, which is then used to retrieve and refine the upscaled image.
    - Comfy dtype: SRG_STAGE_OUTPUT
    - Python dtype: Dict[str, Any]

# Output types
- image
    - The output of this node is an enhanced image, resulting from processing the `custom_output` parameter. This image is expected to have higher quality and be ready for further use or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeCustomAfterUpscaling:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'custom_output': ('SRG_STAGE_OUTPUT',)}, 'optional': {}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'output'
    CATEGORY = UI.CATEGORY_MAGIC_CUSTOM_STAGES

    def output(self, custom_output):
        if custom_output is None:
            return (None,)
        vae_decoded = retrieve_parameter(Names.S_UPSCALED, custom_output)
        image = retrieve_parameter(Names.F_UPSCALED_IMAGE, vae_decoded)
        return (image,)
```
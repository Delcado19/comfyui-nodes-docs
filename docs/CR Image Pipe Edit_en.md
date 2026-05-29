# Documentation
- Class name: CR_ImagePipeEdit
- Category: Comfyroll/Pipe/Image
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImagePipeEdit node is designed to facilitate editing and enhancing image data within a pipeline structure. It allows users to modify image attributes such as width, height, and upscale factor, ensuring the output image meets desired specifications. This node plays a key role in image processing workflows, enabling fine-tuning of visual content without compromising the integrity of the overall pipeline.

# Input types
## Required
- pipe
    - The 'pipe' parameter is required because it represents the image pipeline to be edited by the node. This is a critical input that determines the starting point for all subsequent image modifications and processing.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[str, int, int, float]
## Optional
- image
    - The optional 'image' parameter allows users to replace the current image in the pipeline. It is particularly useful when specific image content is needed for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: str
- width
    - The 'width' parameter is used to specify the new width of the image. It is an optional input that can be adjusted based on the requirements of different display or output mediums.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter determines the new height of the image. Similar to width, it is optional and can be set to achieve the desired aspect ratio or accommodate specific display requirements.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The 'upscale_factor' parameter is optional and defines the scaling factor for image upscaling. It is particularly important for enhancing image quality without compromising the original resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The 'pipe' output represents the modified image pipeline, including the updated image and its attributes such as width, height, and upscale factor.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[str, int, int, float]
- show_help
    - The 'show_help' output provides a URL linking to the documentation page for further assistance or information regarding node usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ImagePipeEdit:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',)}, 'optional': {'image': ('IMAGE',), 'width': ('INT', {'default': 512, 'min': 64, 'max': 2048, 'forceInput': True}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 2048, 'forceInput': True}), 'upscale_factor': ('FLOAT', {'default': 1, 'min': 1, 'max': 2000, 'forceInput': True})}}
    RETURN_TYPES = ('PIPE_LINE', 'STRING')
    RETURN_NAMES = ('pipe', 'show_help')
    FUNCTION = 'pipe_edit'
    CATEGORY = icons.get('Comfyroll/Pipe/Image')

    def pipe_edit(self, pipe, image=None, width=None, height=None, upscale_factor=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pipe-Nodes#cr-image-pipe-edit'
        (new_image, new_width, new_height, new_upscale_factor) = pipe
        if image is not None:
            new_image = image
        if width is not None:
            new_width = width
        if height is not None:
            new_height = height
        if upscale_factor is not None:
            new_upscale_factor = upscale_factor
        pipe = (new_image, new_width, new_height, new_upscale_factor)
        return (pipe, show_help)
```
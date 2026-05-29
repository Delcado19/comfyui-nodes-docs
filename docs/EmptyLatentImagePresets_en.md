# Documentation
- Class name: EmptyLatentImagePresets
- Category: KJNodes
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The EmptyLatentImagePresets node is designed to generate presets for latent images. It receives parameters such as dimensions, inversion status, and batch size to produce a latent image array along with corresponding width and height.

# Input types
## Required
- dimensions
    - The size parameter specifies the dimensions of the latent images to be generated. It is crucial as it determines the spatial resolution of the output images.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_size
    - The batch size parameter defines the number of latent images to generate in a single batch. It is important for optimizing computational resources when processing large amounts of data.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- invert
    - The inversion parameter allows users to swap the width and height dimensions of the latent images. This may be important in applications where image orientation matters.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- Latent
    - The latent parameter represents the generated latent image array. It is important as it forms the core output of the node's functionality.
    - Comfy dtype: ARRAY
    - Python dtype: torch.Tensor
- Width
    - The width parameter indicates the width of the generated latent images. This is important information for further image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int
- Height
    - The height parameter indicates the height of the generated latent images. Together with the width, it provides the complete dimensions of the latent images.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class EmptyLatentImagePresets:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'dimensions': (['512 x 512', '768 x 512', '960 x 512', '1024 x 512', '1536 x 640', '1344 x 768', '1216 x 832', '1152 x 896', '1024 x 1024'], {'default': '512 x 512'}), 'invert': ('BOOLEAN', {'default': False}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 4096})}}
    RETURN_TYPES = ('LATENT', 'INT', 'INT')
    RETURN_NAMES = ('Latent', 'Width', 'Height')
    FUNCTION = 'generate'
    CATEGORY = 'KJNodes'

    def generate(self, dimensions, invert, batch_size):
        from nodes import EmptyLatentImage
        result = [x.strip() for x in dimensions.split('x')]
        if invert:
            width = int(result[1].split(' ')[0])
            height = int(result[0])
        else:
            width = int(result[0])
            height = int(result[1].split(' ')[0])
        latent = EmptyLatentImage().generate(width, height, batch_size)[0]
        return (latent, int(width), int(height))
```
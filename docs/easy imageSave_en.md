# Documentation
- Class name: imageSaveSimple
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node simplifies the process of saving image data, providing a mechanism to directly save visual output. It supports optional image compression and preview generation, ensuring images are readily available for subsequent use or inspection.

# Input types
## Required
- images
    - The images parameter is required, as it carries the visual data to be saved. It influences the entire operation by determining what is stored and how the output appears.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- filename_prefix
    - filename_prefix is used to predefine the naming convention for saved images, which is essential for organizing and identifying files in the output directory.
    - Comfy dtype: STRING
    - Python dtype: str
- only_preview
    - The only_preview parameter controls whether a preview of the image is generated and saved. It influences the node's operation by determining the type of output generated.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- None
    - This node's output is not a data object, but the act of saving the image. The absence of a return value indicates the save process is complete.
    - Comfy dtype: None
    - Python dtype: None

# Usage tips
- Infra type: CPU

# Source code
```
class imageSaveSimple:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = 'output'
        self.prefix_append = ''
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'filename_prefix': ('STRING', {'default': 'ComfyUI'}), 'only_preview': ('BOOLEAN', {'default': False})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save'
    OUTPUT_NODE = True
    CATEGORY = 'EasyUse/Image'

    def save(self, images, filename_prefix='ComfyUI', only_preview=False, prompt=None, extra_pnginfo=None):
        if only_preview:
            PreviewImage().save_images(images, filename_prefix, prompt, extra_pnginfo)
            return ()
        else:
            return SaveImage().save_images(images, filename_prefix, prompt, extra_pnginfo)
```
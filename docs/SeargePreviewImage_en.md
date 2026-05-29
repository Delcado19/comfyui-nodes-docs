# Documentation
- Class name: SeargePreviewImage
- Category: UI
- Output node: True
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates image preview by saving images to a temporary directory, allowing users to visualize the output of image processing tasks without affecting the main workflow.

# Input types
## Required
- enabled
    - This parameter controls whether the image preview feature is activated, determining whether the node proceeds with the image saving process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- images
    - The input images to be previewed and saved; they are the primary objects the node operates on.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- prompt
    - Optional text descriptions associated with the images, which can provide context or additional information for the image preview.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - Additional metadata that can be embedded into the saved images, enhancing the information available for each image file.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, str]

# Output types
- images
    - The original images provided as input, now accompanied by the preview feature, allowing visualization in the UI.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class SeargePreviewImage(nodes.SaveImage):

    def __init__(self):
        super().__init__()
        self.output_dir = folder_paths.get_temp_directory()
        self.type = 'temp'
        self.prefix_append = '_temp_' + ''.join((random.choice('abcdefghijklmnopqrstupvxyz') for _ in range(5)))

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'enabled': ('BOOLEAN', {'default': True})}, 'optional': {'images': ('IMAGE',)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'preview_images'
    CATEGORY = UI.CATEGORY_UI

    def preview_images(self, enabled, images=None, prompt=None, extra_pnginfo=None):
        if images is None or not enabled:
            return {'result': (images,), 'ui': {'images': list()}}
        saved_images = nodes.SaveImage.save_images(self, images, 'srg_sdxl_preview', prompt, extra_pnginfo)
        saved_images['result'] = (images,)
        return saved_images
```
# Documentation
- Class name: ImageSender
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImageSender node is designed to facilitate the transmission of image data. It processes a collection of images, assigns a prefix to their filenames, and sends them to a specified server endpoint. This node plays a critical role in workflows by enabling seamless exchange of visual content between systems.

# Input types
## Required
- images
    - The 'image' parameter is essential for the ImageSender node, as it represents the collection of visual data to be processed and transmitted. Its proper selection and formatting directly impact the node's ability to perform its task.
    - Comfy dtype: IMAGE
    - Python dtype: List[bytes]
## Optional
- filename_prefix
    - The 'filename_prefix' parameter defines a common prefix for the filenames of the images being processed. This helps organize and identify images in a systematic manner within the receiving system.
    - Comfy dtype: STRING
    - Python dtype: str
- link_id
    - The 'link_id' parameter is an identifier used to associate images with a specific link or context in the receiving system. It facilitates targeted delivery and referencing of image data.
    - Comfy dtype: INT
    - Python dtype: int
- prompt
    - The 'prompt' parameter, while optional, can be used to provide additional context or instructions for image processing. It enhances the node's functionality by allowing more nuanced control over image handling.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows inclusion of additional metadata or information within PNG images. This is useful for enriching image data with extra details that the receiving system may require.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- result
    - The 'result' output of the ImageSender node contains the outcome of the image transmission process. It includes the sent images and any associated metadata, providing a comprehensive overview of the node's operation.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class ImageSender(nodes.PreviewImage):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'filename_prefix': ('STRING', {'default': 'ImgSender'}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    OUTPUT_NODE = True
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, images, filename_prefix='ImgSender', link_id=0, prompt=None, extra_pnginfo=None):
        result = nodes.PreviewImage().save_images(images, filename_prefix, prompt, extra_pnginfo)
        PromptServer.instance.send_sync('img-send', {'link_id': link_id, 'images': result['ui']['images']})
        return result
```
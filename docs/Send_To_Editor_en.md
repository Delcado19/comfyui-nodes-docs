# Documentation
- Class name: Send_To_Editor
- Category: image
- Output node: True
- Repo Ref: https://github.com/Lerc/canvas_tab.git

This node is designed to process and collect image data, converting it into a format suitable for further use in an editing environment. It emphasizes transforming raw image inputs into structured outputs that can be seamlessly integrated into various editing tools.

# Input types
## Required
- unique_id
    - A unique identifier for the image batch, ensuring that each group of images can be individually tracked and managed during the editing process.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- images
    - The input images to be processed by the node. These images are critical as they form the basis of the output and directly impact the quality and usability of the data sent to the editor.
    - Comfy dtype: COMBO[Image]
    - Python dtype: List[PIL.Image.Image]

# Output types
- collected_images
    - Represents a list of data URLs for the collected images, ready for use in the editing interface.
    - Comfy dtype: List[str]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class Send_To_Editor:

    def __init__(self):
        self.updateTick = 1
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'hidden': {'unique_id': 'UNIQUE_ID'}, 'optional': {'images': ('IMAGE',)}}
    RETURN_TYPES = ()
    FUNCTION = 'collect_images'
    OUTPUT_NODE = True
    CATEGORY = 'image'

    def IS_CHANGED(self, unique_id, images):
        self.updateTick += 1
        return hex(self.updateTick)

    def collect_images(self, unique_id, images=None):
        collected_images = list()
        if images is not None:
            for image in images:
                i = 255.0 * image.cpu().numpy()
                img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
                collected_images.append(image_to_data_url(img))
        return {'ui': {'collected_images': collected_images}}
```
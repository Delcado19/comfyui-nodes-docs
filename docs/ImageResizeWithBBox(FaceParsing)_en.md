# Documentation
- Class name: ImageResizeWithBBox
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

This node aims to maintain the aspect ratio and position of the bounding box while resizing the image, ensuring that key elements within the image are scaled appropriately and kept for further processing.

# Input types
## Required
- bbox
    - The bounding box parameter is crucial for defining the region of interest within the image. It determines how the image is cropped and ensures that important features are centered and maintained during the resizing process.
    - Comfy dtype: BBOX
    - Python dtype: torch.Tensor
- image
    - The image parameter is the main input for this node, which will be processed according to the specified resizing requirements. It is essential for providing the visual data to be transformed and analyzed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- resized_image
    - The output of this node is the resized image, which has been adjusted to meet the desired dimensions while maintaining the position and aspect ratio of the bounding box for further analysis or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageResizeWithBBox:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'bbox': ('BBOX', {}), 'image': ('IMAGE', {})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, bbox: Tensor, image: Tensor):
        bbox_int = bbox.int()
        l = bbox_int[0]
        t = bbox_int[1]
        r = bbox_int[2]
        b = bbox_int[3]
        resized_image = functional.resize(image.permute(0, 3, 1, 2), [b - t, r - l]).permute(0, 2, 3, 1)
        return (resized_image,)
```
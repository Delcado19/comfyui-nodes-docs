# Documentation
- Class name: ImageInsertWithBBox
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

This node aims to insert one image into the specified bounding box position of another image, which is crucial for applications such as face parsing and object tracking. It handles the processes of resizing, padding, and masking to ensure the source image is seamlessly inserted into the target image, facilitating overall understanding and analysis of visual content.

# Input types
## Required
- bbox
    - Bounding box parameters are crucial for defining the area where the image will be inserted. They directly affect the cropping and placement of the image within the target, ensuring precise positioning and integration.
    - Comfy dtype: BBOX
    - Python dtype: torch.Tensor
- image_src
    - The source image is the main visual content to be inserted into the target image. Its quality and dimensions are crucial to the final output, as they determine how the inserted image blends with the background.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image
    - The image parameter represents the target image into which the source image will be inserted. The characteristics of this image, such as resolution and color space, are important for the overall processing and final result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- result
    - The output is the final image after the source image is inserted into the specified bounding box. It represents the successful integration of the two visual elements, which is crucial for further analysis and visualization tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class ImageInsertWithBBox:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'bbox': ('BBOX', {}), 'image_src': ('IMAGE', {}), 'image': ('IMAGE', {})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, bbox: Tensor, image_src: Tensor, image: Tensor):
        bbox_int = bbox.int()
        l = bbox_int[0]
        t = bbox_int[1]
        r = bbox_int[2]
        b = bbox_int[3]
        image_permuted = image.permute(0, 3, 1, 2)
        resized = functional.resize(image_permuted, [b - t, r - l])
        (_, h, w, c) = image_src.shape
        padded = functional.pad(resized, [l, t, w - r, h - b])
        src_permuted = image_src.permute(0, 3, 1, 2)
        mask = torch.zeros(src_permuted.shape)
        mask[:, :, t:b, l:r] = 1
        result = torch.where(mask == 0, src_permuted, padded)
        final = result.permute(0, 2, 3, 1)
        return (final,)
```
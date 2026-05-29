# Documentation
- Class name: ImagePadWithBBox
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

This node facilitates precise padding of images with bounding boxes, ensuring the image is properly framed and prepared for further analysis or processing.

# Input types
## Required
- bbox
    - The bounding box parameter is critical for determining the region of interest in the image. It decides from which coordinates the image will be cropped and padded accordingly.
    - Comfy dtype: BBOX
    - Python dtype: torch.Tensor
- width
    - The width parameter specifies the desired width of the padded output image, affecting the overall dimensions and aspect ratio of the final product.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the desired height of the padded output image, which directly impacts the final presentation and layout of the image.
    - Comfy dtype: INT
    - Python dtype: int
- image
    - The image parameter is the primary input; the node operates on this input using the provided bounding box and dimensions to perform the padding.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The output image is the result of the padding process, presenting a properly framed and dimensioned image ready for subsequent processing stages.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImagePadWithBBox:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'bbox': ('BBOX', {}), 'width': ('INT', {}), 'height': ('INT', {}), 'image': ('IMAGE', {})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, bbox: Tensor, width: int, height: int, image: Tensor):
        image_permuted = image.permute(0, 3, 1, 2)
        bbox_int = bbox.int()
        l = bbox_int[0]
        t = bbox_int[1]
        r = bbox_int[2]
        b = bbox_int[3]
        cropped_image = functional.pad(image_permuted, [l, t, width - r, height - b])
        final = cropped_image.permute(0, 2, 3, 1)
        return (final,)
```
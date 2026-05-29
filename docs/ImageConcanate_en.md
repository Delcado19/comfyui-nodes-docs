
# Documentation
- Class name: ImageConcanate
- Category: KJNodes/image
- Output node: False

The ImageConcanate node is designed to concatenate two images in a specified direction, optionally resizing the second image to match the first. This feature is useful for creating composite images or extending the visual context of existing images.

# Input types
## Required
- image1
    - The first image that serves as the base for concatenation. It acts as the reference image during the process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The second image to be concatenated onto the first. If specified, this image can be resized to match the dimensions of the first image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- direction
    - The direction in which the second image will be concatenated onto the first. Options include 'right', 'down', 'left', and 'up'.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- match_image_size
    - A boolean flag that determines whether the second image should be resized to match the first image before concatenation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The resulting image after concatenating the second image onto the first in the specified direction. This output is a single composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageConcanate:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "image1": ("IMAGE",),
            "image2": ("IMAGE",),
            "direction": (
            [   'right',
                'down',
                'left',
                'up',
            ],
            {
            "default": 'right'
             }),
            "match_image_size": ("BOOLEAN", {"default": False}),
        }}

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "concanate"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Concatenates the image2 to image1 in the specified direction.
"""

    def concanate(self, image1, image2, direction, match_image_size):
        if match_image_size:
            image2 = torch.nn.functional.interpolate(image2, size=(image1.shape[2], image1.shape[3]), mode="bilinear")
        if direction == 'right':
            row = torch.cat((image1, image2), dim=2)
        elif direction == 'down':
            row = torch.cat((image1, image2), dim=1)
        elif direction == 'left':
            row = torch.cat((image2, image1), dim=2)
        elif direction == 'up':
            row = torch.cat((image2, image1), dim=1)
        return (row,)

```

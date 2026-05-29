
# Documentation
- Class name: ImageTransformPaddingAbsolute
- Category: image/transform
- Output node: False

The ImageTransformPaddingAbsolute node applies absolute padding to a batch of images, allowing a specified number of pixels to be added to the height and width of each image. A padding method can be selected from predefined options to control how the new space is filled.

# Input types
## Required
- images
    - The batch of images to apply padding to. This is the primary input for the transformation process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- add_width
    - The number of pixels to add to the width of each image.
    - Comfy dtype: INT
    - Python dtype: int
- add_height
    - The number of pixels to add to the height of each image.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - The method used to fill the new area, with options including 'reflect', 'edge', and 'constant'.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The padded batch of images, with dimensions increased according to the specified add_width and add_height.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformPaddingAbsolute:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "add_width": ("INT", {
                    "default": 64,
                    "min": 0,
                }),
                "add_height": ("INT", {
                    "default": 64,
                    "min": 0,
                }),
                "method": (["reflect", "edge", "constant"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    def node(self, images, add_width, add_height, method):
        def transpose_tensor(image):
            tensor = image.clone().detach()
            tensor_pad = TF.pad(tensor.permute(2, 0, 1), [add_height, add_width], padding_mode=method).permute(1, 2, 0)

            return tensor_pad

        return (torch.stack([
            transpose_tensor(images[i]) for i in range(len(images))
        ]),)

```

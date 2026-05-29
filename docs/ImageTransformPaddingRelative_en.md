
# Documentation
- Class name: ImageTransformPaddingRelative
- Category: image/transform
- Output node: False

ImageTransformPaddingRelative node applies relative padding to images based on specified width and height scaling factors and padding method. It dynamically calculates the amount of padding to add to each dimension of the image, enabling flexible image transformation while maintaining aspect ratio.

# Input types
## Required
- images
    - The collection of images to which padding needs to be applied. This parameter is crucial for defining the input data to be transformed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- scale_width
    - The scaling factor used to determine the padding width relative to the original image width. It affects the final dimensions of the padded image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_height
    - The scaling factor used to determine the padding height relative to the original image height. It affects the final dimensions of the padded image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- method
    - The method used for padding (e.g., reflect, edge, constant), which affects the appearance of the padded area.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The transformed image with added padding, maintaining the original aspect ratio while adjusting the overall dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformPaddingRelative:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "scale_width": ("FLOAT", {
                    "default": 0.25,
                    "step": 0.1,
                }),
                "scale_height": ("FLOAT", {
                    "default": 0.25,
                    "step": 0.1,
                }),
                "method": (["reflect", "edge", "constant"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    def node(self, images, scale_width, scale_height, method):
        height, width = images[0, :, :, 0].shape

        add_width = int(width * scale_width)
        add_height = int(height * scale_height)

        return ImageTransformPaddingAbsolute().node(images, add_width, add_height, method)

```

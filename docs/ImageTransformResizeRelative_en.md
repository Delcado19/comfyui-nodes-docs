
# Documentation
- Class name: ImageTransformResizeRelative
- Category: image/transform
- Output node: False

The ImageTransformResizeRelative node dynamically adjusts image size using relative scale factors, enabling flexible image transformation. This method scales the image proportionally while preserving the aspect ratio.

# Input types
## Required
- images
    - Specify the image to be resized, which is the primary input of the transformation process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- scale_width
    - Determine the scaling factor for the image width, affecting the overall size of the output image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_height
    - Determine the scaling factor for the image height, affecting the overall size of the output image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- method
    - Specify the interpolation method used for resizing, influencing the quality and characteristics of the resized image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Generate the resized image based on the specified relative width and height scaling factors.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformResizeRelative:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "scale_width": ("FLOAT", {
                    "default": 1.0,
                    "step": 0.1
                }),
                "scale_height": ("FLOAT", {
                    "default": 1.0,
                    "step": 0.1
                }),
                "method": (["lanczos", "bicubic", "hamming", "bilinear", "box", "nearest"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    def node(self, images, scale_width, scale_height, method):
        height, width = images[0, :, :, 0].shape

        width = int(width * scale_width)
        height = int(height * scale_height)

        return ImageTransformResizeAbsolute().node(images, width, height, method)

```

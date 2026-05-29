
# Documentation
- Class name: ImageScaleDownBy
- Category: Art Venture/Utils
- Output node: False

The ImageScaleDownBy node scales down images by a specified factor while preserving the original aspect ratio. It provides a straightforward method to reduce image resolution, useful for performance optimization or preparing images for specific display requirements.

# Input types
## Required
- images
    - The `images` parameter represents the images to be scaled down. It is essential for defining the input images that will undergo the scaling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- scale_by
    - The `scale_by` parameter specifies the factor by which the image will be reduced. It directly affects the new dimensions of the output image while maintaining its aspect ratio.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output is a scaled-down version of the input image, with dimensions adjusted according to the `scale_by` factor.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageScaleDownBy(UtilImageScaleDown):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "scale_by": (
                    "FLOAT",
                    {"default": 0.5, "min": 0.01, "max": 1.0, "step": 0.01},
                ),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_scale_down_by"

    def image_scale_down_by(self, images, scale_by):
        width = images.shape[2]
        height = images.shape[1]
        new_width = int(width * scale_by)
        new_height = int(height * scale_by)
        return self.image_scale_down(images, new_width, new_height, "center")

```

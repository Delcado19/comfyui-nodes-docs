
# Documentation
- Class name: Image Contrast Adjustment [Dream]
- Category: ✨ Dream/🌄 image/🎨 color
- Output node: False

This node adjusts the contrast of an image based on a specified contrast adjustment factor, enhancing or reducing the difference between the brightest and darkest parts of the image.

# Input types
## Required
- image
    - The image that needs contrast adjustment. This is the main input for the contrast adjustment operation.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage
- factor
    - The multiplier used to adjust contrast. Values greater than 1.0 increase contrast, while values less than 1.0 decrease contrast.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The resulting image after applying the contrast adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamImageContrast:
    NODE_NAME = "Image Contrast Adjustment"
    ICON = "◐"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {"image": ("IMAGE",),
                         "factor": ("FLOAT", {"default": 1.0, "min": 0.0}),
                         },

        }

    CATEGORY = NodeCategories.IMAGE_COLORS
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, image, factor):
        proc = DreamImageProcessor(inputs=image)

        def change(im: DreamImage, *a, **args):
            return (im.change_contrast(factor),)

        return proc.process(change)

```

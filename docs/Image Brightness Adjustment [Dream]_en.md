
# Documentation
- Class name: Image Brightness Adjustment [Dream]
- Category: ✨ Dream/🌄 image/🎨 color
- Output node: False

This node adjusts the brightness of an image by a specified factor, enhancing or reducing the overall brightness of the image.

# Input types
## Required
- image
    - The input image that needs brightness adjustment. This is the main input on which the brightness adjustment will be performed.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage
- factor
    - The multiplier used to adjust the brightness. Values greater than 1.0 will increase brightness, and values less than 1.0 will decrease brightness.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The resulting image after applying the brightness adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamImageBrightness:
    NODE_NAME = "Image Brightness Adjustment"
    ICON = "☼"

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
            return (im.change_brightness(factor),)

        return proc.process(change)

```


# Documentation
- Class name: ImageRepeat
- Category: Art Venture/Utils
- Output node: False

The ImageRepeat node is designed to duplicate a given image a specified number of times, creating a batch of identical images. This is useful for operations requiring multiple instances of the same image for batch processing or augmentation.

# Input types
## Required
- images
    - Specifies the image to repeat. It is essential for defining the base image that will be duplicated across the batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- amount
    - Determines how many times the input image is repeated. It directly affects the output batch size, allowing flexible batch creation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a batch of images, each identical to the input image, repeated according to the specified count.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - SetNode



## Source code
```python
class UtilRepeatImages:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "amount": ("INT", {"default": 1, "min": 1, "max": 1024}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "rebatch"

    def rebatch(self, images: torch.Tensor, amount):
        return (images.repeat(amount, 1, 1, 1),)

```

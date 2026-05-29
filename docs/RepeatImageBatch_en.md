# Documentation
- Class name: RepeatImageBatch
- Category: image/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RepeatImageBatch node’s `repeat` method is designed to copy a single image into a batch dimension, allowing the image to be repeated within a dataset. This feature is essential for creating augmented datasets or for scenarios that require consistent image repetition during batch processing. The node’s functionality is straightforward, focusing on copying the input image without altering its inherent properties.

# Input types
## Required
- image
- The `image` parameter is the input image that the node will process. It is crucial to the node’s operation because it is the object of the copying process. The parameter’s impact on the node is direct, as the output is a batch of images repeated from this input.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- amount
- The `amount` parameter specifies how many times the input image should be repeated along the batch dimension. It is optional, defaulting to 1, meaning no repetition if unspecified. This parameter is important because it determines the size of the output batch, directly affecting subsequent data processing steps.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
- The `output_image` is the result of the `repeat` operation, containing the image repeated as a batch. Each image in the batch is a copy of the input image, and the batch size is determined by the `amount` parameter. This output is important because it forms the basis for further image processing or analysis in a batch context.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class RepeatImageBatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'amount': ('INT', {'default': 1, 'min': 1, 'max': 4096})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'repeat'
    CATEGORY = 'image/batch'

    def repeat(self, image, amount):
        s = image.repeat((amount, 1, 1, 1))
        return (s,)
```
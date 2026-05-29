
# Documentation
- Class name: ImagePass
- Category: KJNodes/misc
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImagePass node acts as a direct pass-through channel for image data, allowing images to be forwarded without any modification. This node is essential for workflows that require maintaining image integrity across various processing stages. It provides a simple and effective way to ensure image data remains unchanged throughout complex processing chains.

# Input types
## Required
- image
    - The 'image' input type accepts an image that will be passed through the node, ensuring the original image data remains unaltered. This input is important for preserving the original state of the image during processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is the unmodified input image, ensuring the original image data has not been altered. This output guarantees the image retains its original form and characteristics as it passes through the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImagePass:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
            },
        }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "passthrough"
    CATEGORY = "KJNodes/misc"
    DESCRIPTION = """
Passes the image through without modifying it.
"""

    def passthrough(self, image):
        return image,

```

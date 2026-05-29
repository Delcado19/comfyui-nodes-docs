# Documentation
- Class name: imageSwitch
- Category: EasyUse/Logic/Switch
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The imageSwitch node conditionally selects between two images based on a Boolean value. It is a fundamental component in image‑processing workflows, used to make decisions under certain conditions. The node evaluates the Boolean input and returns the corresponding image.

# Input types
## Required
- image_a
- The image_a parameter is the first image the node may return. It plays a key role in the node’s operation, as it is one of the two options determined by the Boolean input.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]
- image_b
- The image_b parameter represents the second image option the node may output. Its importance matches that of image_a, because the Boolean input decides which one the node returns.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]
- boolean
- The Boolean parameter is critical to the node’s decision process. It directly determines which of the two images, image_a or image_b, becomes the node’s output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_image
- The selected_image output represents the image chosen based on the Boolean input. It is the final manifestation of the node’s functionality, containing the result of the applied conditional logic.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class imageSwitch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image_a': ('IMAGE',), 'image_b': ('IMAGE',), 'boolean': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_switch'
    CATEGORY = 'EasyUse/Logic/Switch'

    def image_switch(self, image_a, image_b, boolean):
        if boolean:
            return (image_a,)
        else:
            return (image_b,)
```
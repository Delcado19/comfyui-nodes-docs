# Documentation
- Class name: WAS_Images_To_RGB
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `image_to_rgb` method of the WAS_Images_To_RGB node aims to convert a series of images into their RGB representation. It operates by converting each image into a tensor, then converting it to RGB format, and finally stacking the resulting tensors if multiple images are provided. This process is crucial for preparing images for further processing or analysis within the WAS suite.

# Input types
## Required
- images
    - The 'image' parameter is critical for the operation of the node because it represents the collection of images that need to be converted to RGB format. The node processes each image one by one and ensures that the final output is a tensor representation suitable for downstream tasks.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Output types
- tensors
    - The 'tensors' output is a tensor or stack of tensors representing the RGB format of the input images. This output is important because it allows seamless integration with other nodes in the WAS suite that require RGB image data for further processing.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Images_To_RGB:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_to_rgb'
    CATEGORY = 'WAS Suite/Image'

    def image_to_rgb(self, images):
        if len(images) > 1:
            tensors = []
            for image in images:
                tensors.append(pil2tensor(tensor2pil(image).convert('RGB')))
            tensors = torch.cat(tensors, dim=0)
            return (tensors,)
        else:
            return (pil2tensor(tensor2pil(images).convert('RGB')),)
```
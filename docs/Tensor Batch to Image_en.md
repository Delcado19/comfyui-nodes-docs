# Documentation
- Class name: WAS_Tensor_Batch_to_Image
- Category: WAS Suite/Latent/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `tensor_batch_to_image` converts a batch of tensor images into a single image representation. It is a key step in image processing pipelines, allowing batch data to be transformed into a format that is easier to use or display.

# Input types
## Required
- images_batch
    - The parameter `images_batch` is critical, as it contains the batch of tensor images to be converted into a single image. It plays a central role in the node's operation, determining the source data for the conversion process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- batch_image_number
    - The parameter `batch_image_number` determines which image from the batch is selected for conversion. Its value affects the node's execution by specifying the index of the desired image within the batch.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output `image` is the result of the conversion process, representing the selected image from the batch. It is important because it is the direct output of the node's functionality, containing the transformed data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Tensor_Batch_to_Image:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images_batch': ('IMAGE',), 'batch_image_number': ('INT', {'default': 0, 'min': 0, 'max': 64, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'tensor_batch_to_image'
    CATEGORY = 'WAS Suite/Latent/Transform'

    def tensor_batch_to_image(self, images_batch=[], batch_image_number=0):
        count = 0
        for _ in images_batch:
            if batch_image_number == count:
                return (images_batch[batch_image_number].unsqueeze(0),)
            count = count + 1
        cstr(f'Batch number `{batch_image_number}` is not defined, returning last image').error.print()
        return (images_batch[-1].unsqueeze(0),)
```
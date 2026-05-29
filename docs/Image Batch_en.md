# Documentation
- Class name: WAS_Image_Batch
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Batch node is designed to process and batch multiple images for further operations. It ensures all input images have matching dimensions, then merges them into a single tensor, facilitating efficient batch processing of image data.

# Input types
## Optional
- images_a
    - The 'images_a' parameter provides a set of images to be batched. It plays a crucial role in the node's operation, as it directly affects what will be processed.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
- images_b
    - The 'images_b' parameter is an optional image source for the batch. It is important because it allows additional images to be processed alongside 'images_a'.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
- images_c
    - The 'images_c' parameter is another optional image input, enhancing the node's flexibility to accommodate more image data for batch processing.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
- images_d
    - The 'images_d' parameter provides further optional image input capability, allowing the node to process a broader array of images in a single batch operation.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Output types
- image
    - The 'image' output represents the processed and concatenated image tensor. It is essential for downstream tasks requiring a unified batch of image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Batch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {}, 'optional': {'images_a': ('IMAGE',), 'images_b': ('IMAGE',), 'images_c': ('IMAGE',), 'images_d': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'image_batch'
    CATEGORY = 'WAS Suite/Image'

    def _check_image_dimensions(self, tensors, names):
        reference_dimensions = tensors[0].shape[1:]
        mismatched_images = [names[i] for (i, tensor) in enumerate(tensors) if tensor.shape[1:] != reference_dimensions]
        if mismatched_images:
            raise ValueError(f'WAS Image Batch Warning: Input image dimensions do not match for images: {mismatched_images}')

    def image_batch(self, **kwargs):
        batched_tensors = [kwargs[key] for key in kwargs if kwargs[key] is not None]
        image_names = [key for key in kwargs if kwargs[key] is not None]
        if not batched_tensors:
            raise ValueError('At least one input image must be provided.')
        self._check_image_dimensions(batched_tensors, image_names)
        batched_tensors = torch.cat(batched_tensors, dim=0)
        return (batched_tensors,)
```
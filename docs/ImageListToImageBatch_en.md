# Documentation
- Class name: ImageListToImageBatch
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node is designed to efficiently convert a list of images into a single image batch. It achieves this by concatenating images along the first dimension, ensuring all images in the batch have the same shape. The node plays a key role in preparing image data for further processing, such as batch-based neural network operations.

# Input types
## Required
- images
    - The 'image' parameter is the list of image tensors that the node will process. It is essential to the node's operation, as it directly affects the creation of the image batch. This parameter ensures all images are compatible and can be concatenated into a single batch.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Output types
- image_batch
    - The output of this node is a single image tensor representing the image batch. This batch is created by concatenating the input images along the first dimension, making it suitable for downstream tasks that require batched image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class ImageListToImageBatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',)}}
    INPUT_IS_LIST = True
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, images):
        if len(images) <= 1:
            return (images,)
        else:
            image1 = images[0]
            for image2 in images[1:]:
                if image1.shape[1:] != image2.shape[1:]:
                    image2 = comfy.utils.common_upscale(image2.movedim(-1, 1), image1.shape[2], image1.shape[1], 'lanczos', 'center').movedim(1, -1)
                image1 = torch.cat((image1, image2), dim=0)
            return (image1,)
```
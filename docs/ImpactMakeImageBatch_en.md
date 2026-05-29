# Documentation
- Class name: MakeImageBatch
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ‘MakeImageBatch’ node efficiently combines multiple images into a single batch for further processing. It resizes images when necessary to ensure all images in the batch share the same dimensions and concatenates them along the batch dimension. This node plays a key role in preparing a unified dataset for image processing tasks, such as batch neural network training or batch image operations.

# Input types
## Required
- image1
    - The ‘image1’ parameter serves as the reference image for batch size. It is crucial because subsequent images with different dimensions will be resized to match it. The node’s functionality depends on this parameter to create a uniform batch for downstream tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- kwargs
    - The ‘kwargs’ parameter allows additional images to be included in the batch. Each image provided via this parameter is processed in the same way as ‘image1’, ensuring batch consistency. The flexibility of ‘kwargs’ lets the node handle a variable number of images in different scenarios, enhancing its utility.
    - Comfy dtype: COMBO[str, IMAGE]
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- image_batch
    - The ‘image_batch’ output is the concatenated image batch, with images resized to maintain consistency within the batch. This output is important because it forms the basis for subsequent image processing tasks, ensuring the batch is ready for operations such as neural network input or batch image editing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MakeImageBatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image1': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, **kwargs):
        image1 = kwargs['image1']
        del kwargs['image1']
        images = [value for value in kwargs.values()]
        if len(images) == 0:
            return (image1,)
        else:
            for image2 in images:
                if image1.shape[1:] != image2.shape[1:]:
                    image2 = comfy.utils.common_upscale(image2.movedim(-1, 1), image1.shape[2], image1.shape[1], 'lanczos', 'center').movedim(1, -1)
                image1 = torch.cat((image1, image2), dim=0)
            return (image1,)
```
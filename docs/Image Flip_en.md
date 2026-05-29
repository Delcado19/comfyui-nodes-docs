# Documentation
- Class name: WAS_Image_Flip
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The image flipping method aims to transform a set of images by flipping them horizontally or vertically. This operation is crucial for data augmentation in machine learning tasks, as it provides diversity in training data, which can improve the robustness and generalization capability of the model.

# Input types
## Required
- images
    - The parameter 'images' is the collection of images to be flipped. It plays a core role in the node's operation because the transformation is directly applied to these images. The node's result heavily depends on the content and format of the input images.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- mode
    - The parameter 'mode' determines the direction in which the input images will be flipped. It is very important because it determines the type of transformation applied to the images. The choice between 'horizontal' and 'vertical' directly affects the final result of the image processing.
    - Comfy dtype: COMBO['horizontal', 'vertical']
    - Python dtype: str

# Output types
- images
    - The output 'images' represents the transformed images after flipping. It is important because it is the direct result of the node operation and is used for further processing or analysis in subsequent stages of the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Flip:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'mode': (['horizontal', 'vertical'],)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'image_flip'
    CATEGORY = 'WAS Suite/Image/Transform'

    def image_flip(self, images, mode):
        batch_tensor = []
        for image in images:
            image = tensor2pil(image)
            if mode == 'horizontal':
                image = image.transpose(0)
            if mode == 'vertical':
                image = image.transpose(1)
            batch_tensor.append(pil2tensor(image))
        batch_tensor = torch.cat(batch_tensor, dim=0)
        return (batch_tensor,)
```
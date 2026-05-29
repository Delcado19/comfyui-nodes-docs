# Documentation
- Class name: Morphology
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Morphology node is designed to perform various morphological operations on images, such as erosion, dilation, opening, and closing. These operations are used in image processing to alter the shape or size of features within an image, serving as fundamental operations in image processing. It applies these operations using a customizable kernel, providing a versatile tool for image post-processing tasks.

# Input types
## Required
- image
    - Input Image is the primary data on which morphological operations will be applied. This is a critical parameter, as the entire functionality of the node revolves around manipulating this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- operation
    - Operation parameter specifies the type of morphological transformation to be performed. It is very important, as it determines the nature of the changes that will be made to the input image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- kernel_size
    - Kernel Size determines the size of the structuring element used for morphological operations. It is an important parameter, as it affects the extent of the transformation applied to the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - Output Image is the result of applying the selected morphological operation to the input image. It represents the final state of the processed image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class Morphology:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'operation': (['erode', 'dilate', 'open', 'close', 'gradient', 'bottom_hat', 'top_hat'],), 'kernel_size': ('INT', {'default': 3, 'min': 3, 'max': 999, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'process'
    CATEGORY = 'image/postprocessing'

    def process(self, image, operation, kernel_size):
        device = comfy.model_management.get_torch_device()
        kernel = torch.ones(kernel_size, kernel_size, device=device)
        image_k = image.to(device).movedim(-1, 1)
        if operation == 'erode':
            output = erosion(image_k, kernel)
        elif operation == 'dilate':
            output = dilation(image_k, kernel)
        elif operation == 'open':
            output = opening(image_k, kernel)
        elif operation == 'close':
            output = closing(image_k, kernel)
        elif operation == 'gradient':
            output = gradient(image_k, kernel)
        elif operation == 'top_hat':
            output = top_hat(image_k, kernel)
        elif operation == 'bottom_hat':
            output = bottom_hat(image_k, kernel)
        else:
            raise ValueError(f"Invalid operation {operation} for morphology. Must be one of 'erode', 'dilate', 'open', 'close', 'gradient', 'tophat', 'bottomhat'")
        img_out = output.to(comfy.model_management.intermediate_device()).movedim(1, -1)
        return (img_out,)
```
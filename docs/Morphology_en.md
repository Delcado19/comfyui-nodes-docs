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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

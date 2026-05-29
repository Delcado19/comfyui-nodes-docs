# Documentation
- Class name: imageScaleDownToSize
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node resizes images to a specified size while maintaining the aspect ratio, ensuring the resized image fits the desired dimensions. The scaling factor is adjusted based on the selected maximum or minimum dimension, allowing control over how the image is scaled.

# Input types
## Required
- images
    - The input images are the primary data the node processes. They are essential to the node's operation, as the entire functionality revolves around resizing these images to the desired dimensions.
    - Comfy dtype: COMBO[numpy.ndarray]
    - Python dtype: numpy.ndarray
- size
    - The size parameter determines the target dimensions to which the input images will be scaled. It is a critical factor in determining the appearance and dimensions of the output.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- mode
    - The mode parameter affects whether scaling is based on the maximum or minimum dimension of the image. This influences the final aspect ratio and scaling direction.
    - Comfy dtype: boolean
    - Python dtype: bool

# Output types
- output_image
    - The output images are the result of the node's processing, where the input images have been resized according to the specified parameters. They represent the practical operation of the node's functionality.
    - Comfy dtype: numpy.ndarray
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

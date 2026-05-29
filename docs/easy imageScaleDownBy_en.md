# Documentation
- Class name: imageScaleDownBy
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node resizes images by proportionally reducing their dimensions, preserving visual content integrity while reducing file size for more efficient processing or storage.

# Input types
## Required
- images
    - The input images are the primary data the node will process. They are essential to the node's operation, as they determine the visual representation and quality of the output.
    - Comfy dtype: COMBO[numpy.ndarray]
    - Python dtype: numpy.ndarray
- scale_by
    - This parameter defines the scaling factor for the image dimensions. It is critical, as it directly affects the final dimensions and aspect ratio of the resized image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The output includes the resized images, which are now smaller in size but retain the important visual elements of the original images, ready for further processing or storage.
    - Comfy dtype: COMBO[numpy.ndarray]
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

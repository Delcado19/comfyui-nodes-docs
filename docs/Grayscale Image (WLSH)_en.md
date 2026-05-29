# Documentation
- Class name: WLSH_Image_Grayscale
- Category: WLSH Nodes/image
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to convert color images to grayscale images, a basic operation in image processing that reduces image complexity by removing color information, thus focusing on the structure and brightness aspects of the image.

# Input types
## Required
- original
    - The original image is the input required for the grayscale conversion process. It is crucial because it is the object of conversion, and the quality and resolution of the original image directly affect the result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- grayscale
    - The output is a grayscale version of the input image, processed to focus on brightness and structural details without color interference.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

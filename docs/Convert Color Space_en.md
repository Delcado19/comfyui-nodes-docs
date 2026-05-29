# Documentation
- Class name: ConvertColorSpace
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The ConvertColorSpace node is designed to convert an image from one color space to another. It provides a high-level interface for seamlessly converting images between RGB, HSV, and HSL color spaces, allowing for more efficient manipulation and analysis of image data.

# Input types
## Required
- in_space
    - The 'in_space' parameter defines the current color space of the input image, which is crucial for determining the appropriate conversion algorithm. It influences the node's execution by specifying the starting point of the color space conversion.
    - Comfy dtype: COMBO['RGB', 'HSV', 'HSL']
    - Python dtype: str
- out_space
    - The 'out_space' parameter specifies the desired color space of the output image. It is a critical determinant of the node's operation, as it determines the target format of the color space conversion process.
    - Comfy dtype: COMBO['RGB', 'HSV', 'HSL']
    - Python dtype: str
- image
    - The 'image' parameter represents the input image data that needs to be converted. It is essential to the node's functionality, as it is the primary data object for the color space conversion.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The output 'IMAGE' represents the converted image in the specified color space. It is the final result of the node's operation and is of significant value for further image processing or analysis tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

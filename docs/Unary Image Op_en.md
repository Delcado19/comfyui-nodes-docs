# Documentation
- Class name: UnaryImageOp
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The UnaryImageOp node is designed to perform various single-input image operations. It provides a series of unary operations, such as image inversion, averaging, rounding, clamping, and absolute value calculation. These operations are essential for image preprocessing and feature extraction, allowing image data to be manipulated to meet specific analysis or visualization requirements.

# Input types
## Required
- image
    - The image parameter is required because it is the main input of the UnaryImageOp node. It represents the image data that will undergo the specified unary operation. The characteristics of the image directly affect the node's output, making it a fundamental component in the execution of the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- op
    - The op parameter specifies the unary operation to be applied to the image. It is a key determinant of the node's functionality because it decides the type of transformation that will be performed. The choice of operation can significantly change the characteristics of the resulting image, affecting downstream processing.
    - Comfy dtype: COMBO['invert', 'average', 'round', 'clamp', 'abs']
    - Python dtype: str

# Output types
- result
    - The result parameter represents the output of the unary operation applied to the input image. It contains the transformed image data after executing the specified operation. This output is important because it lays the foundation for any subsequent image analysis or processing steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

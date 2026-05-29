# Documentation
- Class name: UnaryMaskOp
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The UnaryMaskOp node is designed to perform various unary operations on a given mask image. It provides a set of methods to manipulate masks, such as inverting the mask, averaging pixel values, rounding, clamping values to a range, and taking absolute values. These operations are essential for preprocessing steps in image processing tasks where different representations of the mask may be required.

# Input types
## Required
- image
    - The image parameter is critical for the UnaryMaskOp node as it represents the input mask image on which the unary operation will be performed. The node's functionality is directly related to the quality and format of this input, which affects the outcome of the operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- op
    - The operation parameter determines the specific unary operation that will be applied to the input mask. It is a critical component as it dictates the type of transformation that will occur, influencing the final result executed by the node.
    - Comfy dtype: COMBO['invert', 'average', 'round', 'clamp', 'abs']
    - Python dtype: str

# Output types
- result
    - The result parameter encapsulates the outcome of the unary operation applied to the input mask. It is an important output as it reflects the transformed mask, which can be used for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

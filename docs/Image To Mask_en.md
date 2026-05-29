# Documentation
- Class name: ImageToMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The ImageToMask node is designed to convert input images into mask representations. It provides a method to transform images based on intensity or alpha values, facilitating the creation of binary or single-channel masks from input data, which is essential for various image processing tasks such as segmentation.

# Input types
## Required
- image
    - The image parameter is required as it serves as the primary input to the node. It influences the node's execution by determining the source from which the mask is to be generated. The expected image exists in tensor format, which the node will process to produce the desired mask output.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- method
    - The method parameter determines the conversion strategy employed by the node. It is important because it decides whether the mask is derived from intensity or alpha values, which in turn affects the characteristics of the final mask and its suitability for downstream applications.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MASK
    - The MASK output is a tensor representing the mask derived from the input image. It is a critical output as it is the direct result of the node's transformation process, encapsulating the converted image data into a format suitable for segmentation or other mask-based applications.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

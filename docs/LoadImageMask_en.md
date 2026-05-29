# Documentation
- Class name: LoadImageMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LoadImageMask node aims to load and process image files, focusing on extracting specific color or alpha channels to create masks. It can handle various image formats and ensures the output is a standardized mask tensor suitable for downstream tasks.

# Input types
## Required
- image
    - Image parameters are critical for the LoadImageMask node because they specify the image file to load. This input directly influences the node's operation, determining the source of mask data.
    - Comfy dtype: str
    - Python dtype: str
- channel
    - The channel parameter indicates which color channel of the image to use for generating the mask. It plays a key role in the node's functionality by defining the specific channel to extract and process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MASK
    - The MASK output of the LoadImageMask node represents a mask tensor derived from the specified image and channel. It is a standardized tensor that can be used immediately for downstream operations.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

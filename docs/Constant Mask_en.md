# Documentation
- Class name: ConstantMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The ConstantMask node is designed to generate a mask with uniform values across its dimensions. It offers flexibility in defining the mask size, either explicitly or by replicating the dimensions of an existing image, thereby ensuring consistency in data preprocessing pipelines.

# Input types
## Required
- value
    - The 'value' parameter specifies the constant value used to fill the mask. It plays a critical role in determining the uniformity of the output mask, influencing subsequent image processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- explicit_height
    - The 'explicit_height' parameter sets the height of the mask when not copying from an image. It is important for defining the vertical dimension of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- explicit_width
    - The 'explicit_width' parameter sets the width of the mask when not copying from an image. It is crucial for defining the horizontal dimension of the mask.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- copy_image_size
    - The 'copy_image_size' parameter allows the mask to adopt the dimensions of the provided image, eliminating the need to specify explicit dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor

# Output types
- result
    - The 'result' output is the generated mask filled with the specified constant value. It is important for applications requiring a uniform mask for further image operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

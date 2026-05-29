# Documentation
- Class name: WLSH_Outpaint_To_Image
- Category: WLSH Nodes/inpainting
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node expands the image in a specified direction and generates a corresponding mask, enhancing image manipulation and expansion capabilities to meet various application scenarios.

# Input types
## Required
- image
    - The source image is critical for the inpainting process, serving as the base layer for expansion and mask generation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- direction
    - The direction parameter determines the direction of image expansion, affecting the overall structure and composition of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
- pixels
    - The pixel count determines the degree of image expansion, directly impacting the final dimensions and the scope of inpainting.
    - Comfy dtype: INT
    - Python dtype: int
- mask_padding
    - Mask padding is essential for defining the expanded area around the image, ensuring a smooth transition between the original portion and the new region.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image represents the result of inpainting, where the original image has been expanded according to the specified direction and pixel count.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask corresponds to the inpainted region, providing a binary representation that distinguishes the original portion from the expanded portion.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

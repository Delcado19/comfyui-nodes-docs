# Documentation
- Class name: PasteByMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The PasteByMask node is designed to paste one image onto another using a mask to determine the placement. It intelligently resizes the image being pasted to fit the dimensions of the mask, with options to preserve the original aspect ratio or fully fill the masked area. This node plays a critical role in image processing tasks where seamless integration of multiple images is required, offering flexibility and precision in positioning and adjusting image elements.

# Input types
## Required
- image_base
    - The base image onto which another image will be pasted. It serves as the canvas for the operation, and its properties influence the final composition.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_to_paste
    - The image that will be pasted onto the base image. Its visual content and size play a critical role in determining the outcome of the paste operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask that determines where the image_to_paste will be placed on the image_base. It acts as a template, controlling the visibility and position of the pasted image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resize_behavior
    - Determines how the image_to_paste is resized to fit within the mask. This is a critical parameter that affects the scaling and aspect ratio of the pasted image.
    - Comfy dtype: COMBO['resize', 'keep_ratio_fill', 'keep_ratio_fit', 'source_size', 'source_size_unmasked']
    - Python dtype: str
## Optional
- mask_mapping_optional
    - An optional parameter that, if provided, specifies which specific image_to_paste should be pasted onto which base image. It adds an additional layer of control for complex operations involving multiple images.
    - Comfy dtype: MASK_MAPPING
    - Python dtype: torch.Tensor

# Output types
- result
    - The final output image, with the image_to_paste applied to the image_base according to the mask and resize_behavior parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: WAS_Mask_Combine_Batch
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Combine_Batch node is designed to merge multiple mask images into a single, seamless mask. This is particularly useful for applications requiring further processing or visualization. The node takes a batch of masks and outputs a combined mask that preserves the essential features of the input masks.

# Input types
## Required
- masks
    - The 'masks' input parameter is the list of mask images to be combined. It plays a critical role in the node's operation, as the quality and resolution of the output mask directly depend on the input masks. Masks should be in a compatible format for processing.
    - Comfy dtype: List[Image]
    - Python dtype: List[PIL.Image.Image]

# Output types
- combined_mask
    - The 'combined_mask' output is the result of merging the input masks. It is a single image representing the collective coverage of all input masks, suitable for applications such as image segmentation or visual effects matte work.
    - Comfy dtype: Image
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

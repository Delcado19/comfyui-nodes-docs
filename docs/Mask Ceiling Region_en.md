# Documentation
- Class name: WAS_Mask_Ceiling_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The ceiling_region method of the WAS_Mask_Ceiling_Region node is designed to process an input mask and identify the topmost region within it. It works by converting the mask to a PIL image, applying a ceiling effect to isolate the top area, and then converting the result back to a tensor format suitable for further image processing tasks.

# Input types
## Required
- masks
    - The input mask parameter is crucial for the ceiling_region method as it provides the raw mask data that the node will process. This parameter directly affects the node's output, determining which areas in the image are identified as the topmost region.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The MASKS output parameter represents a tensor containing the processed region from the input mask. This output is important as it is the result of the node's processing and is used for subsequent tasks in the image analysis pipeline.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

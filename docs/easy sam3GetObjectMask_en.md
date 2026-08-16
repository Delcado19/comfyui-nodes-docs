# Documentation
- Class name: easy sam3GetObjectMask
- Category: EasyUse/Sam3
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Sam3

Extract mask for a specific object index from Sam3VideoSegmentation objects output

# Input types
## Required
- objects
    - Objects output from Sam3VideoSegmentation node
    - Comfy dtype: EASY_SAM3_OBJECTS_OUTPUT
    - Python dtype: object
- obj_id
    - Object index (0-based) to extract mask for, not the actual object ID
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - Extracted mask for the specified object index
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Sam3)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

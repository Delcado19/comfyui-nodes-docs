# Documentation
- Class name: easy framesEditor
- Display name: Frames Editor
- Category: EasyUse/Sam3
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Sam3

SAM3 Editor Node

# Input types
## Required
- images
    - Input images for SAM3 Editor
    - Comfy dtype: IMAGE
- info
    - Comfy dtype: STRING
    - Default: `""`
- preview_rescale
    - Scale factor for preview image (coordinates will be converted back to original scale)
    - Comfy dtype: FLOAT
    - Default: `1`

# Output types
- positive_coords
    - Comfy dtype: STRING
- negative_coords
    - Comfy dtype: STRING
- bboxes
    - Comfy dtype: BBOX
- frame_index
    - Comfy dtype: INT

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Sam3)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: HiDreamO1ReferenceImages
- Category: model/conditioning/hidream
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Attach 1-10 reference images to conditioning, one for edit instructionor multiple for subject-driven personalization.

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- images
    - Reference images. 1 image = instruction edit; 2-10 images = multi reference.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

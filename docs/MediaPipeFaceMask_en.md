# Documentation
- Class name: MediaPipeFaceMask
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Draws a mask from face landmarks.

# Input types
## Required
- face_landmarks
    - The face_landmarks input is used by this node during execution.
    - Comfy dtype: FACE_LANDMARKS
    - Python dtype: object
- regions
    - 'all' = union of face_oval+lips+eyes+irises (which collapses to face_oval since it encloses the rest). 'custom' = toggle each region individually for combos like lips+eyes.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

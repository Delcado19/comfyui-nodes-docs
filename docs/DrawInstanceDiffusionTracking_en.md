# Documentation
- Class name: DrawInstanceDiffusionTracking
- Category: KJNodes/InstanceDiffusion
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Draws the tracking data from  
CreateInstanceDiffusionTracking -node.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tracking
    - The tracking input is used by this node during execution.
    - Comfy dtype: TRACKING
    - Python dtype: object
- box_line_width
    - The box_line_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- draw_text
    - The draw_text input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- font
    - The font input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- font_size
    - The font_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

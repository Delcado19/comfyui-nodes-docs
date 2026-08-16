# Documentation
- Class name: DrawNLFPoses
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- poses
    - Input poses for the model
    - Comfy dtype: NLFPRED
    - Python dtype: object
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- stick_width
    - Stick width multiplier
    - Comfy dtype: FLOAT
    - Python dtype: float
- point_radius
    - Point radius for drawing the pose
    - Comfy dtype: INT
    - Python dtype: int
- style
    - style of the pose drawing
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: easy applyPowerPaint
- Category: EasyUse/Inpaint
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- pipe
    - The pipe input is used by this node during execution.
    - Comfy dtype: PIPE_LINE
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- powerpaint_model
    - The powerpaint_model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- powerpaint_clip
    - The powerpaint_clip input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dtype
    - The dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fitting
    - The fitting input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- function
    - The function input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - The start_at input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_at
    - The end_at input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- save_memory
    - The save_memory input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- pipe
    - The pipe output is produced by this node.
    - Comfy dtype: PIPE_LINE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

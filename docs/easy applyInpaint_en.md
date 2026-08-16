# Documentation
- Class name: easy applyInpaint
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
- inpaint_mode
    - The inpaint_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- encode
    - The encode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- grow_mask_by
    - The grow_mask_by input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
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
## Optional
- noise_mask
    - The noise_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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

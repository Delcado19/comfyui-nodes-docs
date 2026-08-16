# Documentation
- Class name: CFGZeroStarAndInit
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

https://github.com/WeichenFan/CFG-Zero-star

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- use_zero_init
    - The use_zero_init input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- zero_init_steps
    - for zero init, starts from 0 so first step is always zeroed out if use_zero_init enabled
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

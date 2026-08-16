# Documentation
- Class name: EasyCache
- Category: advanced/debug
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Native EasyCache implementation.

# Input types
## Required
- model
    - The model to add EasyCache to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- reuse_threshold
    - The threshold for reusing cached steps.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The relative sampling step to begin use of EasyCache.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The relative sampling step to end use of EasyCache.
    - Comfy dtype: FLOAT
    - Python dtype: float
- verbose
    - Whether to log verbose information.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The model with EasyCache.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

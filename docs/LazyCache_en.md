# Documentation
- Class name: LazyCache
- Category: advanced/debug
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

A homebrew version of EasyCache - even 'easier' version of EasyCache to implement. Overall works worse than EasyCache, but better in some rare cases AND universal compatibility with everything in ComfyUI.

# Input types
## Required
- model
    - The model to add LazyCache to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- reuse_threshold
    - The threshold for reusing cached steps.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The relative sampling step to begin use of LazyCache.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The relative sampling step to end use of LazyCache.
    - Comfy dtype: FLOAT
    - Python dtype: float
- verbose
    - Whether to log verbose information.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The model with LazyCache.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

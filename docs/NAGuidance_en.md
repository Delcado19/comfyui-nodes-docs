# Documentation
- Class name: NAGuidance
- Category: advanced/guidance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Applies Normalized Attention Guidance to models, enabling negative prompts on distilled/schnell models.

# Input types
## Required
- model
    - The model to apply NAG to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- nag_scale
    - The guidance scale factor. Higher values push further from the negative prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_alpha
    - Blending factor for the normalized attention. 1.0 is full replacement, 0.0 is no effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_tau
    - The nag_tau input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The patched model with NAG enabled.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

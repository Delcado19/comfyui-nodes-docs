# Documentation
- Class name: CFGOverride
- Category: model/sampling/guiders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Override cfg to a fixed value over a [start, end] percent (sigma) range. With multiple overrides, the one nearest the sampler wins on overlap.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

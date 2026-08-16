# Documentation
- Class name: APG
- Category: model/sampling/custom
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Adaptive Projected Guidance is a ComfyUI node registered by `comfy_extras.nodes_apg`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- eta
    - Controls the scale of the parallel guidance vector. Default CFG behavior at a setting of 1.
    - Comfy dtype: FLOAT
    - Python dtype: float
- norm_threshold
    - Normalize guidance vector to this value, normalization disable at a setting of 0.
    - Comfy dtype: FLOAT
    - Python dtype: float
- momentum
    - Controls a running average of guidance during diffusion, disabled at a setting of 0.
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

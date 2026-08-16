# Documentation
- Class name: TemporalScoreRescaling
- Category: model/patch/unet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

[Post-CFG Function]
TSR - Temporal Score Rescaling (2510.01184)

Rescaling the model's score or noise to steer the sampling diversity.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tsr_k
    - Controls the rescaling strength.
Lower k produces more detailed results; higher k produces smoother results in image generation. Setting k = 1 disables rescaling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tsr_sigma
    - Controls how early rescaling takes effect.
Larger values take effect earlier.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- patched_model
    - The patched_model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

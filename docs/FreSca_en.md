# Documentation
- Class name: FreSca
- Category: experimental
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Applies frequency-dependent scaling to the guidance

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scale_low
    - Scaling factor for low-frequency components
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_high
    - Scaling factor for high-frequency components
    - Comfy dtype: FLOAT
    - Python dtype: float
- freq_cutoff
    - Number of frequency indices around center to consider as low-frequency
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
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: Flux2KleinColorAnchor
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- strength
    - Maximum correction strength. 0.3-0.6 is a good starting range. Too high and you override the model's color decisions entirely.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- ramp_curve
    - Controls the shape of the correction ramp. Formula: progress^(1/curve). 1.0 = linear. >1 = fast start, tapers off  (e.g. sqrt for curve=2). <1 = slow start, aggressive late  (e.g. squared for curve=0.5). For few-step schedules (4-8 steps) values of 2-4 work well because they reach useful strength quickly.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ref_index
    - Which reference latent to anchor colors from.
    - Comfy dtype: INT
    - Python dtype: int
- channel_weights
    - uniform: correct all channels equally. by_variance: weight correction by how stable each channel's mean is in the reference (low-variance channels trusted more).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- debug
    - The debug input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

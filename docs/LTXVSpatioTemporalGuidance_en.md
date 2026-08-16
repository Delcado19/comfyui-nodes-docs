# Documentation
- Class name: LTXVSpatioTemporalGuidance
- Category: advanced/guidance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Runs one extra pass per step with the self-attention of the selected blocks degraded to a value-passthrough, then guides away from it - improving spatial detail and motion coherence.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blocks
    - Comma-separated transformer block indices to perturb.
    - Comfy dtype: STRING
    - Python dtype: str
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

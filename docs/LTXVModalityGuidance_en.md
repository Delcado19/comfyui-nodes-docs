# Documentation
- Class name: LTXVModalityGuidance
- Category: advanced/guidance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Cross-modal (audio-video) guidance for LTXV-AV. Runs one extra forward pass per step with the a2v/v2a cross-attention severed, then pushes the result toward the coupled prediction - strengthening audio-visual sync (e.g. lip-sync). Reference default modality_scale is 3.0. Stacks with the dual-CFG guider and STG. Set to 1.0 to disable (no extra pass).

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- modality_scale
    - The modality_scale input is used by this node during execution.
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

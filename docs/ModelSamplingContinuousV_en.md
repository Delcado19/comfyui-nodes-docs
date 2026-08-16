# Documentation
- Class name: ModelSamplingContinuousV
- Category: model/patch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ModelSamplingContinuousV is a ComfyUI node registered by `comfy_extras.nodes_model_advanced`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- sampling
    - The sampling input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sigma_max
    - The sigma_max input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigma_min
    - The sigma_min input is used by this node during execution.
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

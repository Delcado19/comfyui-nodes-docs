# Documentation
- Class name: SamplingPercentToSigma
- Category: model/sampling/sigmas
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SamplingPercentToSigma is a ComfyUI node registered by `comfy_extras.nodes_custom_sampler`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- sampling_percent
    - The sampling_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- return_actual_sigma
    - Return the actual sigma value instead of the value used for interval checks.
This only affects results at 0.0 and 1.0.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sigma_value
    - The sigma_value output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

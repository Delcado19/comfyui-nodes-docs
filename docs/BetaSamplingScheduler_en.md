# Documentation
- Class name: BetaSamplingScheduler
- Category: model/sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

BetaSamplingScheduler is a ComfyUI node registered by `comfy_extras.nodes_custom_sampler`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beta
    - The beta input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SIGMAS
    - The SIGMAS output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

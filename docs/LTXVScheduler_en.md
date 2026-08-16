# Documentation
- Class name: LTXVScheduler
- Category: model/sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LTXVScheduler is a ComfyUI node registered by `comfy_extras.nodes_lt`. The live metadata did not provide a longer description.

# Input types
## Required
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_shift
    - The max_shift input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- base_shift
    - The base_shift input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- stretch
    - Stretch the sigmas to be in the range [terminal, 1].
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- terminal
    - The terminal value of the sigmas after stretching.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

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

# Documentation
- Class name: DualModelGuider
- Category: model/sampling/guiders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Dual Model CFG Guider is a ComfyUI node registered by `comfy_extras.nodes_custom_sampler`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - Model used for the positive (conditional) pass.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- model_negative
    - Model used for the negative (unconditional) pass. Use the same model for ordinary CFG.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- negative
    - Negative conditioning run on the negative model. Leave unconnected for a text-free (image-only) unconditional pass.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Output types
- GUIDER
    - The GUIDER output is produced by this node.
    - Comfy dtype: GUIDER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

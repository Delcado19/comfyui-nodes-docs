# Documentation
- Class name: ConditioningSetProperties
- Category: advanced/hooks/cond single
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Cond Set Props is a ComfyUI node registered by `comfy_extras.nodes_hooks`. The live metadata did not provide a longer description.

# Input types
## Required
- cond_NEW
    - The cond_NEW input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - The set_cond_area input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- hooks
    - The hooks input is used by this node during execution.
    - Comfy dtype: HOOKS
    - Python dtype: object
- timesteps
    - The timesteps input is used by this node during execution.
    - Comfy dtype: TIMESTEPS_RANGE
    - Python dtype: object

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

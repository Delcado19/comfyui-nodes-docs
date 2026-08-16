# Documentation
- Class name: PairConditioningSetProperties
- Category: advanced/hooks/cond pair
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Cond Pair Set Props is a ComfyUI node registered by `comfy_extras.nodes_hooks`. The live metadata did not provide a longer description.

# Input types
## Required
- positive_NEW
    - The positive_NEW input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative_NEW
    - The negative_NEW input is used by this node during execution.
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
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

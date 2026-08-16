# Documentation
- Class name: CFGNorm
- Category: advanced/guidance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

CFGNorm is a ComfyUI node registered by `comfy_extras.nodes_cfg`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- pre_cfg
    - If true, rescale the combined noise BEFORE the sampler's CFG combine, without clamping (can amplify). Matches the norm-scaled CFG used by models like Lens. Default false keeps the original post-CFG x0-space attenuate-only behavior.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- patched_model
    - The patched_model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

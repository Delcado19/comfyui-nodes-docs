# Documentation
- Class name: SpotDiffusionParams_TiledDiffusion
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI-TiledDiffusion

SpotDiffusion Parameters is a ComfyUI node registered by `custom_nodes.ComfyUI-TiledDiffusion`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- shift_method
    - Samples a shift size over a uniform distribution to shift tiles.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/shiimizu/ComfyUI-TiledDiffusion)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

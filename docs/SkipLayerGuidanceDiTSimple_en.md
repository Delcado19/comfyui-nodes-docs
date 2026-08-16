# Documentation
- Class name: SkipLayerGuidanceDiTSimple
- Category: advanced/guidance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Simple version of the SkipLayerGuidanceDiT node that only modifies the uncond pass.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- double_layers
    - The double_layers input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- single_layers
    - The single_layers input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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

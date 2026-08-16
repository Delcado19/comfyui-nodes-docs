# Documentation
- Class name: PlotParameters+
- Category: essentials/sampling
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Essential nodes that are weirdly missing from ComfyUI core. With few exceptions they are new features and not commodities.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- params
    - The params input is used by this node during execution.
    - Comfy dtype: SAMPLER_PARAMS
    - Python dtype: object
- order_by
    - The order_by input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cols_value
    - The cols_value input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cols_num
    - The cols_num input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- add_prompt
    - The add_prompt input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- add_params
    - The add_params input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

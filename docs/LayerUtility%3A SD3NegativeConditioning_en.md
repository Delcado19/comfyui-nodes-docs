# Documentation
- Class name: SD3NegativeConditioning
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Encapsulate the 4 nodes of SD3's Negative Conditioning into a single node.

# Input types

## Required

- conditioning
    - Input conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

- zero_out_start
    - Set the ConditioningSetTimestepRange start value of Negative ConditioningZeroOut, which is the same as the ConditioningSetTimestepRange end value of Negative.
    - Comfy dtype: FLOAT
    - Python dtype: float


# Output types

- CONDITIONING
    - Output conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

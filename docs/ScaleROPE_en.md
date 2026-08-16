# Documentation
- Class name: ScaleROPE
- Category: model/patch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Scale and shift the ROPE of the model.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scale_x
    - The scale_x input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shift_x
    - The shift_x input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_y
    - The scale_y input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shift_y
    - The shift_y input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_t
    - The scale_t input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shift_t
    - The shift_t input is used by this node during execution.
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

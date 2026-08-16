# Documentation
- Class name: ProPostApplyLUT
- Category: Pro Post/Color Grading
- Output node: False
- Repo Ref: https://github.com/digitaljohn/comfyui-propost

A set of custom ComfyUI nodes for performing basic post-processing effects including Film Grain and Vignette. These effects can help to take the edge off AI imagery and make them feel more natural.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- lut_name
    - The lut_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- log
    - The log input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/digitaljohn/comfyui-propost)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

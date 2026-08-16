# Documentation
- Class name: ProPostFilmGrain
- Category: Pro Post/Camera Effects
- Output node: False
- Repo Ref: https://github.com/digitaljohn/comfyui-propost

A set of custom ComfyUI nodes for performing basic post-processing effects including Film Grain and Vignette. These effects can help to take the edge off AI imagery and make them feel more natural.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- gray_scale
    - The gray_scale input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- grain_type
    - The grain_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- grain_sat
    - The grain_sat input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- grain_power
    - The grain_power input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shadows
    - The shadows input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highs
    - The highs input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sharpen
    - The sharpen input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- src_gamma
    - The src_gamma input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

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

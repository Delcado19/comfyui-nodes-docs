# Documentation
- Class name: CustomControlNetWeightsFluxFromList
- Category: KJNodes/controlnet
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Creates controlnet weights from a list of floats for Advanced-ControlNet

# Input types
## Required
- list_of_floats
    - The list_of_floats input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- uncond_multiplier
    - The uncond_multiplier input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cn_extras
    - The cn_extras input is used by this node during execution.
    - Comfy dtype: CN_WEIGHTS_EXTRAS
    - Python dtype: object
- autosize
    - The autosize input is used by this node during execution.
    - Comfy dtype: ACNAUTOSIZE
    - Python dtype: object

# Output types
- CN_WEIGHTS
    - The CN_WEIGHTS output is produced by this node.
    - Comfy dtype: CONTROL_NET_WEIGHTS
    - Python dtype: object
- TK_SHORTCUT
    - The TK_SHORTCUT output is produced by this node.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

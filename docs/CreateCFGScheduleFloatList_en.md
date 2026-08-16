# Documentation
- Class name: CreateCFGScheduleFloatList
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Helper node to generate a list of floats that can be used to schedule cfg scale for the steps, outside the set range cfg is set to 1.0

# Input types
## Required
- steps
    - Number of steps to schedule cfg for
    - Comfy dtype: INT
    - Python dtype: int
- cfg_scale_start
    - CFG scale to use for the steps
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_scale_end
    - CFG scale to use for the steps
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation
    - Interpolation method to use for the cfg scale
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_percent
    - Start percent of the steps to apply cfg
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percent of the steps to apply cfg
    - Comfy dtype: FLOAT
    - Python dtype: float
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- float_list
    - The float_list output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

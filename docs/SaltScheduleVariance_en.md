
# Documentation
- Class name: SaltScheduleVariance
- Category: SALT/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltScheduleVariance node creates a varied output by applying noise-based jitter and easing functions to a schedule list. This process enhances the dynamic range and visual appeal of scheduled events or animations by introducing controlled randomness and smooth transitions.

# Input types
## Required
- schedule_list
    - The main schedule value list that needs to be processed for variation. It serves as the basis for applying noise adjustments and easing functions, directly affecting the variation and dynamics of the output.
    - Comfy dtype: LIST
    - Python dtype: List[float]
## Optional
- curves_mode
    - Specifies the type of easing function to apply, enhancing the schedule list with smooth transitions. This parameter allows customization of the variation effect according to specific aesthetic or functional requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_perlin_tremors
    - A boolean flag that determines whether to apply noise-based jitter to the schedule list, introducing a layer of controlled randomness to the variation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tremor_scale
    - Adjusts the intensity of the noise-based jitter applied to the schedule list, allowing fine-tuning of the impact on the variation effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- octaves
    - Defines the number of noise layers used to create jitter, affecting the complexity and texture of the variation.
    - Comfy dtype: INT
    - Python dtype: int
- persistence
    - Controls the reduction of amplitude in the noise octaves, affecting the smoothness and subtlety of the jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lacunarity
    - Determines the increase in frequency in the noise octaves, affecting the detail and scale of the jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- schedule_list
    - The resulting list after applying noise-based jitter and easing functions to the input schedule list, showing enhanced variation and dynamics.
    - Comfy dtype: LIST
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

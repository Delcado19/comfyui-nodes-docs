
# Documentation
- Class name: SaltFloatScheduler
- Category: SALT/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltFloatScheduler node creates and manages float schedules, which are sequences of float values used to control various parameters over time. This node enables precise scheduling of float values, allowing dynamic adjustment and temporal control of parameters in audio-visual projects.

# Input types
## Required
- repeat_sequence_times
    - Specifies how many times the sequence should repeat, extending the schedule's length.
    - Comfy dtype: INT
    - Python dtype: int
- curves_mode
    - Determines the curve application mode for the schedule, affecting the shape and progression of values.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_perlin_tremors
    - Indicates whether Perlin noise is applied to the schedule to generate natural, smooth variations in float values.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tremor_scale
    - Sets the scale of Perlin tremor, controlling the frequency of the applied noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tremor_octaves
    - Specifies the number of octaves for Perlin noise, affecting the level of detail in the tremor.
    - Comfy dtype: INT
    - Python dtype: int
- tremor_persistence
    - Determines the persistence of Perlin noise, affecting the amplitude of each octave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tremor_lacunarity
    - Controls the lacunarity of Perlin noise, affecting the frequency growth of each octave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sequence
    - The initial sequence of float values to be scheduled and potentially modified by node operations.
    - Comfy dtype: STRING
    - Python dtype: List[float]
## Optional
- max_sequence_length
    - The maximum allowed length of the sequence, ensuring the schedule stays within predefined bounds.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- schedule_list
    - The resulting list of float values after scheduling operations, representing the modified or generated schedule.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- schedule_length
    - The length of the generated or modified schedule list, representing the total number of scheduled values.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

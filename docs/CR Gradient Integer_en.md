# Documentation
- Class name: CR_GradientInteger
- Category: Comfyroll/Animation/Interpolate
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_GradientInteger node provides a method to interpolate between two integer values over a specified duration, using a start frame and frame duration. It is designed to offer a smooth transition from the start value to the end value, which is especially useful in animation and time-based visual effects.

# Input types
## Required
- start_value
- The starting integer value, from which interpolation begins. It is essential for establishing the initial condition of the transition.
    - Comfy dtype: INT
    - Python dtype: int
- end_value
- The ending integer value that interpolation aims to reach. It defines the final state of the transition after the frame duration.
    - Comfy dtype: INT
    - Python dtype: int
- start_frame
- The frame number at which interpolation should start. It is crucial for synchronizing the transition with the timeline of an animation or sequence.
    - Comfy dtype: INT
    - Python dtype: int
- frame_duration
- The total number of frames over which interpolation occurs. It determines the length of the transition between the start and end values.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
- The current frame in the sequence being interpolated. It is used to calculate the current step of the transition.
    - Comfy dtype: INT
    - Python dtype: int
- gradient_profile
- The interpolation profile, which defines the rate of change between the start and end values. It influences how the transition progresses over time.
    - Comfy dtype: COMBO['Lerp']
    - Python dtype: str

# Output types
- INT
- The interpolated integer value for the current frame, which is the result of the transition between the start and end values.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
- A URL string providing additional documentation or help for the interpolation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

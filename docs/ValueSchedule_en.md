# Documentation
- Class name: ValueSchedule
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The ValueSchedule node is designed to animate and interpolate based on a given keyframe text representation. It parses the input text to determine keyframe values, then interpolates between these keyframes to produce smooth value transitions over a specified number of frames.

# Input types
## Required
- text
    - The 'text' parameter is a string containing keyframe definitions used to animate values. It is essential to the node's operation as it directly affects the output animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- max_frames
    - The 'max_frames' parameter specifies the total number of frames over which the animation occurs. It is critical for determining the interpolation range.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The 'current_frame' parameter represents the current position in the animation sequence. It is important for calculating the interpolation of the animation's current state.
    - Comfy dtype: INT
    - Python dtype: int
- print_output
    - When set to True, the 'print_output' parameter enables printing the current frame and its interpolation to the console. This is useful for debugging.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- value
    - The 'value' output represents the interpolation of the current frame. This is the primary output of the node and is essential for continuing the animation or further processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_number
    - The 'frame_number' output provides the current frame index in the animation sequence. It can be used to track the progress of the animation.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: CR_IncrementInteger
- Category: Comfyroll/Animation/Interpolate
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_IncrementInteger node is designed to increment an integer value over a specified frame duration starting from a given frame. It is particularly useful for creating animations where values need to increase progressively over time.

# Input types
## Required
- start_value
    - The start_value parameter defines the initial integer value from which the increment begins. It is crucial for setting the starting point of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- step
    - The step parameter specifies the amount by which start_value is incremented each frame. It determines the rate of change of the integer value throughout the animation.
    - Comfy dtype: INT
    - Python dtype: int
- start_frame
    - The start_frame parameter indicates the frame number at which the increment begins. It is essential for timing the start of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- frame_duration
    - The frame_duration parameter sets the number of frames over which the increment occurs. It determines the length of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The current_frame parameter represents the current frame number in the animation. It is used to calculate the current value of the integer based on the frame's progress.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- INT
    - The INT output provides the current incremented integer value, reflecting the animation's progress at the current frame.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The show_help output is a string containing a URL to the node's documentation, providing additional information and guidance on its usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

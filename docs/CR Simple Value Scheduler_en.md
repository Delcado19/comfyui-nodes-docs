# Documentation
- Class name: CR_SimpleValueScheduler
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleValueScheduler is a node that manages and interpolates keyframe schedules for value scheduling. It plays a crucial role in creating smooth transitions and dynamic changes between frames, offering users a simple and direct way to arrange and operate values over time.

# Input types
## Required
- schedule
- The schedule input is essential for defining keyframe values that change over time. It allows specifying different values at different frames, enabling the node to interpolate between them.
    - Comfy dtype: STRING
    - Python dtype: str
- current_frame
- The current_frame parameter indicates the current position in the animation timeline. It is vital for determining which scheduled value to apply at any given moment.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- INT
- The INT output provides an integer representation of the scheduled value for the current frame, usable for numerical operations in the animation pipeline.
    - Comfy dtype: INT
    - Python dtype: int
- FLOAT
- The FLOAT output offers a floating-point interpretation of the scheduled value, suitable for more precise calculations and adjustments during animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
- The show_help output supplies a documentation link for further guidance and assistance when using the CR_SimpleValueScheduler node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

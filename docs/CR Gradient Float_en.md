# Documentation
- Class name: CR_GradientFloat
- Category: Comfyroll/Animation/Interpolate
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_GradientFloat node is designed to generate a smooth transition between two float values over a specified duration. It calculates the current value based on the start and end values, the frame at which the transition begins, and the total duration of the transition. This node is particularly useful for creating dynamic changes in animation parameters over time.

# Input types
## Required
- start_value
    - The Start Value parameter defines the initial value of the gradient. It is essential for setting the base point from which the transition begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_value
    - The End Value parameter specifies the final value that the gradient will reach at the end of the transition. It is crucial for determining the range of the change.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_frame
    - The Start Frame parameter indicates the frame number at which the gradient transition will begin. It is important for timing the start of animation effects.
    - Comfy dtype: INT
    - Python dtype: int
- frame_duration
    - The Frame Duration parameter determines the number of frames over which the gradient transition occurs. It affects the speed of the transition.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The Current Frame parameter represents the current frame number in the sequence. It is used to calculate the current state of the gradient at this point in time.
    - Comfy dtype: INT
    - Python dtype: int
- gradient_profile
    - The Gradient Profile parameter defines the type of interpolation method used for the gradient. It influences how values between the start and end are calculated.
    - Comfy dtype: COMBO['Lerp']
    - Python dtype: str

# Output types
- FLOAT
    - The FLOAT output provides the calculated value of the gradient at the current frame, representing the current state of the transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The show_help output provides a URL to the node's documentation page, offering additional information and guidance on its usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

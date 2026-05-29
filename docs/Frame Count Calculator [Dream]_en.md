
# Documentation
- Class name: Frame Count Calculator [Dream]
- Category: ✨ Dream/🎥 animation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Frame Count Calculator node calculates the total number of frames based on a given time duration and frame rate. It accounts for hours, minutes, seconds, and milliseconds to provide precise frame count calculations, essential for animation and video processing tasks where timing and synchronization are critical.

# Input types
## Required
- hours
    - Specifies the number of hours to include in the total time duration for frame count calculation. It directly affects the total frame count by contributing to the overall time.
    - Comfy dtype: INT
    - Python dtype: int
- minutes
    - Specifies the number of minutes to include in the total time duration. This parameter, along with others, determines the total frame count by contributing to the overall time.
    - Comfy dtype: INT
    - Python dtype: int
- seconds
    - Defines the number of seconds to consider in the total time duration. This is critical for calculating precise frame counts, especially in short films or animations.
    - Comfy dtype: INT
    - Python dtype: int
- milliseconds
    - Includes milliseconds in the total time calculation, allowing for more precise frame count calculations in scenarios requiring high accuracy.
    - Comfy dtype: INT
    - Python dtype: int
- frames_per_second
    - Sets the frame rate per second, used to calculate the total frame count based on the provided time duration. This parameter is crucial for determining the smoothness and quality of animations or videos.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- TOTAL
    - The total number of frames calculated based on the input time duration and frame rate. This output is essential for planning and synchronizing animation or video sequences.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

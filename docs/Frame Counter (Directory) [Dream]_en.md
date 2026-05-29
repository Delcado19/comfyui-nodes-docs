
# Documentation
- Class name: Frame Counter (Directory) [Dream]
- Category: ✨ Dream/🎥 animation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node calculates the frame count from images found in a specified directory, matching a given pattern, and sorted numerically or alphabetically. It is particularly useful in animation projects where tracking frame progress is required.

# Input types
## Required
- directory_path
    - Specify the directory path containing the images to count. This path is essential for locating and processing the images.
    - Comfy dtype: STRING
    - Python dtype: str
- pattern
    - Define the pattern used to match files in the directory (e.g., '*.jpg'). This pattern determines which files are included in the frame count.
    - Comfy dtype: STRING
    - Python dtype: str
- indexing
    - Determines the order of image indexing and counting, either numerically or alphabetically. This affects the sequence of frame counting.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- total_frames
    - Set the maximum number of frames to count, providing a limit for the frame counting process.
    - Comfy dtype: INT
    - Python dtype: int
- frames_per_second
    - Specify the frame rate, used to calculate the duration of the animation based on the frame count.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frame_counter
    - Outputs a FrameCounter object, encapsulating the current frame count, total frames, and frames per second.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*


# Documentation
- Class name: FFMPEG Video Encoder [Dream]
- Category: ✨ Dream/🎥 animation/⚙ postprocessing
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FFMPEG Video Encoder node encodes a series of images into a video file using FFMPEG. It allows frame rate adjustment, optional deletion of source images after encoding, and handles file naming to avoid overwriting, facilitating video creation from individual frames.

# Input types
## Required
- sequence
    - Represents the image sequence to be encoded into video. It is crucial for defining the content and order of frames in the final video output.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence
- name
    - Specifies the base name of the output video file, which can be further adjusted to avoid filename conflicts.
    - Comfy dtype: STRING
    - Python dtype: str
- framerate_factor
    - Multiplier for the sequence frame rate, allowing adjustment of the resulting video speed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- remove_images
    - Determines whether to delete source images after encoding, helping manage disk space.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- log_entry
    - Provides a log entry that records the encoding process and results in detail, including any errors encountered.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

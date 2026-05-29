
# Documentation
- Class name: Image Sequence Saver [Dream]
- Category: ✨ Dream/🌄 image/🎥 animation
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Image Sequence Saver node saves individual frames of an animation sequence to disk, supporting multiple file formats and configuration options. It allows detailed control over naming conventions, directory structure, and file format, facilitating an organized and easily accessible animation frame library.

# Input types
## Required
- frame_counter
- Specify the current frame in the animation sequence to determine the filename and, based on the 'at_end' parameter, decide whether to continue the saving process.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- image
- Provide the image to save for the current frame, representing a single snapshot in the animation sequence.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage
- directory_path
- Define the target directory path where image files will be saved, enabling organized storage of animation frames.
    - Comfy dtype: STRING
    - Python dtype: str
- prefix
- Add a prefix to each saved image filename, helping identify and organize frames within the directory.
    - Comfy dtype: STRING
    - Python dtype: str
- digits
- Set the number of digits for zero‑padding the frame number in the filename, ensuring consistent naming conventions.
    - Comfy dtype: INT
    - Python dtype: int
- at_end
- Determine the behavior when the end of the animation sequence is reached, offering options to stop output, raise an error, or continue execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- filetype
- Specify the file format for saved images, including PNG with or without embedded workflow information and JPG options.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- sequence
- Output the updated animation sequence after saving the current frame, reflecting any changes or additions.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence.ID
- log_entry
- Log entries detail the result of the save operation, including success messages or error information.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry.ID


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: VideoCombine
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: True
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

combine_video method aims to merge a series of images into a video format. It processes various parameters such as frame rate, loop count, and file format to create customized video output. This method can generate videos in formats like GIF and WebP, and also supports audio integration.

# Input types
## Required
- images
    - images parameter is the sequence of image data that constitutes the visual content of the video. It is crucial because it determines the frames of the final video output.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- frame_rate
    - frame_rate parameter sets the number of frames per second of the video, affecting the speed of video playback.
    - Comfy dtype: FLOAT
    - Python dtype: int
- loop_count
    - loop_count determines the number of times the video repeats. A value of 0 means the video will not loop.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- filename_prefix
    - filename_prefix is used to create a unique identifier for the output video file, aiding in file management.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - format parameter specifies the format of the output video. It can be an image format like GIF or WebP, or a custom video format.
    - Comfy dtype: COMBO[image/gif, image/webp, video/...]
    - Python dtype: str
- pingpong
    - pingpong parameter, when set to True, creates a ping-pong effect by reversing the order of alternating frames.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- save_output
    - save_output parameter indicates whether the resulting video should be saved to the output directory.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- Filenames
    - Filenames output provides the path to the generated video file, allowing users to access and use it as needed.
    - Comfy dtype: VHS_FILENAMES
    - Python dtype: Tuple[bool, List[str]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

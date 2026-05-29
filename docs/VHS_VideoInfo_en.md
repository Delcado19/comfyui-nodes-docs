# Documentation
- Class name: VideoInfo
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The 'get_video_info' method of the VideoInfo node aims to extract and return key video information from the provided video information dictionary. It focuses on providing a concise set of video attributes, such as frame rate, frame count, duration, and dimensions, applicable to both the source state and the loaded state of the video. This method serves as a tool to standardize and simplify the process of accessing video metadata, which is essential for various video processing tasks.

# Input types
## Required
- video_info
    - The 'video_info' parameter is crucial because it is the source of video metadata required by the node. It contains detailed attributes of the video, such as frame rate, frame count, and dimensions, both in the original state and the loaded state. This parameter is essential for the node to perform its function of extracting and providing video information.
    - Comfy dtype: VHS_VIDEOINFO
    - Python dtype: Dict[str, Union[float, int]]

# Output types
- source_fps
    - The 'source_fps' output provides the frames per second of the original video source, which is a fundamental parameter for understanding video playback speed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- source_frame_count
    - The 'source_frame_count' output indicates the total number of frames in the original video, providing insight into the video length in terms of frame composition.
    - Comfy dtype: INT
    - Python dtype: int
- source_duration
    - The 'source_duration' output represents the duration of the original video in seconds, allowing evaluation of the video's length.
    - Comfy dtype: FLOAT
    - Python dtype: float
- source_width
    - The 'source_width' output provides the width of the video in pixels, which is one of the key dimensions of video resolution.
    - Comfy dtype: INT
    - Python dtype: int
- source_height
    - The 'source_height' output specifies the height of the video in pixels, which together with the width defines the video resolution.
    - Comfy dtype: INT
    - Python dtype: int
- loaded_fps
    - The 'loaded_fps' output represents the frames per second after loading, which may differ from the source due to processing or playback adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- loaded_frame_count
    - The 'loaded_frame_count' output reflects the total number of frames after loading, which may be affected by video processing operations.
    - Comfy dtype: INT
    - Python dtype: int
- loaded_duration
    - The 'loaded_duration' output represents the duration after loading, which may differ from the original video due to playback speed changes or editing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- loaded_width
    - The 'loaded_width' output provides the width after loading, which may differ from the source due to scaling or resizing operations.
    - Comfy dtype: INT
    - Python dtype: int
- loaded_height
    - The 'loaded_height' output specifies the height after loading, which may differ from the source dimensions due to video processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

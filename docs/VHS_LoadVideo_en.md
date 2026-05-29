# Documentation
- Class name: LoadVideoUpload
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The LoadVideoUpload node is designed to efficiently manage and process video files. It can load videos from various sources, including local files and URLs, and provides upsampling and video frame manipulation capabilities. The node ensures that video data is correctly formatted and ready for subsequent processing stages.

# Input types
## Required
- video
    - The 'video' parameter is crucial because it specifies the source of the video file to be processed. It can be a path to a local file or a URL to an online video. This parameter directly affects the node's ability to load and access video content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- force_rate
    - The 'force_rate' parameter allows adjustment of the video's frame rate. This optional setting can be used to ensure consistent frame rates across different videos, which is important for certain video processing tasks.
    - Comfy dtype: INT
    - Python dtype: int
- force_size
    - The 'force_size' parameter specifies the desired resolution of video frames. It offers several preset options and allows custom dimensions, which may be necessary to maintain aspect ratio or meet specific display requirements.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_width
    - When custom video dimensions are needed, 'custom_width' sets the width of video frames. This important parameter is used in video resizing operations to ensure the video fits the required width constraints.
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - The 'custom_height' parameter complements 'custom_width' by setting the height of video frames. It plays a key role in video resizing, especially when the content requires specific height requirements.
    - Comfy dtype: INT
    - Python dtype: int
- frame_load_cap
    - The 'frame_load_cap' parameter determines the maximum number of frames loaded from the video. It helps control memory usage and processing time, particularly when handling long videos.
    - Comfy dtype: INT
    - Python dtype: int
- skip_first_frames
    - The 'skip_first_frames' parameter allows the node to skip a specified number of frames at the beginning of the video. This is useful for omitting unwanted content or intros from the video processing workflow.
    - Comfy dtype: INT
    - Python dtype: int
- select_every_nth
    - The 'select_every_nth' parameter selects frames from the video at regular intervals. It helps reduce frame rate or create summaries of video content.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The 'IMAGE' output provides video frames as tensors, which are multi-dimensional arrays suitable for further video analysis and processing.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor
- frame_count
    - The 'frame_count' output indicates the total number of frames loaded from the video, which is essential for understanding the scope of the video data.
    - Comfy dtype: INT
    - Python dtype: int
- audio
    - The 'audio' output is a function that, when called, provides access to the video's audio stream. This can be used for audio analysis or combined with video frames for further processing.
    - Comfy dtype: FUNCTION
    - Python dtype: Callable[[], Any]
- video_info
    - The 'video_info' output contains metadata about the video, such as frame rate, duration, and dimensions. This information is valuable for various video processing tasks that require an understanding of video characteristics.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Union[int, float, str]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

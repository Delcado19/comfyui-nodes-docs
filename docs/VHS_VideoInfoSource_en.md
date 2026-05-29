# Documentation
- Class name: VideoInfoSource
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

This node extracts and provides basic information about a video source, such as frames per second, total frames, duration, and dimensions. It is an important tool for understanding and further processing and analyzing the foundational properties of video data.

# Input types
## Required
- video_info
    - video_info parameter is a structured object containing metadata of a video source. It is crucial for the node to run correctly and provide accurate video information, as it directly affects the extracted data and subsequent analysis.
    - Comfy dtype: VHS_VIDEOINFO
    - Python dtype: VHS_VIDEOINFO

# Output types
- fps
    - fps output represents the frames per second of the video, a key parameter for video playback and editing, affecting smoothness and temporal resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_count
    - frame_count output indicates the total number of frames in the video, important for video processing tasks such as frame extraction, animation, and frame-based analysis.
    - Comfy dtype: INT
    - Python dtype: int
- duration
    - duration output provides the total length of the video in seconds, a key factor for planning video-related tasks and understanding the time scope of the content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - width output represents the horizontal resolution of the video, crucial for ensuring correct display and scaling of video content.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - height output represents the vertical resolution of the video, an important aspect for maintaining aspect ratio and visual quality during video processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class VideoInfoSource:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'video_info': ('VHS_VIDEOINFO',)}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢'
    RETURN_TYPES = ('FLOAT', 'INT', 'FLOAT', 'INT', 'INT')
    RETURN_NAMES = ('fps🟨', 'frame_count🟨', 'duration🟨', 'width🟨', 'height🟨')
    FUNCTION = 'get_video_info'

    def get_video_info(self, video_info):
        keys = ['fps', 'frame_count', 'duration', 'width', 'height']
        source_info = []
        for key in keys:
            source_info.append(video_info[f'source_{key}'])
        return (*source_info,)
```
# Documentation
- Class name: VideoInfoLoaded
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The 'get_video_info' method of the VideoInfoLoaded node aims to extract and return key information of the video, including frames per second (fps), frame count, duration, width, and height. This node plays a key role in providing a structured summary of video metadata, which is crucial for further video processing and analysis tasks.

# Input types
## Required
- video_info
    - The 'video_info' parameter is a key input for the VideoInfoLoaded node because it contains the loaded video metadata required for the node to run. It directly affects the node's ability to extract and return accurate video information.
    - Comfy dtype: VHS_VIDEOINFO
    - Python dtype: Dict[str, Union[float, int]]

# Output types
- fps
    - The 'fps' output represents the frames per second of the video, a key parameter for understanding video playback speed, crucial for video editing and playback compatibility.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_count
    - The 'frame_count' output provides the total number of frames in the video, which is crucial for estimating the video duration and for various analysis and processing workflows.
    - Comfy dtype: INT
    - Python dtype: int
- duration
    - The 'duration' output represents the total length of the video in seconds, a basic information used for timing and synchronization in video production.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - The 'width' output indicates the width of the video in pixels, which together with the height determines the aspect ratio of the video, important for display and format considerations.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' output specifies the height of the video in pixels, complementing the width to define the overall resolution of the video, a key factor for visual clarity.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class VideoInfoLoaded:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'video_info': ('VHS_VIDEOINFO',)}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢'
    RETURN_TYPES = ('FLOAT', 'INT', 'FLOAT', 'INT', 'INT')
    RETURN_NAMES = ('fps🟦', 'frame_count🟦', 'duration🟦', 'width🟦', 'height🟦')
    FUNCTION = 'get_video_info'

    def get_video_info(self, video_info):
        keys = ['fps', 'frame_count', 'duration', 'width', 'height']
        loaded_info = []
        for key in keys:
            loaded_info.append(video_info[f'loaded_{key}'])
        return (*loaded_info,)
```
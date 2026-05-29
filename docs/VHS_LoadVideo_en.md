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
```
class LoadVideoUpload:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = []
        for f in os.listdir(input_dir):
            if os.path.isfile(os.path.join(input_dir, f)):
                file_parts = f.split('.')
                if len(file_parts) > 1 and file_parts[-1] in video_extensions:
                    files.append(f)
        return {'required': {'video': (sorted(files),), 'force_rate': ('INT', {'default': 0, 'min': 0, 'max': 60, 'step': 1}), 'force_size': (['Disabled', 'Custom Height', 'Custom Width', 'Custom', '256x?', '?x256', '256x256', '512x?', '?x512', '512x512'],), 'custom_width': ('INT', {'default': 512, 'min': 0, 'max': DIMMAX, 'step': 8}), 'custom_height': ('INT', {'default': 512, 'min': 0, 'max': DIMMAX, 'step': 8}), 'frame_load_cap': ('INT', {'default': 0, 'min': 0, 'max': BIGMAX, 'step': 1}), 'skip_first_frames': ('INT', {'default': 0, 'min': 0, 'max': BIGMAX, 'step': 1}), 'select_every_nth': ('INT', {'default': 1, 'min': 1, 'max': BIGMAX, 'step': 1})}, 'optional': {'meta_batch': ('VHS_BatchManager',)}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢'
    RETURN_TYPES = ('IMAGE', 'INT', 'VHS_AUDIO', 'VHS_VIDEOINFO')
    RETURN_NAMES = ('IMAGE', 'frame_count', 'audio', 'video_info')
    FUNCTION = 'load_video'

    def load_video(self, **kwargs):
        return load_video_cv(**kwargs)

    @classmethod
    def IS_CHANGED(s, video, **kwargs):
        image_path = folder_paths.get_annotated_filepath(video)
        return calculate_file_hash(image_path)

    @classmethod
    def VALIDATE_INPUTS(s, video, force_size, **kwargs):
        import requests
        if video.startswith('http'):
            resp = requests.head(video)
            if resp.status_code != 200:
                return 'Invalid video file: {}'.format(video)
        elif not folder_paths.exists_annotated_filepath(video):
            return 'Invalid video file: {}'.format(video)
        return True
```
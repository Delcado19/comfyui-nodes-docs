# Documentation
- Class name: WAS_Video_Frame_Dump
- Category: WAS Suite/Animation
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Video_Frame_Dump node is designed to process video files by extracting individual frames and saving them as image files. This utility is particularly suited for animation and video analysis workflows, allowing users to break down video content into a series of static images. The node can be configured to specify the video source, output directory, naming prefix for extracted frames, and the desired image format. Additionally, it provides options for setting the number of digits in file numbering and the ffmpeg binary path for advanced users. The node's functionality is encapsulated in its dump_video_frames method, which coordinates the frame extraction process and returns the path to the output directory along with the number of frames processed.

# Input types
## Required
- video_path
    - The video_path parameter specifies the file path of the video file from which frames are to be extracted. This input is critical as it determines the source content for the frame dump operation. The node uses this path to locate and process the video, making it a fundamental part of execution.
    - Comfy dtype: STRING
    - Python dtype: str
- output_path
    - The output_path parameter defines the directory where extracted frames will be saved. It is a required parameter as it determines the storage location for the resulting image files after the video frame extraction process. Users should ensure this directory is writable and has sufficient space for the output files.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prefix
    - The prefix parameter is used to define the naming convention for saved image files. It is an optional input that allows users to add a specific string at the beginning of each filename. This can be useful for organizing files or integrating with other systems that expect a certain naming pattern.
    - Comfy dtype: STRING
    - Python dtype: str
- filenumber_digits
    - The filenumber_digits parameter determines the number of digits used for zero-padding file numbering in saved image filenames. This is an optional setting that can be adjusted based on user preference or file naming consistency requirements. This parameter affects the format of output filenames.
    - Comfy dtype: INT
    - Python dtype: int
- extension
    - The extension parameter specifies the file format for extracted image frames. Users can choose from a combination of 'png', 'jpg', 'gif', or 'tiff'. This input affects the type of image files that will be generated, which may depend on the intended use of the extracted frames.
    - Comfy dtype: COMBO['png', 'jpg', 'gif', 'tiff']
    - Python dtype: str

# Output types
- output_path
    - The output_path parameter in the output reflects the directory where extracted frames are saved. It is important as it provides the location of the image files after the video frame dump process. This information is critical for users to locate and further process the output files.
    - Comfy dtype: STRING
    - Python dtype: str
- processed_count
    - The processed_count output parameter indicates the number of frames successfully extracted from the video. It serves as confirmation of the node's execution and can be used to verify the completeness of the frame extraction process.
    - Comfy dtype: NUMBER
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Video_Frame_Dump:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'video_path': ('STRING', {'default': './ComfyUI/input/MyVideo.mp4', 'multiline': False}), 'output_path': ('STRING', {'default': './ComfyUI/input/MyVideo', 'multiline': False}), 'prefix': ('STRING', {'default': 'frame_', 'multiline': False}), 'filenumber_digits': ('INT', {'default': 4, 'min': -1, 'max': 8, 'step': 1}), 'extension': (['png', 'jpg', 'gif', 'tiff'],)}}

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
    RETURN_TYPES = (TEXT_TYPE, 'NUMBER')
    RETURN_NAMES = ('output_path', 'processed_count')
    FUNCTION = 'dump_video_frames'
    CATEGORY = 'WAS Suite/Animation'

    def dump_video_frames(self, video_path, output_path, prefix='fame_', extension='png', filenumber_digits=-1):
        conf = getSuiteConfig()
        if not conf.__contains__('ffmpeg_bin_path'):
            cstr(f'Unable to use dump frames because the `ffmpeg_bin_path` is not set in `{WAS_CONFIG_FILE}`').error.print()
            return ('', 0)
        if conf.__contains__('ffmpeg_bin_path'):
            if conf['ffmpeg_bin_path'] != '/path/to/ffmpeg':
                sys.path.append(conf['ffmpeg_bin_path'])
                os.environ['OPENCV_FFMPEG_CAPTURE_OPTIONS'] = 'rtsp_transport;udp'
                os.environ['OPENCV_FFMPEG_BINARY'] = conf['ffmpeg_bin_path']
        if output_path.strip() in [None, '', '.']:
            output_path = './ComfyUI/input/frames'
        tokens = TextTokens()
        output_path = os.path.abspath(os.path.join(*tokens.parseTokens(output_path).split('/')))
        prefix = tokens.parseTokens(prefix)
        WTools = WAS_Tools_Class()
        MP4Writer = WTools.VideoWriter()
        processed = MP4Writer.extract(video_path, output_path, prefix, extension, filenumber_digits)
        return (output_path, processed)
```
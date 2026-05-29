# Documentation
- Class name: WAS_Video_Writer
- Category: WAS Suite/Animation/Writer
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Video_Writer node generates a video from a series of images. It offers adjusting transition frames, controlling frames per second (FPS), and setting delays between images. It can also resize images to a maximum dimension and encode the video with a specified codec. This node is ideal for creating animations or timelapse videos from input images.

# Input types
## Required
- image
- Input image sequence for the video creation process. This parameter is critical as it directly determines the video content.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- transition_frames
- Number of transition frames between images. Higher values yield smoother transitions but increase video length.
    - Comfy dtype: INT
    - Python dtype: int
- image_delay_sec
- Delay in seconds before each image transitions to the next. This affects playback speed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fps
- Frames per second of the output video. It determines smoothness and file size.
    - Comfy dtype: INT
    - Python dtype: int
- max_size
- Maximum dimension of the output video in pixels. Resizing may occur to meet this constraint.
    - Comfy dtype: INT
    - Python dtype: int
- output_path
- Directory path where the output video file will be saved.
    - Comfy dtype: STRING
    - Python dtype: str
- filename
- Desired name of the output video file.
    - Comfy dtype: STRING
    - Python dtype: str
- codec
- Codec used for video encoding. It influences format and compression.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE_PASS
- Sequence of linked images that form the video content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filepath_text
- File path where the video is saved.
    - Comfy dtype: TEXT
    - Python dtype: str
- filename_text
- Filename of the saved video.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Video_Writer:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        WTools = WAS_Tools_Class()
        v = WTools.VideoWriter()
        codecs = []
        for codec in v.get_codecs():
            codecs.append(codec.upper())
        codecs = sorted(codecs)
        return {'required': {'image': ('IMAGE',), 'transition_frames': ('INT', {'default': 30, 'min': 0, 'max': 120, 'step': 1}), 'image_delay_sec': ('FLOAT', {'default': 2.5, 'min': 0.1, 'max': 60000.0, 'step': 0.1}), 'fps': ('INT', {'default': 30, 'min': 1, 'max': 60.0, 'step': 1}), 'max_size': ('INT', {'default': 512, 'min': 128, 'max': 1920, 'step': 1}), 'output_path': ('STRING', {'default': './ComfyUI/output', 'multiline': False}), 'filename': ('STRING', {'default': 'comfy_writer', 'multiline': False}), 'codec': (codecs,)}}
    RETURN_TYPES = ('IMAGE', TEXT_TYPE, TEXT_TYPE)
    RETURN_NAMES = ('IMAGE_PASS', 'filepath_text', 'filename_text')
    FUNCTION = 'write_video'
    CATEGORY = 'WAS Suite/Animation/Writer'

    def write_video(self, image, transition_frames=10, image_delay_sec=10, fps=30, max_size=512, output_path='./ComfyUI/output', filename='morph', codec='H264'):
        conf = getSuiteConfig()
        if not conf.__contains__('ffmpeg_bin_path'):
            cstr(f'Unable to use MP4 Writer because the `ffmpeg_bin_path` is not set in `{WAS_CONFIG_FILE}`').error.print()
            return (image, '', '')
        if conf.__contains__('ffmpeg_bin_path'):
            if conf['ffmpeg_bin_path'] != '/path/to/ffmpeg':
                sys.path.append(conf['ffmpeg_bin_path'])
                os.environ['OPENCV_FFMPEG_CAPTURE_OPTIONS'] = 'rtsp_transport;udp'
                os.environ['OPENCV_FFMPEG_BINARY'] = conf['ffmpeg_bin_path']
        if output_path.strip() in [None, '', '.']:
            output_path = './ComfyUI/output'
        if image == None:
            image = pil2tensor(Image.new('RGB', (512, 512), (0, 0, 0)))
        if transition_frames < 0:
            transition_frames = 0
        elif transition_frames > 60:
            transition_frames = 60
        if fps < 1:
            fps = 1
        elif fps > 60:
            fps = 60
        results = []
        for img in image:
            print(img.shape)
            new_image = self.rescale_image(tensor2pil(img), max_size)
            print(new_image.size)
            tokens = TextTokens()
            output_path = os.path.abspath(os.path.join(*tokens.parseTokens(output_path).split('/')))
            output_file = os.path.join(output_path, tokens.parseTokens(filename))
            if not os.path.exists(output_path):
                os.makedirs(output_path, exist_ok=True)
            WTools = WAS_Tools_Class()
            MP4Writer = WTools.VideoWriter(int(transition_frames), int(fps), int(image_delay_sec), max_size=max_size, codec=codec)
            path = MP4Writer.write(new_image, output_file)
            results.append(img)
        return (torch.cat(results, dim=0), path, filename)

    def rescale_image(self, image, max_dimension):
        (width, height) = image.size
        if width > max_dimension or height > max_dimension:
            scaling_factor = max(width, height) / max_dimension
            new_width = int(width / scaling_factor)
            new_height = int(height / scaling_factor)
            image = image.resize((new_width, new_height), Image.Resampling(1))
        return image
```
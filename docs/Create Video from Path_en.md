
# Documentation
- Class name: Create Video from Path
- Category: WAS Suite/Animation
- Output node: False

This node creates videos from a sequence of images, supporting custom transitions, frame delays, and video properties such as frame rate and resolution. It uses computer vision techniques to generate smooth transitions between images, making it ideal for creating morphing effects or slideshows.

# Input types
## Required
- transition_frames
    - Specifies the number of frames used for transitions between images to achieve smooth morphing effects.
    - Comfy dtype: INT
    - Python dtype: int
- image_delay_sec
    - Determines the delay time (in seconds) before each image transitions to the next, controlling how long each image is displayed in the video.
    - Comfy dtype: FLOAT
    - Python dtype: int
- fps
    - Sets the output video's frame rate (fps), affecting smoothness and playback speed.
    - Comfy dtype: INT
    - Python dtype: int
- max_size
    - Defines the maximum dimension (in pixels) for image width or height, ensuring consistent video resolution.
    - Comfy dtype: INT
    - Python dtype: int
- input_path
    - The directory path where input images are located.
    - Comfy dtype: STRING
    - Python dtype: str
- output_path
    - The directory path where the output video will be saved.
    - Comfy dtype: STRING
    - Python dtype: str
- filename
    - The name of the output video file.
    - Comfy dtype: STRING
    - Python dtype: str
- codec
    - The codec used to encode the video, affecting compatibility and quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- filepath_text
    - Comfy dtype: STRING
    - The path to the created video file.
    - Python dtype: str
- filename_text
    - Comfy dtype: STRING
    - The name of the created video file, used to confirm output.
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class WAS_Create_Video_From_Path:
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
        return {
            "required": {
                "transition_frames": ("INT", {"default":30, "min":0, "max":120, "step":1}),
                "image_delay_sec": ("FLOAT", {"default":2.5, "min":0.01, "max":60000.0, "step":0.01}),
                "fps": ("INT", {"default":30, "min":1, "max":60.0, "step":1}),
                "max_size": ("INT", {"default":512, "min":128, "max":1920, "step":1}),
                "input_path": ("STRING", {"default": "./ComfyUI/input", "multiline": False}),
                "output_path": ("STRING", {"default": "./ComfyUI/output", "multiline": False}),
                "filename": ("STRING", {"default": "comfy_video", "multiline": False}),
                "codec": (codecs,),
            }
        }

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float("NaN")

    RETURN_TYPES = (TEXT_TYPE,TEXT_TYPE)
    RETURN_NAMES = ("filepath_text","filename_text")
    FUNCTION = "create_video_from_path"

    CATEGORY = "WAS Suite/Animation"

    def create_video_from_path(self, transition_frames=10, image_delay_sec=10, fps=30, max_size=512,
                            input_path="./ComfyUI/input", output_path="./ComfyUI/output", filename="morph", codec="H264"):

        conf = getSuiteConfig()
        if not conf.__contains__('ffmpeg_bin_path'):
            cstr(f"Unable to use MP4 Writer because the `ffmpeg_bin_path` is not set in `{WAS_CONFIG_FILE}`").error.print()
            return ("","")

        if conf.__contains__('ffmpeg_bin_path'):
            if conf['ffmpeg_bin_path'] != "/path/to/ffmpeg":
                sys.path.append(conf['ffmpeg_bin_path'])
                os.environ["OPENCV_FFMPEG_CAPTURE_OPTIONS"] = "rtsp_transport;udp"
                os.environ['OPENCV_FFMPEG_BINARY'] = conf['ffmpeg_bin_path']

        if output_path.strip() in [None, "", "."]:
            output_path = "./ComfyUI/output"

        if transition_frames < 0:
            transition_frames = 0
        elif transition_frames > 60:
            transition_frames = 60

        if fps < 1:
            fps = 1
        elif fps > 60:
            fps = 60

        tokens = TextTokens()

        # Check if output_path is an absolute path
        if not os.path.isabs(output_path):
            output_path = os.path.abspath(os.path.join(*tokens.parseTokens(output_path).split('/')))

        output_file = os.path.join(output_path, tokens.parseTokens(filename))

        if not os.path.exists(output_path):
            os.makedirs(output_path, exist_ok=True)

        WTools = WAS_Tools_Class()
        MP4Writer = WTools.VideoWriter(int(transition_frames), int(fps), int(image_delay_sec), max_size, codec)
        path = MP4Writer.create_video(input_path, output_file)

        return (path, filename)

```

# Documentation
- Class name: WAS_Image_Morph_GIF_Writer
- Category: WAS Suite/Animation/Writer
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Morph_GIF_Writer node creates an animated GIF from a series of images or frames. It manages transitions between frames, controls delays, and sets GIF looping behavior. This node is ideal for generating seamless, efficient animations for visual effects, presentations, or web content.

# Input types
## Required
- image
- Input images or image series used to create GIF animation frames. This parameter is essential because it directly affects the visual content of the generated animation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor] 或 torch.Tensor
## Optional
- transition_frames
- Number of transition frames generated between each pair of images. This parameter controls the speed of each frame transition, affecting animation smoothness.
    - Comfy dtype: INT
    - Python dtype: int
- image_delay_ms
- Delay time before each frame transition starts, in milliseconds. This parameter controls animation timing and can be adjusted to create the desired effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration_ms
- Total duration of the GIF animation, in milliseconds. This parameter sets the overall length from start to finish.
    - Comfy dtype: FLOAT
    - Python dtype: float
- loops
- Number of GIF loops. A value of 0 means the GIF loops indefinitely.
    - Comfy dtype: INT
    - Python dtype: int
- max_size
- Maximum size of the output GIF, in pixels. This parameter scales the animation to fit specific display requirements or constraints.
    - Comfy dtype: INT
    - Python dtype: int
- output_path
- Path to save the output GIF file. This parameter determines where the final animation is stored in the file system.
    - Comfy dtype: STRING
    - Python dtype: str
- filename
- Name of the output GIF file. This parameter lets users specify the desired name for the animation file.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image_pass
- Processed images or image series used to create the GIF. This output reflects the visual content after the node processes it.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor] 或 torch.Tensor
- filepath_text
- Full file path of the created GIF animation. This output is useful for referencing or further processing the animation file.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str
- filename_text
- Name of the created GIF file. This output provides the specific name given to the animation file.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Morph_GIF_Writer:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'transition_frames': ('INT', {'default': 30, 'min': 2, 'max': 60, 'step': 1}), 'image_delay_ms': ('FLOAT', {'default': 2500.0, 'min': 0.1, 'max': 60000.0, 'step': 0.1}), 'duration_ms': ('FLOAT', {'default': 0.1, 'min': 0.1, 'max': 60000.0, 'step': 0.1}), 'loops': ('INT', {'default': 0, 'min': 0, 'max': 100, 'step': 1}), 'max_size': ('INT', {'default': 512, 'min': 128, 'max': 1280, 'step': 1}), 'output_path': ('STRING', {'default': comfy_paths.output_directory, 'multiline': False}), 'filename': ('STRING', {'default': 'morph_writer', 'multiline': False})}}

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
    RETURN_TYPES = ('IMAGE', TEXT_TYPE, TEXT_TYPE)
    RETURN_NAMES = ('image_pass', 'filepath_text', 'filename_text')
    FUNCTION = 'write_to_morph_gif'
    CATEGORY = 'WAS Suite/Animation/Writer'

    def write_to_morph_gif(self, image, transition_frames=10, image_delay_ms=10, duration_ms=0.1, loops=0, max_size=512, output_path='./ComfyUI/output', filename='morph'):
        if 'imageio' not in packages():
            install_package('imageio')
        if output_path.strip() in [None, '', '.']:
            output_path = './ComfyUI/output'
        if image is None:
            image = pil2tensor(Image.new('RGB', (512, 512), (0, 0, 0))).unsqueeze(0)
        if transition_frames < 2:
            transition_frames = 2
        elif transition_frames > 60:
            transition_frames = 60
        if duration_ms < 0.1:
            duration_ms = 0.1
        elif duration_ms > 60000.0:
            duration_ms = 60000.0
        tokens = TextTokens()
        output_path = os.path.abspath(os.path.join(*tokens.parseTokens(output_path).split('/')))
        output_file = os.path.join(output_path, tokens.parseTokens(filename) + '.gif')
        if not os.path.exists(output_path):
            os.makedirs(output_path, exist_ok=True)
        WTools = WAS_Tools_Class()
        GifMorph = WTools.GifMorphWriter(int(transition_frames), int(duration_ms), int(image_delay_ms))
        for img in image:
            pil_img = tensor2pil(img)
            GifMorph.write(pil_img, output_file)
        return (image, output_file, filename)
```
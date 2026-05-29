# Documentation
- Class name: PromptScheduleEncodeSDXL
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The PromptScheduleEncodeSDXL node is designed to craft and encode prompts for a sequence of frames in a video. It takes into account various parameters such as width, height, crop dimensions, and text prompts to generate a schedule of prompts, which are then encoded to create conditioning for further processing. This node plays a critical role in animation pipelines by managing the complexity of prompt processing and ensuring smooth transitions between frames.

# Input types
## Required
- width
    - The width parameter specifies the width of the video frames. It is essential for determining the resolution and aspect ratio of the output video, affecting the overall visual quality and how the animation is presented.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical resolution of the video frames. It works in conjunction with the width parameter to ensure proper scaling and display of the video content.
    - Comfy dtype: INT
    - Python dtype: int
- text_g
    - The text_g parameter holds the text prompt for the green channel. These prompts are critical for guiding the animation process and defining the story or visual elements that will appear in the final animation.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
    - The max_frames parameter defines the maximum number of frames the animation will contain. This setting is important for controlling the length of the animation and managing computational resources.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- print_output
    - The print_output parameter is an optional flag that, when set to true, prints debug information during node execution. This is useful for developers to monitor progress and troubleshoot any issues that may arise.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- POS
    - The POS output provides positive conditioning data derived from the input prompts and parameters. This output is important as it lays the groundwork for subsequent video processing steps, influencing the final result of the animation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[str, Dict[str, torch.Tensor]]
- NEG
    - The NEG output provides negative conditioning data, complementing the POS output by offering additional context or contrast. This output is used to refine the animation and add depth to the visual storytelling.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[str, Dict[str, torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
```
class PromptScheduleEncodeSDXL:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_w': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_h': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'text_g': ('STRING', {'multiline': True}), 'clip': ('CLIP',), 'text_l': ('STRING', {'multiline': True}), 'clip': ('CLIP',), 'max_frames': ('INT', {'default': 120.0, 'min': 1.0, 'max': 999999.0, 'step': 1.0}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 999999.0, 'step': 1.0}), 'print_output': ('BOOLEAN', {'default': False})}, 'optional': {'pre_text_G': ('STRING', {'multiline': True}), 'app_text_G': ('STRING', {'multiline': True}), 'pre_text_L': ('STRING', {'multiline': True}), 'app_text_L': ('STRING', {'multiline': True}), 'pw_a': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_b': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_c': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_d': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('POS', 'NEG')
    FUNCTION = 'animate'
    CATEGORY = 'FizzNodes 📅🅕🅝/ScheduleNodes'

    def animate(self, clip, width, height, crop_w, crop_h, target_width, target_height, text_g, text_l, app_text_G, app_text_L, pre_text_G, pre_text_L, max_frames, current_frame, print_output, pw_a, pw_b, pw_c, pw_d):
        current_frame = current_frame % max_frames
        inputTextG = str('{' + text_g + '}')
        inputTextL = str('{' + text_l + '}')
        inputTextG = re.sub(',\\s*}', '}', inputTextG)
        inputTextL = re.sub(',\\s*}', '}', inputTextL)
        animation_promptsG = json.loads(inputTextG.strip())
        animation_promptsL = json.loads(inputTextL.strip())
        (posG, negG) = batch_split_weighted_subprompts(animation_promptsG, pre_text_G, app_text_G)
        (posL, negL) = batch_split_weighted_subprompts(animation_promptsL, pre_text_L, app_text_L)
        (pc, pn, pw) = BatchInterpolatePromptsSDXL(posG, posL, max_frames, clip, app_text_G, app_text_L, pre_text_G, pre_text_L, pw_a, pw_b, pw_c, pw_d, width, height, crop_w, crop_h, target_width, target_height, print_output)
        p = addWeighted(pc[current_frame], pn[current_frame], pw[current_frame])
        (nc, nn, nw) = BatchInterpolatePromptsSDXL(negG, negL, max_frames, clip, app_text_G, app_text_L, pre_text_G, pre_text_L, pw_a, pw_b, pw_c, pw_d, width, height, crop_w, crop_h, target_width, target_height, print_output)
        n = addWeighted(nc[current_frame], nn[current_frame], nw[current_frame])
        return (p, n)
```
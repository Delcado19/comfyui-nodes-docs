# Documentation
- Class name: PromptSchedule
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The PromptSchedule node manages and animates text prompts at specified frame counts. It creates smooth transitions between prompts by interpolating keyframes and applies weights to control the influence of each keyframe. This node is essential for generating dynamic and coherent text animations that evolve over time.

# Input types
## Required
- text
    - The 'text' parameter is a multiline string that defines the initial state of the animated prompt. It is crucial for setting the foundation from which the node will generate the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
    - The 'max_frames' parameter determines the total number of frames the animation will run. It is a key factor in the overall duration and pacing of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The 'current_frame' parameter indicates the current position within the animation sequence. It is essential for the node to know its place on the animation timeline.
    - Comfy dtype: INT
    - Python dtype: int
- print_output
    - The 'print_output' parameter is a boolean flag that, when set to True, prints the output of the animated prompt to the console. This is useful for debugging and real-time monitoring.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clip
    - The 'clip' parameter is a reference to the CLIP model used within the node for text encoding. It plays a vital role in converting text prompts into a format suitable for animation.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
## Optional
- pw_a
    - The 'pw_a' parameter is a float representing the weight applied to the animation at the current frame. It influences the transition between prompts and contributes to the overall smoothness of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pre_text
    - The 'pre_text' parameter is an optional multiline string that can be used to prefix the animated prompt. It provides additional context or setup for the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- app_text
    - The 'app_text' parameter is an optional multiline string that can be used to append additional information to the animated prompt. It extends the context or adds a suffix to the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- POS
    - The 'POS' output represents the positive conditioning for the current frame of the animation. It is derived from the interpolated prompts and is used to guide the positive generation of the animation.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- NEG
    - The 'NEG' output represents the negative conditioning for the current frame of the animation. It is used to balance the positive conditioning, ensuring balanced development of the animation sequence.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
```
class PromptSchedule:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'default': defaultPrompt}), 'clip': ('CLIP',), 'max_frames': ('INT', {'default': 120.0, 'min': 1.0, 'max': 999999.0, 'step': 1.0}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 999999.0, 'step': 1.0}), 'print_output': ('BOOLEAN', {'default': False})}, 'optional': {'pre_text': ('STRING', {'multiline': True}), 'app_text': ('STRING', {'multiline': True}), 'pw_a': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_b': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_c': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_d': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('POS', 'NEG')
    FUNCTION = 'animate'
    CATEGORY = 'FizzNodes 📅🅕🅝/ScheduleNodes'

    def animate(self, text, max_frames, print_output, current_frame, clip, pw_a=0, pw_b=0, pw_c=0, pw_d=0, pre_text='', app_text=''):
        current_frame = current_frame % max_frames
        inputText = str('{' + text + '}')
        inputText = re.sub(',\\s*}', '}', inputText)
        animation_prompts = json.loads(inputText.strip())
        start_frame = 0
        (pos, neg) = batch_split_weighted_subprompts(animation_prompts, pre_text, app_text)
        (pos_cur_prompt, pos_nxt_prompt, weight) = interpolate_prompt_series(pos, max_frames, start_frame, pre_text, app_text, pw_a, pw_b, pw_c, pw_d, print_output)
        pc = PoolAnimConditioning(pos_cur_prompt[current_frame], pos_nxt_prompt[current_frame], weight[current_frame], clip)
        (neg_cur_prompt, neg_nxt_prompt, weight) = interpolate_prompt_series(neg, max_frames, start_frame, pre_text, app_text, pw_a, pw_b, pw_c, pw_d, print_output)
        nc = PoolAnimConditioning(neg_cur_prompt[current_frame], neg_nxt_prompt[current_frame], weight[current_frame], clip)
        return (pc, nc)
```
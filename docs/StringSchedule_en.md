# Documentation
- Class name: StringSchedule
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The StringSchedule node processes and animates text‑based schedules. It accepts various parameters to customize the animation, including text, frame limits, and the current frame index. Its main function is to generate a series of prompts for animation or scheduling, abstracting frame‑based animation complexity into a simple text‑driven interface.

# Input types
## Required
- text
- The `text` parameter is the raw text input the node uses to generate animation prompts. It is essential because it directly determines the content and structure of the output prompts. This parameter supports multiline input, allowing complex and detailed descriptions.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
- The `max_frames` parameter defines the maximum number of frames in the animation sequence. It plays a key role in determining the animation’s duration and frame intervals, affecting overall pacing and smoothness.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
- The `current_frame` parameter indicates the current position within the animation sequence. It is crucial for deciding which prompt to use at any given moment, thereby controlling the animation state.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- print_output
- The `print_output` parameter is an optional flag; when set to True, it prints the animation prompts to the console. This is useful for debugging or visualizing the animation sequence in a text‑based format.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pre_text
- The `pre_text` parameter adds text before each frame’s prompt. It can provide context or additional information that should appear at the beginning of every prompt in the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- app_text
- The `app_text` parameter is appended to each frame’s prompt, allowing trailing or supplemental text to be added to the animation sequence. It can enhance the final output with extra details or a closing remark.
    - Comfy dtype: STRING
    - Python dtype: str
- pw_a
- The `pw_a` parameter is a weighting factor used during prompt interpolation. It influences the balance and distribution of prompts in the animation, enabling fine‑tuning of the animation’s progression.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_b
- The `pw_b` parameter is another weighting factor in the interpolation, complementary to `pw_a`, to achieve the desired effect or emphasis within the sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_c
- The `pw_c` parameter is part of the weighted system for interpolating prompts, providing additional control over the details of the animation’s development.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_d
- The `pw_d` parameter is the final weighting factor in the series, adding a last layer of influence on how prompts interpolate within the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- POS
- The `POS` output represents the current positive prompt derived from the input text and parameters. It is a key component of the animation sequence, providing the affirmative or main content for a given frame.
    - Comfy dtype: STRING
    - Python dtype: str
- NEG
- The `NEG` output represents the current negative prompt, complementing the `POS` output by offering contrasting or alternative content for the frame, enhancing the overall depth and complexity of the animation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StringSchedule:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'default': defaultPrompt}), 'max_frames': ('INT', {'default': 120.0, 'min': 1.0, 'max': 999999.0, 'step': 1.0}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 999999.0, 'step': 1.0}), 'print_output': ('BOOLEAN', {'default': False})}, 'optional': {'pre_text': ('STRING', {'multiline': True}), 'app_text': ('STRING', {'multiline': True}), 'pw_a': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_b': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_c': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1}), 'pw_d': ('FLOAT', {'default': 0.0, 'min': -9999.0, 'max': 9999.0, 'step': 0.1})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('POS', 'NEG')
    FUNCTION = 'animate'
    CATEGORY = 'FizzNodes 📅🅕🅝/ScheduleNodes'

    def animate(self, text, max_frames, current_frame, pw_a=0, pw_b=0, pw_c=0, pw_d=0, pre_text='', app_text='', print_output=False):
        current_frame = current_frame % max_frames
        inputText = str('{' + text + '}')
        inputText = re.sub(',\\s*}', '}', inputText)
        animation_prompts = json.loads(inputText.strip())
        start_frame = 0
        (pos, neg) = batch_split_weighted_subprompts(animation_prompts, pre_text, app_text)
        (pos_cur_prompt, pos_nxt_prompt, weight) = interpolate_prompt_series(pos, max_frames, 0, pre_text, app_text, pw_a, pw_b, pw_c, pw_d, print_output)
        (neg_cur_prompt, neg_nxt_prompt, weight) = interpolate_prompt_series(neg, max_frames, start_frame, pre_text, app_text, pw_a, pw_b, pw_c, pw_d, print_output)
        return (pos_cur_prompt[current_frame], neg_cur_prompt[current_frame])
```
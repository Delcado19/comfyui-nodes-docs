# Documentation
- Class name: KfKeyframedConditionWithText
- Category: RootCategory
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node integrates text information into a keyframe-based framework, enabling dynamic adjustment and refinement of keyframe conditions based on text input.

# Input types
## Required
- clip
    - The input clip is required as it serves as the basis for keyframe conditions. It is manipulated based on text input to create customized visual representations.
    - Comfy dtype: CLIP
    - Python dtype: kf.Clip
- text
    - The text parameter is crucial to the node as it provides the content and context for keyframe conditions. It is used to generate markers that affect the final visual output.
    - Comfy dtype: STRING
    - Python dtype: str
- time
    - The time parameter is very important as it determines the temporal position of keyframes in the sequence. It influences the overall rhythm and structure of keyframe animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation_method
    - The interpolation method is important as it determines the transition style between keyframes. It affects the smoothness and visual continuity of the animation.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- schedule
    - When using the planning parameter, it allows automatic adjustment of keyframes over time. It can simplify the process of creating complex animations.
    - Comfy dtype: SCHEDULE
    - Python dtype: dict

# Output types
- keyframed_condition
    - The output provides a structured representation of keyframe conditions, which is crucial for the visual narrative of the animation. It encapsulates the combined effect of text input and time placement.
    - Comfy dtype: KEYFRAMED_CONDITION
    - Python dtype: dict
- conditioning
    - This output contains an encoded representation of the text input and is used to influence keyframe conditions. It is a critical intermediate step in node operation.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- schedule
    - The planning output is a structured plan for automating keyframe adjustments. It is important for creating dynamic and responsive animations that adapt over time.
    - Comfy dtype: SCHEDULE
    - Python dtype: tuple

# Usage tips
- Infra type: GPU

# Source code
```
class KfKeyframedConditionWithText(KfKeyframedCondition):
    """
    Attaches a condition to a keyframe
    """
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CONDITION', 'CONDITIONING', 'SCHEDULE')

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip': ('CLIP',), 'text': ('STRING', {'multiline': True, 'default': ''}), 'time': ('FLOAT', {'default': 0, 'step': 1}), 'interpolation_method': (list(kf.interpolation.EASINGS.keys()), {'default': 'linear'})}, 'optional': {'schedule': ('SCHEDULE', {})}}

    def main(self, clip, text, time, interpolation_method, schedule=None):
        tokens = clip.tokenize(text)
        (cond, pooled) = clip.encode_from_tokens(tokens, return_pooled=True)
        conditioning = [[cond, {'pooled_output': pooled}]]
        keyframed_condition = super().main(conditioning, time, interpolation_method)[0]
        keyframed_condition['kf_cond_t'].label = text
        schedule = set_keyframed_condition(keyframed_condition, schedule)
        return (keyframed_condition, conditioning, schedule)
```
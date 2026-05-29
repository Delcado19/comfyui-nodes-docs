# Documentation
- Class name: PromptComposerEffect
- Category: AI WizArt/Prompt Composer Tools/Deprecated
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

This node enhances text input by applying stylized effects, enabling the creation of more engaging and diverse content. It highlights the node's role in text transformation without delving into implementation details.

# Input types
## Required
- effect
    - This parameter determines the type of effect to apply to the text, fundamentally altering the output's style and tone.
    - Comfy dtype: COMBO[effects]
    - Python dtype: str
- effect_weight
    - This parameter adjusts the intensity of the applied effect, influencing the degree of transformation and the characteristics of the final result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - This parameter controls whether the effect is applied, deciding if the node is active in text processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- text_in_opt
    - This parameter serves as the base text for applying stylized effects. Its importance lies in providing the content that the node will transform.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text_out
    - The output represents the transformed text with the effect applied, demonstrating the node's contribution to content enhancement.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PromptComposerEffect:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'optional': {'text_in_opt': ('STRING', {'forceInput': True})}, 'required': {'effect': (effects, {'default': effects[0]}), 'effect_weight': ('FLOAT', {'default': 1, 'step': 0.05, 'min': 0, 'max': 1.95, 'display': 'slider'}), 'active': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('text_out',)
    FUNCTION = 'promptComposerEffect'
    CATEGORY = 'AI WizArt/Prompt Composer Tools/Deprecated'

    def promptComposerEffect(self, text_in_opt='', effect='-', effect_weight=0, active=True):
        prompt = []
        if text_in_opt != '':
            prompt.append(text_in_opt)
        if effect != '-' and effect_weight > 0 and active:
            prompt.append(f'({effect} effect:{round(effect_weight, 2)})')
        if len(prompt) > 0:
            prompt = ', '.join(prompt)
            prompt = prompt.lower()
            return (prompt,)
        else:
            return ('',)
```
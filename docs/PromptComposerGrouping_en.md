# Documentation
- Class name: PromptComposerGrouping
- Category: AI WizArt/Prompt Composer Tools
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

The node creatively processes text by adjusting the weight and structure of the input text, generating modified prompts for various AI applications.

# Input types
## Required
- text_in
    - The input text is the basis for node operations; its content and structure directly affect the output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- weight
    - Fine‑tuning weight parameters applies to input text transformation, influencing the emphasis and presentation of the generated prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - The activation flag determines whether the node's processing is applied to the input text, thus controlling node execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_out
    - The output text is the result of the node's processing, containing the modified prompt prepared for AI applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PromptComposerGrouping:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text_in': ('STRING', {'forceInput': True}), 'weight': ('FLOAT', {'default': 1, 'step': 0.05, 'min': 0, 'max': 1.95, 'display': 'slider'}), 'active': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('text_out',)
    FUNCTION = 'promptComposerGrouping'
    CATEGORY = 'AI WizArt/Prompt Composer Tools'

    def promptComposerGrouping(self, text_in='', weight=0, active=True):
        prompt = text_in
        if text_in != '' and weight > 0 and active:
            prompt = applyWeight(text_in, weight)
        return (prompt,)
```
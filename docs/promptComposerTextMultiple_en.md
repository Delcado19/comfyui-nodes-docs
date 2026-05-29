# Documentation
- Class name: promptComposerTextMultiple
- Category: AI WizArt/Prompt Composer Tools
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

The promptComposerTextMultiple node combines multiple text inputs into a single, coherent prompt. It intelligently applies weights to each text entry, allowing fine control over each component's influence. This node excels at creating prompts that balance the importance of various text elements, ensuring the output is a carefully crafted aggregate serving the intended purpose.

# Input types
## Required
- text_in_opt
    - Optional text inputs serve as additional information that can be included in the final prompt composition. They provide supplementary context or details that may enrich the overall prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_1
    - Primary text inputs are required components for the node's operation. They are key elements that significantly contribute to the final prompt. The content and structure of the text are crucial for defining the prompt's direction and focus.
    - Comfy dtype: STRING
    - Python dtype: str
- weight_1
    - The weight parameter for the first text input allows adjustment of its relative importance in the prompt. It is a critical factor in determining the overall balance and emphasis of the combined prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - The activation flag determines whether the text input and its associated weight are considered in the prompt composition. It acts as a toggle to include or exclude certain parts of the input data based on the node's execution context.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_out
    - The output text is the synthesized prompt generated from the weighted combination of text inputs. It encapsulates the essence of the provided texts, reflecting the intended information with the desired emphasis and balance.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class promptComposerTextMultiple:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'optional': {'text_in_opt': ('STRING', {'forceInput': True})}, 'required': {'text_1': ('STRING', {'multiline': True}), 'weight_1': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_2': ('STRING', {'multiline': True}), 'weight_2': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_3': ('STRING', {'multiline': True}), 'weight_3': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_4': ('STRING', {'multiline': True}), 'weight_4': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_5': ('STRING', {'multiline': True}), 'weight_5': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_6': ('STRING', {'multiline': True}), 'weight_6': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_7': ('STRING', {'multiline': True}), 'weight_7': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_8': ('STRING', {'multiline': True}), 'weight_8': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_9': ('STRING', {'multiline': True}), 'weight_9': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'text_10': ('STRING', {'multiline': True}), 'weight_10': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.95, 'step': 0.05, 'display': 'slider'}), 'active': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('text_out',)
    FUNCTION = 'promptComposerTextMultiple'
    CATEGORY = 'AI WizArt/Prompt Composer Tools'

    def promptComposerTextMultiple(self, text_in_opt='', text_1='', weight_1=0, text_2='', weight_2=0, text_3='', weight_3=0, text_4='', weight_4=0, text_5='', weight_5=0, text_6='', weight_6=0, text_7='', weight_7=0, text_8='', weight_8=0, text_9='', weight_9=0, text_10='', weight_10=0, active=True):
        prompt = []
        if text_in_opt != '':
            prompt.append(text_in_opt)
        if text_1 != '' and weight_1 > 0 and active:
            prompt.append(applyWeight(text_1, weight_1))
        if text_2 != '' and weight_2 > 0 and active:
            prompt.append(applyWeight(text_2, weight_2))
        if text_3 != '' and weight_3 > 0 and active:
            prompt.append(applyWeight(text_3, weight_3))
        if text_4 != '' and weight_4 > 0 and active:
            prompt.append(applyWeight(text_4, weight_4))
        if text_5 != '' and weight_5 > 0 and active:
            prompt.append(applyWeight(text_5, weight_5))
        if text_6 != '' and weight_6 > 0 and active:
            prompt.append(applyWeight(text_6, weight_6))
        if text_7 != '' and weight_7 > 0 and active:
            prompt.append(applyWeight(text_7, weight_7))
        if text_8 != '' and weight_8 > 0 and active:
            prompt.append(applyWeight(text_8, weight_8))
        if text_9 != '' and weight_9 > 0 and active:
            prompt.append(applyWeight(text_9, weight_9))
        if text_10 != '' and weight_10 > 0 and active:
            prompt.append(applyWeight(text_10, weight_10))
        if len(prompt) > 0:
            prompt = ', '.join(prompt)
            prompt = prompt.lower()
            return (prompt,)
        else:
            return ('',)
```
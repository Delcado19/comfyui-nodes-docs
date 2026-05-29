# Documentation
- Class name: SDXLPromptStylerbyTimeofDay
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically styles the prompt based on the current time, customizing information display according to the current time context to enhance user interaction experience.

# Input types
## Required
- text_positive
    - Positive text input is important because it sets the baseline for positive emotions customized and displayed according to the selected time.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is essential for providing contrastive emotions to positive text, enabling the node to balance the overall tone of the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style parameters play a key role in determining the style of prompts customized according to time, affecting the overall aesthetics and mood of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - Recording prompt parameters is a practical tool for developers and testers, enabling them to output detailed information about the styling process for debugging and validation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - Output includes positively styled text, formatted to match the selected time, enhancing user experience through customized messaging.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - Output includes negatively styled text, complementing positive text by providing contrastive emotions, contributing to a nuanced display of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyTimeofDay:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_tod.json')
        self.json_data = read_json_file(file_path)
        styles = read_sdxl_styles(self.json_data)
        return {'required': {'text_positive': ('STRING', {'default': '', 'multiline': True}), 'text_negative': ('STRING', {'default': '', 'multiline': True}), 'style': (styles,), 'log_prompt': (['No', 'Yes'], {'default': 'No'})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('positive_prompt_text_g', 'negative_prompt_text_g')
    FUNCTION = 'prompt_styler'
    CATEGORY = 'Style Prompts'

    def prompt_styler(self, text_positive, text_negative, style, log_prompt):
        (positive_prompt, negative_prompt) = read_sdxl_templates_replace_and_combine(self.json_data, style, text_positive, text_negative)
        if log_prompt == 'Yes':
            print(f'style: {style}')
            print(f'text_positive: {text_positive}')
            print(f'text_negative: {text_negative}')
            print(f'positive_prompt: {positive_prompt}')
            print(f'negative_prompt: {negative_prompt}')
        return (positive_prompt, negative_prompt)
```
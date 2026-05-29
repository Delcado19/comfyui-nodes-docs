# Documentation
- Class name: SDXLPromptStylerbyMileHigh
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

The SDXLPromptStylerbyMileHigh node is designed to stylize text prompts based on predefined styles. It accepts positive and negative text inputs along with a selected style identifier, and generates stylized prompts accordingly. The node can also log inputs and outputs for review, which is useful for debugging or transparency purposes.

# Input types
## Required
- text_positive
    - The positive text input is crucial for defining the optimistic aspect of the prompt. It significantly influences the tone and direction of the stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input contrasts with the positive text, providing a counterpoint that can be used to refine the prompt style.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the style template applied to the text. It is essential for achieving the desired prompt style according to user needs.
    - Comfy dtype: STRING
    - Python dtype: str
- log_prompt
    - When the log_prompt parameter is set to 'Yes', logging of the prompt process is enabled. This can be beneficial for monitoring and reviewing the node's operations.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The positive_prompt_text_g output represents the stylized positive text prompt, which is a key result of the node's execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output provides the stylized negative text prompt, complementing the positive prompt to give a complete stylized output.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyMileHigh:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_mh.json')
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
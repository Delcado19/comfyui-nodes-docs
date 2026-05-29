# Documentation
- Class name: SDXLPromptStylerbySubject
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

The SDXLPromptStylerbySubject node aims to stylize prompts based on a given subject. It accepts positive and negative text inputs and applies the selected style to generate stylized prompts. The node can log the process for review, enhancing customization and personalization of prompts.

# Input types
## Required
- text_positive
    - The text_positive parameter is a string representing the positive aspect of the prompt. It is essential for defining the optimistic tone of the stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative parameter is a string representing the negative aspect of the prompt. It plays a key role in shaping the pessimistic tone of the stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the stylization method applied to the prompt. It is a key factor in the overall style and presentation of the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- log_prompt
    - The log_prompt parameter is an optional option that allows logging of the stylization process. It can be set to 'Yes' for detailed review of the transformation process.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The positive_prompt_text_g output is the stylized positive text of the prompt, reflecting the applied style and the optimistic perspective of the input.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output is the stylized negative text of the prompt, embodying the applied style and the pessimistic perspective of the input.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbySubject:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_subject.json')
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
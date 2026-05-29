# Documentation
- Class name: SDXLPromptStylerbyLighting
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the presentation of prompts by applying style templates, with the goal of improving text readability and appeal.

# Input types
## Required
- text_positive
    - This parameter is the positive text that needs to be stylized by the node, and is the basis for enhanced presentation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - This parameter is the negative text that needs to be combined with the positive text, adding contrast and depth to the final stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - This parameter determines the style template to be applied, significantly affecting the overall aesthetics and tone of the stylized prompt.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - This parameter controls whether to record intermediate steps and results, which helps in debugging and understanding the node's operation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output is the stylized positive text, enhanced in visual appeal and effectiveness through the selected template.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output is the stylized negative text, complementing the positive text and contributing to the comprehensiveness of the stylized information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyLighting:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_lighting.json')
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
# Documentation
- Class name: SDXLPromptbySportsArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to stylize text prompts based on sports themes, enhancing the thematic content and engagement of the prompts.

# Input types
## Required
- text_positive
    - The positive text input is crucial as it sets the tone for the positive aspects of the sports theme that will be incorporated into the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is essential to provide an element of contrast with the positive text, allowing the stylized prompt to be more nuanced and balanced.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the thematic direction of the sports-related prompt, ensuring the content aligns with the chosen sports theme.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log parameter allows for selective output of detailed information during node execution, providing insight into the template replacement process.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positively stylized prompt that incorporates the selected sports theme, enhancing user interaction with the content.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides a negatively stylized prompt that contrasts with the positive text, offering a comprehensive perspective on the sports theme.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptbySportsArt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_sports.json')
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
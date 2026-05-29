# Documentation
- Class name: SDXLPromptStylerbySteamPunkRealism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to stylize prompts based on a predefined steampunk realism style set, enhancing the thematic content of the input text by integrating style elements and narrative themes specific to the steampunk genre.

# Input types
## Required
- text_positive
    - The positive text input is critical as it provides the foundational content upon which the node applies the steampunk realism style. This is the text that will be enhanced and transformed to reflect the desired thematic style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input serves as a contrast to the positive text, allowing the node to fine-tune the stylized transformation by integrating specific elements that are not desired in the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical as it determines the thematic direction and aesthetic choices the node will apply to the input text. It is the guiding force behind the stylization transformation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt parameter is an optional setting that allows users to log the transformation process, providing insights into how the node applies the steampunk realism style to the input text.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output is positively stylized text, transformed to embody the steampunk realism style, ready for use in various creative applications.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output is negatively stylized text, helping to refine the thematic content and aesthetics of the final product by providing elements that contrast with the positive output.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbySteamPunkRealism:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_sr.json')
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
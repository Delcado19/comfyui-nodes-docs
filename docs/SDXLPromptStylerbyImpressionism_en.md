# Documentation
- Class name: SDXLPromptStylerbyImpressionism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node creatively transforms input text by applying an Impressionist-inspired style template, enhancing the aesthetic and thematic depth of the text.

# Input types
## Required
- text_positive
    - The positive text input serves as the foundation for style transformation, providing content that will be imbued with Impressionist qualities.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is used to contrast with the positive text, potentially adding depth and complexity to the final stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style selected from predefined Impressionist style templates determines the overall tone and direction of the text transformation.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - This parameter controls whether intermediate steps and results of the stylization process are logged, aiding in understanding the node's operation and output.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output showcases positively stylized text, now infused with the chosen Impressionist style, ready for further use or display.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output includes negatively stylized text, complementing the positive output and potentially providing contrasting perspectives or additional context.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyImpressionism:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_impressionism.json')
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
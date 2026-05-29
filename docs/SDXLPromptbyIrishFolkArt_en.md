# Documentation
- Class name: SDXLPromptbyIrishFolkArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node creatively adapts input text into Irish folk art style, enhancing thematic expression and cultural resonance.

# Input types
## Required
- text_positive
    - Positive text input is essential for generating style‑enhanced output, capturing the essence of Irish folk art.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is crucial for refining output, ensuring strict adherence to Irish folk art style.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style parameters are vital; they determine artistic direction and the cultural elements infused into the text.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log option allows selective visualization of the transformation process, aiding understanding of the node's function.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positively stylized text embodying the spirit of Irish folk art, ready for further use or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output also includes a negatively stylized text, offering a contrasting element to the positive text for comprehensive style evaluation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptbyIrishFolkArt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_irishfolkart.json')
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
# Documentation
- Class name: SDXLPromptbyRomanticNationalismArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node creatively adapts input text to a specified style based on Romantic Nationalist art principles, enhancing the thematic content and emotional expression of the original text.

# Input types
## Required
- text_positive
    - Positive text input is critical, as it sets the foundation for the style transformation. This is the text that will be enhanced and adapted to the chosen style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input serves as a contrast to the positive text, providing counterpoints that can be integrated into the final stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is essential, as it determines the thematic and emotional direction of the text transformation, guiding the node to produce a stylistically consistent output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log option allows selective visualization of the transformation process, offering insights into how the node achieves its stylistic adaptation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output demonstrates the enhanced positive text, now infused with the chosen style, ready for further use or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The adapted negative text complements the positive output, providing a contrasting perspective that can enrich the overall thematic depth.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptbyRomanticNationalismArt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_romanticnat.json')
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
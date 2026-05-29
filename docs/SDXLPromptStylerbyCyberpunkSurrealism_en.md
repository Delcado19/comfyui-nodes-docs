# Documentation
- Class name: SDXLPromptStylerbyCyberpunkSurrealism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node generates aesthetically consistent and thematically rich content by creatively transforming input text into style-enhanced prompts through applying templates selected from a curated collection.

# Input types
## Required
- text_positive
    - The positive text input serves as the foundation for stylistic transformation, providing content that will be enhanced and shaped by the selected template.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input complements the positive text, providing contrast and depth for the final stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style selection is critical, as it determines the thematic and aesthetic direction of prompt stylization, guiding the transformation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - Logging preference determines whether intermediate steps and results are output, aiding in understanding the node's operation and stylization process.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output presents the positively stylized text, which is the result of applying the selected template to the original input, now enhanced with thematic and stylistic elements.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output includes negatively stylized text, providing contrasting elements to the positive text, enriching the overall stylized output.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyCyberpunkSurrealism:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_cs.json')
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
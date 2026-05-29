# Documentation
- Class name: SDXLPromptStylerbySurrealism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node creatively redesigns input text prompts by applying a surrealism-inspired style template, enhancing the expressiveness and artistic quality of the generated content.

# Input types
## Required
- text_positive
    - The positive text input serves as the foundation for the stylization process, with its content transformed to reflect the chosen surrealist style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is used for contrast and refinement of the stylization, ensuring the final output is coherent and aligned with the desired aesthetic.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The selected style determines the surrealist approach applied to the text, guiding the transformation process and shaping the creative direction.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - This toggle determines whether the process and results are logged, providing insight into the stylization process and the generated prompts.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output showcases the positively stylized text, now infused with the chosen surrealist elements, ready for further use or display.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output includes the negatively stylized text, which complements the positive output and contributes to the overall coherence and depth of the stylized content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbySurrealism:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_surrealism.json')
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
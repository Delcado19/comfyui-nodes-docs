# Documentation
- Class name: SDXLPromptStylerMisc
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the presentation of prompts by applying predefined styles, ensuring the prompts are engaging and contextually appropriate.

# Input types
## Required
- text_positive
    - The positive text input is crucial as it sets a positive tone for the prompt. It will be the foundational text that is styled and formatted according to the selected template.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is essential for providing contrasting elements of the prompt, allowing for a more nuanced and balanced presentation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- style
    - The style input determines the aesthetic and structural characteristics of the prompt, influencing its overall appeal and effectiveness.
    - Comfy dtype: COMBO
    - Python dtype: str
- log_prompt
    - The log prompt input is a toggle for enabling logging, which is useful for debugging and understanding the node's operation and the prompts generated.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides the styled positive prompt text, which has been formatted according to the selected style, enhancing its impact and readability.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides the styled negative prompt text, which complements the positive text by offering a contrasting perspective, enriching the overall information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerMisc:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_misc.json')
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
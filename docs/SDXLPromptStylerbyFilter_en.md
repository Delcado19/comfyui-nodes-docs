# Documentation
- Class name: SDXLPromptStylerbyFilter
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically styles prompts based on provided positive and negative text inputs, using a specified style template to generate refined and targeted messages.

# Input types
## Required
- text_positive
    - The positive text input is very important because it sets the tone for the desired message. It is used to create a refined and targeted positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is crucial for defining the contrasting elements to avoid in the message. It helps create a nuanced prompt that balances both positive and negative aspects.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical in determining the overall aesthetic and delivery of the generated prompt. It guides the transformation of the input text into a coherent and stylistically consistent output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt option allows optional logging of the prompt generation process, providing transparency and insight into how the prompt is styled and constructed.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output positive prompt text is the result of the styling process, encapsulating the desired message in a refined and engaging manner.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output negative prompt text provides balance to the positive prompt, ensuring the message is comprehensive and addresses potential concerns or objections.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyFilter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_filter.json')
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
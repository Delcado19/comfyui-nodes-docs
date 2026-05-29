# Documentation
- Class name: SDXLPromptStylerbyQuantumRealism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node is designed to style prompts according to a predefined style, enhancing the thematic and aesthetic presentation of the text without altering its core information.

# Input types
## Required
- text_positive
    - Positive text input is essential for generating prompts with a positive framework. It serves as the basis for applying stylization elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is crucial for providing elements that contrast with the positive text, enabling the node to create more nuanced and balanced prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the overall aesthetic and thematic direction of the stylized prompt, guiding the transformation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging prompt option allows optional recording of the prompt generation process, which is very beneficial for debugging and understanding the node's operation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - Output provides a stylistically enhanced positive prompt that reflects the integration of the input text with the selected style.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - Output provides a stylistically enhanced negative prompt, offering a point of contrast to the positive prompt and contributing to a comprehensive presentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyQuantumRealism:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_qr.json')
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
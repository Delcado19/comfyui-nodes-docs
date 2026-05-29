# Documentation
- Class name: SDXLPromptStylerbyWyvern
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to style prompts based on predefined templates, enhancing the presentation and appeal of content. By combining positive and negative text inputs with a selected style, it seeks to create a coherent and thematically consistent output.

# Input types
## Required
- text_positive
    - The positive text input is essential for setting the affirmative tone of the prompt. It serves as the foundation upon which stylistic elements from the chosen template are applied, significantly influencing the effectiveness of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input complements the positive text by providing contrasting content. Its integration with the style template is crucial for creating a balanced and nuanced prompt that addresses potential counterpoints or limitations.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the overall aesthetic and thematic direction of the prompt. It guides the selection of the template and dictates how the positive and negative text are formatted and presented.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt parameter enables optional logging of the styling process. When enabled, it provides transparency into the node's operations, aiding in debugging and ensuring the desired styling is achieved.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output represents the styled positive prompt text, formatted according to the selected style template and the positive text input. This output is essential to the node's purpose of enhancing content presentation.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output includes the styled negative prompt text, complementing the positive output by addressing potential counterpoints or limitations. It is a critical component of the node's functionality, ensuring a comprehensive and balanced presentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyWyvern:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_wyvern.json')
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
# Documentation
- Class name: SDXLPromptbyWildlifeArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node is designed to modify text prompts based on a selected wildlife art style, enhancing the creative process by generating thematized positive and negative prompts.

# Input types
## Required
- text_positive
    - The positive text input is essential for generating thematized positive prompts, serving as the foundation for the stylization process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is crucial for creating contrasting negative prompts, complementing the positive prompts and enriching the overall thematic expression.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style selection parameter is critical as it determines the artistic theme applied to both positive and negative prompts, guiding the aesthetics of the overall output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging parameter facilitates debugging and supervision by optionally providing detailed printouts of the stylization process and results.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output positive prompt is a creatively enhanced text reflecting the selected wildlife art style, serving as a thematic foundation for further content development.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output negative prompt provides a contrasting thematic element, offering a counterpoint to the positive prompt, enriching the narrative scope.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptbyWildlifeArt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_wildlife.json')
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
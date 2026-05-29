# Documentation
- Class name: SDXLPromptbyVikingArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically generates stylized prompts based on given positive and negative text inputs, utilizing a specified style from Viking art themes. It aims to enhance the creative process by integrating thematic elements into the generated content.

# Input types
## Required
- text_positive
    - Positive text input is crucial for setting the affirmative tone of the generated prompt. It provides the base content that will be stylistically enhanced to match the selected Viking art theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is essential for defining aspects to avoid in the generated prompt. It helps refine the output, ensuring it follows the desired thematic direction without including unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the thematic direction of the prompt. It guides the node in selecting appropriate templates and linguistic elements that resonate with the chosen Viking art style.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt parameter allows optional logging of the prompt generation process. When enabled, it provides valuable insights into how the node operates and the transformations applied to the input text.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output contains positive stylized prompt text that has been enhanced with thematic elements from the Viking art style, offering a creative and engaging result.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output presents negative stylized prompt text that has been adjusted to exclude unwanted elements, ensuring the final output meets the specified thematic requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptbyVikingArt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_viking.json')
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
# Documentation
- Class name: SDXLPromptStylerbyCamera
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically generates stylized prompts from given positive and negative text inputs, using a predefined style set to enhance the creative process. It aims to inspire and guide users to create more engaging and targeted content.

# Input types
## Required
- text_positive
- Positive text input is crucial for setting the expected tone and direction of the generated prompt. It forms the basis for applying stylized elements, ensuring the output aligns with the intended message and emotion.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Negative text input is essential for defining aspects to avoid in the generated prompt. It refines the output by excluding elements that could weaken the intended message or tone.
    - Comfy dtype: STRING
    - Python dtype: str
- style
- Style parameters are vital for selecting an appropriate style template from available options. They affect the overall aesthetic and thematic direction, ensuring the generated content matches the chosen style.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
- Log prompt parameters allow users to optionally enable logging of the prompt generation process. This feature aids debugging and understanding of the node's internal mechanisms, providing insight into how the final output is formed.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
- The output provides a refined positive prompt text, incorporating the selected style and excluding unwanted elements specified by the negative text input. This result serves as a guide for creating content that aligns with the desired tone and message.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
- The output provides a modified negative prompt text, adjusted to fit the chosen style, ensuring the final content is not affected by elements that would diminish the intended message or tone.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyCamera:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_camera.json')
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
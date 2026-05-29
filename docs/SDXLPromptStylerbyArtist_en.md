# Documentation
- Class name: SDXLPromptStylerbyArtist
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to refine text prompts according to the style of a selected artist, enhancing the creative process by integrating artistic nuances into the generated content.

# Input types
## Required
- text_positive
    - Positive text input is crucial as it sets the base content for the node, ensuring that the generated prompt aligns with the desired subject.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input serves as a contrast to positive text, allowing the node to refine the style by excluding unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style parameter is essential as it determines the artistic influence applied to the text, shaping the overall aesthetics of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging option allows monitoring of the node's internal process, providing insights into how the style is applied to the prompt.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - Output provides a positively styled text prompt that reflects the selected artist's style and enhances creative messaging.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - Output provides a negatively styled text prompt that complements the positive output by offering a contrasting perspective.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyArtist:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_artists.json')
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
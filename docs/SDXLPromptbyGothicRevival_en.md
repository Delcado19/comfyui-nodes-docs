# Documentation
- Class name: SDXLPromptbyGothicRevival
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to stylize text prompts based on a predefined set of Gothic Revival styles, enhancing the thematic and aesthetic elements of the input text. It integrates style into the text, creating a unique and culturally resonant output that reflects the selected historical aesthetic.

# Input types
## Required
- text_positive
    - Positive text input is crucial as it sets the foundation for stylization transformation. It is the text that will be enhanced and shaped according to the selected Gothic Revival style, ensuring the final output aligns with the desired thematic direction.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input serves as a balance to the positive text, providing contrast and depth to the stylization process. It ensures the final output is not only aesthetically pleasing but also thematically sound and multifaceted.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is the core of the node's functionality, determining the aesthetic and thematic direction of the stylization. It is the reference point that transforms the input text into a piece embodying the essence of the selected Gothic Revival style.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt parameter is crucial for debugging and transparency during the stylization process. When enabled, it provides detailed logs of the transformation process, ensuring each step is recorded and can be reviewed for quality and accuracy.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - Positive prompt text, now stylized based on the selected Gothic Revival aesthetic style, is the main output of the node. It is a direct reflection of the node's ability to transform and elevate the input text to new theoretical and stylistic levels of significance.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The equally stylized negative prompt text complements the positive output by providing a contrasting perspective. It is an indispensable part of the node's output, demonstrating the depth and breadth of the stylization transformation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptbyGothicRevival:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_gothrev.json')
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
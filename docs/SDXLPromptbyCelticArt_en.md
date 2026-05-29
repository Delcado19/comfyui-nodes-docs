# Documentation
- Class name: SDXLPromptbyCelticArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

The SDXLPromptbyCelticArt node generates stylized text prompts based on Celtic art themes. It creatively combines positive and negative text inputs with the selected style to produce themed prompts. This node is crucial for enriching the thematic richness of text output in various applications, such as art generation or themed text stylization.

# Input types
## Required
- text_positive
    - The text_positive parameter is essential for defining the positive aspects of the prompt. It significantly influences the tone and content of the final stylized prompt, ensuring the output aligns with the desired positive thematic elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative parameter allows inclusion of negative aspects in the prompt. It is vital for providing contrast and depth to the stylized text, enriching the overall thematic expression.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the Celtic art thematic style applied to the prompt. It is a key factor in shaping the text aesthetic and thematic outcome, ensuring resonance with the chosen artistic theme.
    - Comfy dtype: STRING
    - Python dtype: str
- log_prompt
    - The log_prompt parameter is optional and controls whether intermediate steps of the prompt stylization process are recorded. This can be useful for debugging or for users who wish to view the transformation process.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The positive_prompt_text_g output represents the final stylized positive prompt text, a core element of the node's functionality. It contains a creative fusion of the input text and the selected style, producing a theme‑rich text output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output provides the final stylized negative prompt text, complementing the positive prompt. It plays an important role in adding complexity and nuance to the overall prompt, contributing to a more comprehensive thematic representation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptbyCelticArt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_celticart.json')
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
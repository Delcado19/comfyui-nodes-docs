# Documentation
- Class name: SDXLPromptStylerbyFantasySetting
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

The SDXLPromptStylerbyFantasySetting node styles prompts based on fantasy settings. It creatively combines positive and negative text inputs with the selected style to generate stylized prompts consistent with the chosen fantasy theme. This node plays a crucial role in enhancing thematic consistency and engagement of prompts in fantasy contexts.

# Input types
## Required
- text_positive
    - The text_positive parameter provides the key elements of positive context or affirmation to be stylized. It is essential for setting the tone of the final prompt and significantly influences the thematic outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative parameter is optional, allowing the inclusion of negative contexts that can be creatively contrasted with the positive text. This adds depth and complexity to the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the fantasy setting with which the prompt will be stylized. It is a critical input that defines the thematic direction of the stylization process.
    - Comfy dtype: STRING
    - Python dtype: str
- log_prompt
    - The log_prompt parameter is an optional toggle that, when set to 'Yes', enables logging of the style, text inputs, and generated stylized prompts. This is useful for debugging or reviewing the stylization process.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The positive_prompt_text_g output represents the stylized positive prompt text, which has been creatively adapted to fit the selected fantasy setting, enhancing thematic appeal.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output provides the stylized negative prompt text, which complements the positive prompt by offering contrasting elements within the fantasy setting.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyFantasySetting:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_fs.json')
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
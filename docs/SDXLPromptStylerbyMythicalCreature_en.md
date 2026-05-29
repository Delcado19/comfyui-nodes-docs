# Documentation
- Class name: SDXLPromptStylerbyMythicalCreature
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node enhances prompt presentation by applying stylized templates, aiming to improve user engagement and response quality.

# Input types
## Required
- text_positive
    - Positive text input is critical for generating optimistic and encouraging prompts, significantly influencing the tone and effectiveness of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is essential for providing a contrasting perspective, helping to craft balanced and nuanced prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style selection parameter is critical as it determines the thematic framework of the prompt, guiding the overall aesthetic and information delivery.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - Logging preferences allow optional visibility into node processing, aiding in debugging and understanding node operations.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positively styled prompt designed to uplift and motivate, representing a key component of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides a negatively styled prompt, offering a contrasting point and fostering comprehensive engagement with the content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyMythicalCreature:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_mc.json')
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
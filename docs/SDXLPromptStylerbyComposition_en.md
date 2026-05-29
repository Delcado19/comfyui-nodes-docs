# Documentation
- Class name: SDXLPromptStylerbyComposition
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

The SDXLPromptStylerbyComposition node aims to enhance prompt presentation by applying style compositions. It generates refined prompt texts suited to the selected aesthetic by integrating positive and negative text inputs with the chosen style. This node emphasizes the importance of style expression in prompt formulation, aiming to improve the overall quality and impact of prompts.

# Input types
## Required
- text_positive
    - The text_positive parameter is a key input that provides positive context or affirmation for the prompt. It is crucial because it sets the tone for the positive characteristics that the stylized prompt will convey. This input directly affects the node's final output, shaping the positive prompt text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative parameter serves as input for negative context or statements that the prompt aims to counteract or mitigate. Its inclusion is important because it allows the node to generate a balanced prompt that considers both positive and negative perspectives. The text_negative input plays a vital role in crafting the negative prompt text.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the style composition to be applied to the prompt. It is a critical input because it dictates the aesthetic and thematic direction of the prompt. The choice of style has a profound impact on the final output, guiding the overall presentation and feel of the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- log_prompt
    - The log_prompt parameter is an optional toggle that, when set to 'Yes', enables detailed logging of prompts during execution. This is useful for debugging or viewing how prompts are stylized. It provides transparency into the node's operations without altering the main functionality.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The positive_prompt_text_g output represents the stylized positive prompt text generated after applying the selected style to the input text. It contains refined and thematic expressions designed to convey the positive characteristics of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output provides the stylized negative prompt text that complements the positive prompt. It is crafted to address and mitigate the negative characteristics outlined in the input, contributing to a comprehensive and balanced prompt presentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerbyComposition:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_composition.json')
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
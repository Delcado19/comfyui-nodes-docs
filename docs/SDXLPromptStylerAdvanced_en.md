# Documentation
- Class name: SDXLPromptStylerAdvanced
- Category: utils
- Output node: False
- Repo Ref: https://github.com/twri/sdxl_prompt_styler

This node aims to enhance text presentation through advanced styling techniques based on a set of predefined templates. It integrates positive and negative prompts into a coherent format, allowing text customization according to specific styles.

# Input types
## Required
- text_positive_g
    - The primary positive prompt serves as the core information that needs emphasis. It is crucial for setting the tone and direction of the stylized text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Auxiliary positive prompts provide additional context or details to complement the primary information, enriching the overall content.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative prompts are used to introduce contrasting elements or opposing viewpoints, which can add depth and appeal to the stylized text.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style parameters determine the aesthetic and structural formatting applied to the text, guiding the overall look and feel of the output.
    - Comfy dtype: STYLE
    - Python dtype: dict
- negative_prompt_to
    - This parameter determines the application target of the negative prompt, whether applied to both primary and auxiliary prompts or selectively.
    - Comfy dtype: COMBO
    - Python dtype: str
- copy_to_l
    - When enabled, this flag ensures the primary positive prompt is copied to the auxiliary prompt, providing consistency and reinforcing the primary information.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- log_prompt
    - This toggle enables or disables logging of prompts and stylized text, which is useful for debugging and review purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The primary stylized text, reflecting the primary positive information after applying the selected style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Auxiliary stylized text, providing additional context for the primary information as reflected in the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - The combination of primary and auxiliary positive prompts, integrated into a coherent and stylistically consistent output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The primary negative prompt stylized according to the selected template, balancing the overall presentation through contrasting elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Auxiliary negative prompts are styled to complement the primary negative text, enhancing the depth of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Combined negative prompts styled as a whole, contributing to a comprehensive and engaging presentation of the content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerAdvanced:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        current_directory = os.path.dirname(os.path.realpath(__file__))
        (self.json_data, styles) = load_styles_from_directory(current_directory)
        return {'required': {'text_positive_g': ('STRING', {'default': '', 'multiline': True}), 'text_positive_l': ('STRING', {'default': '', 'multiline': True}), 'text_negative': ('STRING', {'default': '', 'multiline': True}), 'style': (styles,), 'negative_prompt_to': (['Both', 'G only', 'L only'], {'default': 'Both'}), 'copy_to_l': ('BOOLEAN', {'default': False, 'label_on': 'yes', 'label_off': 'no'}), 'log_prompt': ('BOOLEAN', {'default': False, 'label_on': 'yes', 'label_off': 'no'})}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING', 'STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('text_positive_g', 'text_positive_l', 'text_positive', 'text_negative_g', 'text_negative_l', 'text_negative')
    FUNCTION = 'prompt_styler_advanced'
    CATEGORY = 'utils'

    def prompt_styler_advanced(self, text_positive_g, text_positive_l, text_negative, style, negative_prompt_to, copy_to_l, log_prompt):
        (text_positive_g_styled, text_positive_l_styled, text_positive_styled, text_negative_g_styled, text_negative_l_styled, text_negative_styled) = read_sdxl_templates_replace_and_combine_advanced(self.json_data, style, text_positive_g, text_positive_l, text_negative, negative_prompt_to, copy_to_l)
        if log_prompt:
            print(f'style: {style}')
            print(f'text_positive_g: {text_positive_g}')
            print(f'text_positive_l: {text_positive_l}')
            print(f'text_negative: {text_negative}')
            print(f'text_positive_g_styled: {text_positive_g_styled}')
            print(f'text_positive_l_styled: {text_positive_l_styled}')
            print(f'text_positive_styled: {text_positive_styled}')
            print(f'text_negative_g_styled: {text_negative_g_styled}')
            print(f'text_negative_l_styled: {text_negative_l_styled}')
            print(f'text_negative_styled: {text_negative_styled}')
        return (text_positive_g_styled, text_positive_l_styled, text_positive_styled, text_negative_g_styled, text_negative_l_styled, text_negative_styled)
```
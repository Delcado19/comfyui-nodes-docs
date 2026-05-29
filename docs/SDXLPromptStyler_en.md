# Documentation
- Class name: SDXLPromptStyler
- Category: utils
- Output node: False
- Repo Ref: https://github.com/twri/sdxl_prompt_styler

The SDXLPromptStyler node is designed to beautify text inputs by applying predefined styles. It processes positive and negative prompts, allowing customization through style selection and logging options. The main goal of this node is to enhance the presentation of text while maintaining the original informational intent.

# Input types
## Required
- text_positive
    - The text_positive parameter is crucial for defining the positive aspects of the input text. It influences the node's execution by determining which text content will be positively styled.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative parameter specifies the negative aspects of the input text. It is essential to the node's operation as it determines which text content will be negatively styled.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the style transformation applied to the input text. It instructs the node to use a specific style from the available options.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- log_prompt
    - The log_prompt parameter controls whether the node should log its operations. This is useful for debugging or tracking the node's processing steps.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- style_positive
    - The style_positive parameter allows users to enable or disable positive styling of the text. It plays an important role in the appearance of the final output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- style_negative
    - The style_negative parameter is used to toggle negative styling of the text. This is an important aspect of the node's text presentation functionality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The text_positive output represents the processed styled positive text. It is the result of applying the selected style to the input text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative output provides the styled negative text after node operation. It reflects the node's ability to style text with negative connotations.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStyler:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        current_directory = os.path.dirname(os.path.realpath(__file__))
        (self.json_data, styles) = load_styles_from_directory(current_directory)
        return {'required': {'text_positive': ('STRING', {'default': '', 'multiline': True}), 'text_negative': ('STRING', {'default': '', 'multiline': True}), 'style': (styles,), 'log_prompt': ('BOOLEAN', {'default': True, 'label_on': 'yes', 'label_off': 'no'}), 'style_positive': ('BOOLEAN', {'default': True, 'label_on': 'yes', 'label_off': 'no'}), 'style_negative': ('BOOLEAN', {'default': True, 'label_on': 'yes', 'label_off': 'no'})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('text_positive', 'text_negative')
    FUNCTION = 'prompt_styler'
    CATEGORY = 'utils'

    def prompt_styler(self, text_positive, text_negative, style, log_prompt, style_positive, style_negative):
        (text_positive_styled, text_negative_styled) = read_sdxl_templates_replace_and_combine(self.json_data, style, text_positive, text_negative)
        if not style_positive:
            text_positive_styled = text_positive
            if log_prompt:
                print(f'style_positive: disabled')
        if not style_negative:
            text_negative_styled = text_negative
            if log_prompt:
                print(f'style_negative: disabled')
        if log_prompt:
            print(f'style: {style}')
            print(f'text_positive: {text_positive}')
            print(f'text_negative: {text_negative}')
            print(f'text_positive_styled: {text_positive_styled}')
            print(f'text_negative_styled: {text_negative_styled}')
        return (text_positive_styled, text_negative_styled)
```
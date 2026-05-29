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
[View source repository on GitHub](https://github.com/twri/sdxl_prompt_styler)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

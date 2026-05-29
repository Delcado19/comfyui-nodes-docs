# Documentation
- Class name: SDXLPromptStylerbySubject
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

The SDXLPromptStylerbySubject node aims to stylize prompts based on a given subject. It accepts positive and negative text inputs and applies the selected style to generate stylized prompts. The node can log the process for review, enhancing customization and personalization of prompts.

# Input types
## Required
- text_positive
    - The text_positive parameter is a string representing the positive aspect of the prompt. It is essential for defining the optimistic tone of the stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative parameter is a string representing the negative aspect of the prompt. It plays a key role in shaping the pessimistic tone of the stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the stylization method applied to the prompt. It is a key factor in the overall style and presentation of the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- log_prompt
    - The log_prompt parameter is an optional option that allows logging of the stylization process. It can be set to 'Yes' for detailed review of the transformation process.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The positive_prompt_text_g output is the stylized positive text of the prompt, reflecting the applied style and the optimistic perspective of the input.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output is the stylized negative text of the prompt, embodying the applied style and the pessimistic perspective of the input.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

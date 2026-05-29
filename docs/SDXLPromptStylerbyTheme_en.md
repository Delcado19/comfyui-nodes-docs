# Documentation
- Class name: SDXLPromptStylerbyTheme
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

The SDXLPromptStylerbyTheme class styles prompts based on predefined themes. It uses JSON files containing styles and templates to generate stylized positive and negative prompts, enhancing thematic consistency of text input.

# Input types
## Required
- text_positive
    - The text_positive parameter is a string representing the positive content of the prompt. It is critical as it forms the foundation of the stylized positive prompt output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative parameter is a string representing the negative content of the prompt. It plays a key role in shaping the stylized negative prompt output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the thematic style applied to the prompt. It is a key factor in customizing the appearance and tone of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- log_prompt
    - The log_prompt parameter is an optional setting that, when set to 'Yes', enables logging of the prompt styling process for debugging or review purposes.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The positive_prompt_text_g output is the stylized positive prompt text, designed to align with the specified theme and enhance the overall appeal of the information.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output is the stylized negative prompt text, designed to reflect the specified theme and maintain thematic integrity of the information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

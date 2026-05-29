# Documentation
- Class name: SDXLPromptStylerHorror
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to stylize text prompts based on a given horror theme, enhancing specific moods and atmosphere during narration.

# Input types
## Required
- text_positive
    - The positive text input is essential for setting the foundational mood of the horror theme. It provides the starting point for the stylistic transformation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is crucial for contrasting the positive text, adding tension and conflict, providing depth to the horror theme.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is essential in determining the specific horror theme to be applied to the text, guiding the overall aesthetic of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt option allows selective logging of the transformation process, which is useful for debugging and understanding the node's operation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positive-styled horror-themed text, enhanced by the chosen theme to create an immersive experience.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides a negative-styled horror-themed text, complementing the positive text, deepening the overall horror atmosphere.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptStylerbyTimeofDay
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically styles the prompt based on the current time, customizing information display according to the current time context to enhance user interaction experience.

# Input types
## Required
- text_positive
    - Positive text input is important because it sets the baseline for positive emotions customized and displayed according to the selected time.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is essential for providing contrastive emotions to positive text, enabling the node to balance the overall tone of the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style parameters play a key role in determining the style of prompts customized according to time, affecting the overall aesthetics and mood of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - Recording prompt parameters is a practical tool for developers and testers, enabling them to output detailed information about the styling process for debugging and validation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - Output includes positively styled text, formatted to match the selected time, enhancing user experience through customized messaging.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - Output includes negatively styled text, complementing positive text by providing contrastive emotions, contributing to a nuanced display of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

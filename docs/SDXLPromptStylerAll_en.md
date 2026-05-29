# Documentation
- Class name: SDXLPromptStylerAll
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the presentation of prompts by applying various style templates, ensuring the prompts are engaging and contextually appropriate.

# Input types
## Required
- text_positive
    - Positive text input is crucial as it sets a positive tone for the prompt. It is the foundational content that will be styled and presented to the user.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input complements the positive text by providing a contrasting perspective. This is essential for creating a balanced and comprehensive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical as it determines the aesthetic and structural formatting applied to the prompt, significantly influencing user perception and engagement.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging option allows recording details of prompt generation, which is useful for debugging and improving the node's functionality over time.
    - Comfy dtype: COMBO
    - Python dtype: str
- auto_select_style
    - When enabled, it automates the style selection process, ensuring diverse styles are applied to the prompt, enhancing overall variety and appeal.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- auto_refresh
    - Activating this parameter triggers a node refresh and generates a new prompt, ensuring content remains fresh and engaging for the user.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- positive_prompt_text_g
    - The output provides positively styled prompt text, already formatted to effectively engage and guide the user.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides negatively styled prompt text, offering a contrasting perspective to balance the overall message.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

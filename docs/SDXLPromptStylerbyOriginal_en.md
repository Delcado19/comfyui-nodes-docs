# Documentation
- Class name: SDXLPromptStylerbyOriginal
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to beautify prompts based on predefined templates, enhancing the presentation and appeal of the content.

# Input types
## Required
- text_positive
    - The positive text input is critical as it forms the foundation of the beautified prompt. This is the content that will be formatted according to the selected style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is essential for providing contrasting elements to the positive text, allowing for more nuanced and comprehensive prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical in determining the aesthetic and structural elements to be applied to the prompt, guiding the overall look and feel.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging option allows selective recording of the prompt generation process, which is beneficial for debugging and review purposes.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides the beautified positive prompt, which is a formatted and enhanced version of the original input text.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides the beautified negative prompt, offering a complementary perspective to the positive prompt, enriching the overall information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

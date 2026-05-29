# Documentation
- Class name: SDXLPromptbySportsArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to stylize text prompts based on sports themes, enhancing the thematic content and engagement of the prompts.

# Input types
## Required
- text_positive
    - The positive text input is crucial as it sets the tone for the positive aspects of the sports theme that will be incorporated into the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is essential to provide an element of contrast with the positive text, allowing the stylized prompt to be more nuanced and balanced.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the thematic direction of the sports-related prompt, ensuring the content aligns with the chosen sports theme.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log parameter allows for selective output of detailed information during node execution, providing insight into the template replacement process.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positively stylized prompt that incorporates the selected sports theme, enhancing user interaction with the content.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides a negatively stylized prompt that contrasts with the positive text, offering a comprehensive perspective on the sports theme.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

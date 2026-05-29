# Documentation
- Class name: SDXLPromptStylerbySteamPunkRealism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to stylize prompts based on a predefined steampunk realism style set, enhancing the thematic content of the input text by integrating style elements and narrative themes specific to the steampunk genre.

# Input types
## Required
- text_positive
    - The positive text input is critical as it provides the foundational content upon which the node applies the steampunk realism style. This is the text that will be enhanced and transformed to reflect the desired thematic style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input serves as a contrast to the positive text, allowing the node to fine-tune the stylized transformation by integrating specific elements that are not desired in the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical as it determines the thematic direction and aesthetic choices the node will apply to the input text. It is the guiding force behind the stylization transformation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt parameter is an optional setting that allows users to log the transformation process, providing insights into how the node applies the steampunk realism style to the input text.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output is positively stylized text, transformed to embody the steampunk realism style, ready for use in various creative applications.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output is negatively stylized text, helping to refine the thematic content and aesthetics of the final product by providing elements that contrast with the positive output.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

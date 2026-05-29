# Documentation
- Class name: SDXLPromptStylerbyImpressionism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node creatively transforms input text by applying an Impressionist-inspired style template, enhancing the aesthetic and thematic depth of the text.

# Input types
## Required
- text_positive
    - The positive text input serves as the foundation for style transformation, providing content that will be imbued with Impressionist qualities.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is used to contrast with the positive text, potentially adding depth and complexity to the final stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style selected from predefined Impressionist style templates determines the overall tone and direction of the text transformation.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - This parameter controls whether intermediate steps and results of the stylization process are logged, aiding in understanding the node's operation and output.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output showcases positively stylized text, now infused with the chosen Impressionist style, ready for further use or display.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output includes negatively stylized text, complementing the positive output and potentially providing contrasting perspectives or additional context.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptStylerbyLighting
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the presentation of prompts by applying style templates, with the goal of improving text readability and appeal.

# Input types
## Required
- text_positive
    - This parameter is the positive text that needs to be stylized by the node, and is the basis for enhanced presentation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - This parameter is the negative text that needs to be combined with the positive text, adding contrast and depth to the final stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - This parameter determines the style template to be applied, significantly affecting the overall aesthetics and tone of the stylized prompt.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - This parameter controls whether to record intermediate steps and results, which helps in debugging and understanding the node's operation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output is the stylized positive text, enhanced in visual appeal and effectiveness through the selected template.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output is the stylized negative text, complementing the positive text and contributing to the comprehensiveness of the stylized information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

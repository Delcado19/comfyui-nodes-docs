# Documentation
- Class name: SDXLPromptbyStreetArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node matches the input text with the specified style, enhancing the thematic content through stylistic elements extracted from street art.

# Input types
## Required
- text_positive
    - This parameter provides the positive text to be stylized according to the selected street art theme, serving as the basis for the creative adaptation process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - This parameter contains negative text that contrasts with the positive text, enabling the node to focus on the desired stylistic elements without distraction.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - This parameter defines the street art style to be applied, guiding the node in selecting appropriate templates and artistic elements for text transformation.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - This parameter enables or disables logging of the stylization process, providing a method for tracking transformations and debugging any issues that may arise.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output contains the positive stylized text, transformed to reflect the selected street art style, enhancing thematic expression and artistic appeal.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides the negative stylized text, serving as a contrasting element to the positive text, ensuring clarity and focus in the final presentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

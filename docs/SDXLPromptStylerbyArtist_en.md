# Documentation
- Class name: SDXLPromptStylerbyArtist
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to refine text prompts according to the style of a selected artist, enhancing the creative process by integrating artistic nuances into the generated content.

# Input types
## Required
- text_positive
    - Positive text input is crucial as it sets the base content for the node, ensuring that the generated prompt aligns with the desired subject.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input serves as a contrast to positive text, allowing the node to refine the style by excluding unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style parameter is essential as it determines the artistic influence applied to the text, shaping the overall aesthetics of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging option allows monitoring of the node's internal process, providing insights into how the style is applied to the prompt.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - Output provides a positively styled text prompt that reflects the selected artist's style and enhances creative messaging.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - Output provides a negatively styled text prompt that complements the positive output by offering a contrasting perspective.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptbyRomanticNationalismArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node creatively adapts input text to a specified style based on Romantic Nationalist art principles, enhancing the thematic content and emotional expression of the original text.

# Input types
## Required
- text_positive
    - Positive text input is critical, as it sets the foundation for the style transformation. This is the text that will be enhanced and adapted to the chosen style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input serves as a contrast to the positive text, providing counterpoints that can be integrated into the final stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is essential, as it determines the thematic and emotional direction of the text transformation, guiding the node to produce a stylistically consistent output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log option allows selective visualization of the transformation process, offering insights into how the node achieves its stylistic adaptation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output demonstrates the enhanced positive text, now infused with the chosen style, ready for further use or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The adapted negative text complements the positive output, providing a contrasting perspective that can enrich the overall thematic depth.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

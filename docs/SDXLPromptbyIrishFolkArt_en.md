# Documentation
- Class name: SDXLPromptbyIrishFolkArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node creatively adapts input text into Irish folk art style, enhancing thematic expression and cultural resonance.

# Input types
## Required
- text_positive
    - Positive text input is essential for generating style‑enhanced output, capturing the essence of Irish folk art.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is crucial for refining output, ensuring strict adherence to Irish folk art style.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style parameters are vital; they determine artistic direction and the cultural elements infused into the text.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log option allows selective visualization of the transformation process, aiding understanding of the node's function.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positively stylized text embodying the spirit of Irish folk art, ready for further use or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output also includes a negatively stylized text, offering a contrasting element to the positive text for comprehensive style evaluation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptStylerMisc
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the presentation of prompts by applying predefined styles, ensuring the prompts are engaging and contextually appropriate.

# Input types
## Required
- text_positive
    - The positive text input is crucial as it sets a positive tone for the prompt. It will be the foundational text that is styled and formatted according to the selected template.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is essential for providing contrasting elements of the prompt, allowing for a more nuanced and balanced presentation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- style
    - The style input determines the aesthetic and structural characteristics of the prompt, influencing its overall appeal and effectiveness.
    - Comfy dtype: COMBO
    - Python dtype: str
- log_prompt
    - The log prompt input is a toggle for enabling logging, which is useful for debugging and understanding the node's operation and the prompts generated.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides the styled positive prompt text, which has been formatted according to the selected style, enhancing its impact and readability.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides the styled negative prompt text, which complements the positive text by offering a contrasting perspective, enriching the overall information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

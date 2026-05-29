# Documentation
- Class name: SDXLPromptStylerbyCyberpunkSurrealism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node generates aesthetically consistent and thematically rich content by creatively transforming input text into style-enhanced prompts through applying templates selected from a curated collection.

# Input types
## Required
- text_positive
    - The positive text input serves as the foundation for stylistic transformation, providing content that will be enhanced and shaped by the selected template.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input complements the positive text, providing contrast and depth for the final stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - Style selection is critical, as it determines the thematic and aesthetic direction of prompt stylization, guiding the transformation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - Logging preference determines whether intermediate steps and results are output, aiding in understanding the node's operation and stylization process.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output presents the positively stylized text, which is the result of applying the selected template to the original input, now enhanced with thematic and stylistic elements.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output includes negatively stylized text, providing contrasting elements to the positive text, enriching the overall stylized output.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

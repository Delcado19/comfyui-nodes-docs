# Documentation
- Class name: SDXLPromptStylerbyMythicalCreature
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node enhances prompt presentation by applying stylized templates, aiming to improve user engagement and response quality.

# Input types
## Required
- text_positive
    - Positive text input is critical for generating optimistic and encouraging prompts, significantly influencing the tone and effectiveness of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is essential for providing a contrasting perspective, helping to craft balanced and nuanced prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style selection parameter is critical as it determines the thematic framework of the prompt, guiding the overall aesthetic and information delivery.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - Logging preferences allow optional visibility into node processing, aiding in debugging and understanding node operations.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positively styled prompt designed to uplift and motivate, representing a key component of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides a negatively styled prompt, offering a contrasting point and fostering comprehensive engagement with the content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptStylerbyCamera
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically generates stylized prompts from given positive and negative text inputs, using a predefined style set to enhance the creative process. It aims to inspire and guide users to create more engaging and targeted content.

# Input types
## Required
- text_positive
- Positive text input is crucial for setting the expected tone and direction of the generated prompt. It forms the basis for applying stylized elements, ensuring the output aligns with the intended message and emotion.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Negative text input is essential for defining aspects to avoid in the generated prompt. It refines the output by excluding elements that could weaken the intended message or tone.
    - Comfy dtype: STRING
    - Python dtype: str
- style
- Style parameters are vital for selecting an appropriate style template from available options. They affect the overall aesthetic and thematic direction, ensuring the generated content matches the chosen style.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
- Log prompt parameters allow users to optionally enable logging of the prompt generation process. This feature aids debugging and understanding of the node's internal mechanisms, providing insight into how the final output is formed.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
- The output provides a refined positive prompt text, incorporating the selected style and excluding unwanted elements specified by the negative text input. This result serves as a guide for creating content that aligns with the desired tone and message.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
- The output provides a modified negative prompt text, adjusted to fit the chosen style, ensuring the final content is not affected by elements that would diminish the intended message or tone.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

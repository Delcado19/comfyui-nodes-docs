# Documentation
- Class name: SDXLPromptStylerbyQuantumRealism
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node is designed to style prompts according to a predefined style, enhancing the thematic and aesthetic presentation of the text without altering its core information.

# Input types
## Required
- text_positive
    - Positive text input is essential for generating prompts with a positive framework. It serves as the basis for applying stylization elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is crucial for providing elements that contrast with the positive text, enabling the node to create more nuanced and balanced prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the overall aesthetic and thematic direction of the stylized prompt, guiding the transformation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging prompt option allows optional recording of the prompt generation process, which is very beneficial for debugging and understanding the node's operation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - Output provides a stylistically enhanced positive prompt that reflects the integration of the input text with the selected style.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - Output provides a stylistically enhanced negative prompt, offering a point of contrast to the positive prompt and contributing to a comprehensive presentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

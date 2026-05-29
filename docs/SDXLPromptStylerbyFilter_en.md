# Documentation
- Class name: SDXLPromptStylerbyFilter
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically styles prompts based on provided positive and negative text inputs, using a specified style template to generate refined and targeted messages.

# Input types
## Required
- text_positive
    - The positive text input is very important because it sets the tone for the desired message. It is used to create a refined and targeted positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is crucial for defining the contrasting elements to avoid in the message. It helps create a nuanced prompt that balances both positive and negative aspects.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical in determining the overall aesthetic and delivery of the generated prompt. It guides the transformation of the input text into a coherent and stylistically consistent output.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt option allows optional logging of the prompt generation process, providing transparency and insight into how the prompt is styled and constructed.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output positive prompt text is the result of the styling process, encapsulating the desired message in a refined and engaging manner.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output negative prompt text provides balance to the positive prompt, ensuring the message is comprehensive and addresses potential concerns or objections.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

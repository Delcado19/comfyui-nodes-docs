# Documentation
- Class name: SDXLPromptbyFashionArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the creative process by generating fashion-inspired prompts based on positive and negative text inputs. It utilizes a predefined set of styles to craft prompts that can inspire designers and artists, aiming to foster innovation and diversity in fashion creation.

# Input types
## Required
- text_positive
    - The positive text input serves as the foundation for creative prompts, providing constructive and uplifting information that will be integrated into the final stylized prompt. It is crucial for setting the tone and direction of fashion inspiration.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is used to contrast with the positive information, adding depth and complexity to the final prompt. It helps create a more nuanced and engaging fashion concept by highlighting areas to avoid or overcome.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is essential for guiding the transformation of text inputs into a cohesive and thematic fashion prompt. It influences the language, tone, and structure of the output, ensuring the final prompt aligns with the selected fashion aesthetic.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt option allows optional logging of generated prompts, which is beneficial for review and improvement. It helps track the creative process and ensures the node's functionality meets user expectations.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a refined and stylized positive prompt, blending user input with the selected fashion style. It is a key component in driving creative direction and serves as a catalyst for further fashion design exploration.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative prompt output complements the positive prompt by providing contrasting points and additional considerations. It enriches the overall creative output by presenting a more comprehensive view of the fashion concept, encouraging a balanced and informed approach to design.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptStylerbyFocus
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the presentation of prompts by applying specific style templates, thereby improving user experience and engagement through tailored and visually appealing text formatting.

# Input types
## Required
- text_positive
    - The positive text input is critical as it sets the foundation for the positive aspects of the prompt. This is the content that will be stylized and presented to the user, designed to elicit a positive response.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input is essential for providing contrasting elements of the prompt, allowing for a more nuanced and balanced presentation. It complements the positive text by offering a different perspective.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- style
    - The style input is a key component that determines the aesthetic and structural formatting of the prompt. It guides the transformation of text into a visually appealing and coherent message.
    - Comfy dtype: COMBO
    - Python dtype: str
- log_prompt
    - The log prompt input serves as a debugging tool for recording the details of the prompt for analysis and review. It helps refine the node's functionality and ensure optimal output.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides stylized positive prompt text, formatted according to the selected style template, enhancing the readability and appeal of the information.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides stylized negative prompt text, complementing the positive prompt by offering a contrasting perspective, thereby contributing to comprehensive and balanced communication.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptStylerbyMood
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to stylize prompts based on sentiment, enhancing the thematic expression of text input. It leverages predefined styles to creatively modify the emotion of the provided text, aiming to enrich the overall narrative and emotional depth of the content.

# Input types
## Required
- text_positive
    - Positive text input is essential for setting the base sentiment of the prompt. It serves as the foundation for sentiment-based stylization, significantly influencing the tone and emotional resonance of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is crucial for providing a contrasting sentiment to the positive text. It allows the node to create more nuanced and balanced emotional expression, contributing to the complexity and depth of the stylized prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the aesthetic and emotional direction of the stylized prompt. It guides the node in selecting appropriate sentiment-based templates, which is critical for achieving the desired thematic and stylistic results.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt parameter facilitates debugging and monitoring by optionally enabling logging of the prompt generation process. This feature helps in understanding the node's operation and ensuring transparency in the stylization process.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output provides a positively stylized version of the input text, reflecting the selected sentiment and style enhancement. This result is important for delivering emotionally resonant and thematically consistent narratives.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides a negatively stylized version of the input text, offering a contrasting perspective to the positive prompt. It plays a vital role in establishing a comprehensive emotional range and depth in the stylized content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SDXLPromptbyVikingArt
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node dynamically generates stylized prompts based on given positive and negative text inputs, utilizing a specified style from Viking art themes. It aims to enhance the creative process by integrating thematic elements into the generated content.

# Input types
## Required
- text_positive
    - Positive text input is crucial for setting the affirmative tone of the generated prompt. It provides the base content that will be stylistically enhanced to match the selected Viking art theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input is essential for defining aspects to avoid in the generated prompt. It helps refine the output, ensuring it follows the desired thematic direction without including unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter plays a key role in determining the thematic direction of the prompt. It guides the node in selecting appropriate templates and linguistic elements that resonate with the chosen Viking art style.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The log prompt parameter allows optional logging of the prompt generation process. When enabled, it provides valuable insights into how the node operates and the transformations applied to the input text.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- positive_prompt_text_g
    - The output contains positive stylized prompt text that has been enhanced with thematic elements from the Viking art style, offering a creative and engaging result.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output presents negative stylized prompt text that has been adjusted to exclude unwanted elements, ensuring the final output meets the specified thematic requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wolfden/ComfyUi_PromptStylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

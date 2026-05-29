# Documentation
- Class name: OneButtonPrompt
- Category: OneButtonPrompt
- Output node: False
- Repo Ref: https://github.com/AIrjen/OneButtonPrompt

This node aims to generate dynamic prompts based on various input parameters, designed to produce diverse and engaging outputs for content creation. It combines elements such as theme, artistic style, and environmental context to generate cohesive and richly themed prompts.

# Input types
## Required
- insanitylevel
    - This parameter determines the complexity and sophistication of the generated prompts, with higher levels resulting in more detailed and nuanced outputs. It directly affects the diversity and depth of elements included in the prompt.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- artist
    - The artist parameter allows specifying a particular artistic style or creator, guiding the aesthetic and thematic direction of the generated prompt.
    - Comfy dtype: COMBO
    - Python dtype: str
- imagetype
    - This parameter sets the desired type of image or visual representation, influencing the medium, style, and overall visual approach of the generated content.
    - Comfy dtype: COMBO
    - Python dtype: str
- subject
    - The theme parameter is crucial in determining the main focus or subject of the generated prompt, influencing narrative, character, and setting elements.
    - Comfy dtype: COMBO
    - Python dtype: str
- imagemodechance
    - This parameter adjusts the likelihood of including certain image patterns in the prompt, thereby affecting visual diversity and creativity.
    - Comfy dtype: INT
    - Python dtype: int
- custom_subject
    - The custom theme parameter allows inputting specific themes the user wishes to focus on, ensuring the generated prompt is tailored to their interests.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_outfit
    - This parameter enables users to specify particular clothing or attire for the theme, adding a personalized touch to the generated prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The output is a comprehensive and creatively constructed prompt, encompassing the input parameters, providing a rich foundation for content creation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/AIrjen/OneButtonPrompt)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

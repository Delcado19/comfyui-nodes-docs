# Documentation
- Class name: CR_SelectFont
- Category: Comfyroll/Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SelectFont node is designed to allow users to select a font from a predefined list of available TrueType fonts. It plays a crucial role in setting the font in text rendering. This node abstracts the complexity of font management by providing a direct interface for users to select the desired font, ensuring compatibility and ease of use across different operating systems.

# Input types
## Required
- font_name
    - The 'font_name' parameter is essential for specifying the exact font the user wishes to use for text rendering. It directly affects the visual output and style of the rendered text, making it a critical choice for achieving the desired aesthetics and readability.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- font_name
    - The 'font_name' output parameter represents the selected font that will be used in subsequent text rendering processes. It marks the successful selection of a font and is crucial for the continuity and consistency of text styling throughout the workflow.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to documentation for further assistance. It is particularly useful for users who need additional guidance on how to use the selected font or learn more about the font selection process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

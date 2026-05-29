# Documentation
- Class name: CR_TextOperation
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextOperation node is designed to perform various text operations. It accepts a string input and applies specified operations such as converting text to uppercase, lowercase, or title case. The node also handles more complex operations like reversing case, reversing text, trimming whitespace, and completely removing spaces. It serves as a versatile tool for preprocessing and transforming text data within workflows.

# Input types
## Required
- text
    - The 'text' parameter is the primary input for the node and is essential for all text operations. It determines the data that will be manipulated based on the selected operation. The node's functionality is directly tied to the content and format of the provided text.
    - Comfy dtype: STRING
    - Python dtype: str
- operation
    - The 'operation' parameter specifies the particular text operation to perform. It is a key component as it defines the type of transformation to apply to the input text, influencing the node's final output.
    - Comfy dtype: COMBO['uppercase', 'lowercase', 'capitalize', 'invert_case', 'reverse', 'trim', 'remove_spaces']
    - Python dtype: str

# Output types
- STRING
    - The 'STRING' output parameter represents the result of the text operation. It is the transformed text after applying the specified operation, demonstrating the node's capabilities.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to documentation for further assistance. It is particularly useful for users seeking additional information about node operations or troubleshooting.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

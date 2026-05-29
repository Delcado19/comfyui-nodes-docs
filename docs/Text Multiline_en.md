# Documentation
- Class name: WAS_Text_Multiline
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Multiline node is designed to process and format multiline text input. It filters out comments and empty lines, then replaces predefined and custom tokens with their corresponding values, providing a versatile way to inject dynamic data into text templates.

# Input types
## Required
- text
    - The 'text' parameter is the primary input for the node, accepting a multiline string that may contain comments and token placeholders. It is essential to the node's operation, as it defines the base text to be processed and formatted.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- new_text
    - The 'new_text' output parameter represents the processed text after filtering and token replacement. It is important because it is the final output of the node, providing the user with ready-to-use formatted text.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

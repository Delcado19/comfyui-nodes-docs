# Documentation
- Class name: WAS_Text_Add_Token_Input
- Category: WAS Suite/Text/Tokens
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Add_Token_Input node is designed to manage and manipulate custom tokens in text processing workflows. It allows users to add or delete tokens, and provides functionality to print the current token list. This node plays a critical role in customizing and personalizing text output based on predefined or user-supplied tokens.

# Input types
## Required
- token_name
    - The token_name parameter is essential for identifying the unique name of the token to be added or operated on. It directly affects the node's ability to correctly reference and modify the desired token within the text processing system.
    - Comfy dtype: STRING
    - Python dtype: str
- token_value
    - The token_value parameter specifies the value to be associated with token_name. It is a critical input as it determines the actual content that will replace the token placeholder in the text during processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- print_current_tokens
    - When the print_current_tokens parameter is set to 'true', it triggers the node to output the current custom token list. This feature is useful for debugging and verifying the state of the token list after modifications.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: Union[str, None]

# Output types
- token_name_output
    - token_name_output provides the name of the token added or operated on by the node. It is important as it confirms the identity of the processed token.
    - Comfy dtype: STRING
    - Python dtype: str
- token_value_output
    - token_value_output returns the value associated with token_name. This output is important for verifying the correct value set for the token in the text processing system.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

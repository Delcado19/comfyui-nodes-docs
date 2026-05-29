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
```
class WAS_Text_Add_Token_Input:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'token_name': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False}), 'token_value': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False}), 'print_current_tokens': (['false', 'true'],)}}
    RETURN_TYPES = ()
    FUNCTION = 'text_add_token'
    OUTPUT_NODE = True
    CATEGORY = 'WAS Suite/Text/Tokens'

    def text_add_token(self, token_name, token_value, print_current_tokens='false'):
        if token_name.strip() == '':
            cstr(f'A `token_name` is required for a token; token name provided is empty.').error.print()
            pass
        tk = TextTokens()
        tk.addToken(token_name, token_value)
        if print_current_tokens == 'true':
            cstr(f'Current Custom Tokens:').msg.print()
            print(json.dumps(tk.custom_tokens, indent=4))
        return (token_name, token_value)

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```
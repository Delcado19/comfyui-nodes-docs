# Documentation
- Class name: WAS_Text_Add_Tokens
- Category: WAS Suite/Text/Tokens
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Add_Tokens node is designed to process and manipulate text tokens. It augments input text by adding custom tokens, which can be used for various purposes such as timestamps, user identification, or device information. The node's functionality focuses on injecting dynamic elements into static text, thus providing a versatile tool for text processing tasks.

# Input types
## Required
- tokens
    - ‘tokens’ parameter is crucial for the node's operation as it defines the custom tokens to be added to the text. These tokens can represent dynamic data such as current time, hostname, or other system-specific information. Including these tokens allows for the creation of rich text that can be used for various applications.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- print_current_tokens
    - ‘print_current_tokens’ parameter is an optional switch that, when set to ‘true’, instructs the node to print the current custom token status. This feature is useful for debugging and verifying the tokens being applied to the text.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: Union[str, None]

# Output types
- tokens
    - The output ‘tokens’ parameter represents the modified text with newly added or updated custom tokens. This output can be used for further processing or analysis in downstream tasks, allowing seamless integration of dynamic text elements into various workflows.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_Add_Tokens:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'tokens': ('STRING', {'default': '[hello]: world', 'multiline': True}), 'print_current_tokens': (['false', 'true'],)}}
    RETURN_TYPES = ()
    FUNCTION = 'text_add_tokens'
    OUTPUT_NODE = True
    CATEGORY = 'WAS Suite/Text/Tokens'

    def text_add_tokens(self, tokens, print_current_tokens='false'):
        import io
        tk = TextTokens()
        for line in io.StringIO(tokens):
            parts = line.split(':')
            token = parts[0].strip()
            token_value = parts[1].strip()
            tk.addToken(token, token_value)
        if print_current_tokens == 'true':
            cstr(f'Current Custom Tokens:').msg.print()
            print(json.dumps(tk.custom_tokens, indent=4))
        return tokens

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```
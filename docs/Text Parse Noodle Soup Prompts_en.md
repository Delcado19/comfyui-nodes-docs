# Documentation
- Class name: WAS_Text_Parse_NSP
- Category: WAS Suite/Text/Parse
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Parse_NSP node is designed to process and transform text according to a specified pattern. It leverages the capabilities of "Noodle Soup Prompts" for creative text manipulation, or uses a wildcard replacement method for more structured handling. This node is essential for tasks that require text parsing or enhancement, providing a versatile solution for various text‑based applications.

# Input types
## Required
- text
    - The text parameter is the core input of the node. It determines the content that will undergo parsing and transformation. The node's operation heavily depends on this input, making it crucial for achieving the desired output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mode
    - The pattern parameter determines the parsing strategy the node adopts. It can be set to "Noodle Soup Prompts" for a creative approach, or to "Wildcards" for more structured text operations. This parameter is vital for guiding the node's processing behavior.
    - Comfy dtype: STRING
    - Python dtype: str
- noodle_key
    - The noodle_key parameter serves as a delimiter in the text when using the "Noodle Soup Prompts" mode. It marks the start and end of terms that can be replaced or manipulated, thus playing an important role in the parsing process.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed parameter is an optional integer that can introduce randomness into the parsing process. It provides a consistent starting point for random operations, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_text
    - The new_text output represents the processed text after the node applies the specified parsing method. It is the final result of the node's function and holds significant value for subsequent operations or analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_Parse_NSP:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mode': (['Noodle Soup Prompts', 'Wildcards'],), 'noodle_key': ('STRING', {'default': '__', 'multiline': False}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    OUTPUT_NODE = True
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'text_parse_nsp'
    CATEGORY = 'WAS Suite/Text/Parse'

    def text_parse_nsp(self, text, mode='Noodle Soup Prompts', noodle_key='__', seed=0):
        if mode == 'Noodle Soup Prompts':
            new_text = nsp_parse(text, seed, noodle_key)
            cstr(f'Text Parse NSP:\n{new_text}').msg.print()
        else:
            new_text = replace_wildcards(text, None if seed == 0 else seed, noodle_key)
            cstr(f'CLIPTextEncode Wildcards:\n{new_text}').msg.print()
        return (new_text,)
```
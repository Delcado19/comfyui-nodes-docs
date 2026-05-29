# Documentation
- Class name: CharacterInText
- Category: ♾️Mixlab/GPT
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node facilitates identifying specific characters in text and calculating their indices. It processes text data to determine the frequency of a given character from a specified index, providing a simple yet effective measure for text analysis tasks.

# Input types
## Required
- text
    - The text parameter is critical as it is the source to verify character existence. It serves as the node's primary input to achieve its purpose.
    - Comfy dtype: STRING
    - Python dtype: str
- character
    - The character parameter is essential for the node, determining which specific character it searches for in the text. It defines the search focus and influences the node's operational outcome.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - The start index parameter defines where the node begins searching for the character in the text. It affects the search scope and resulting index values.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The output result represents the indices of the specified character in the text, starting from the given start index. It is a direct output reflecting the node's core function and quantifies character presence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class CharacterInText:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'character': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'start_index': ('INT', {'default': 1, 'min': 0, 'max': 1024, 'step': 1, 'display': 'number'})}}
    INPUT_IS_LIST = False
    RETURN_TYPES = ('INT',)
    FUNCTION = 'run'
    OUTPUT_IS_LIST = (False,)
    CATEGORY = '♾️Mixlab/GPT'

    def run(self, text, character, start_index):
        b = 1 if character.lower() in text.lower() else 0
        return (b + start_index,)
```
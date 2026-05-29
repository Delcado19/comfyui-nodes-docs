# Documentation
- Class name: TextInput
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The TextInput node is designed to handle text input, providing a simple interface for processing string data. It can accept multi-line text, offering flexibility for various text processing tasks. In workflows that require text analysis or manipulation, this node plays a key role, ensuring that the text is properly formatted and ready for subsequent operations.

# Input types
## Required
- text
    - The ‘text’ parameter is the main input of the TextInput node. This is where the actual text to be processed is provided. This input is crucial because it directly affects the node's operation and subsequent output. The text can span multiple lines, accommodating a wide range of text inputs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output_text
    - The ‘output_text’ is the result produced by the TextInput node after processing the input text. It represents a transformed or analyzed version of the input, depending on the operation performed by the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class TextInput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'default': ''})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, text):
        return (text,)
```
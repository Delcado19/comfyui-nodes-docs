
# Documentation
- Class name: String Literal
- Category: ImageSaverTools/utils
- Output node: False

The String Literal node is designed to encapsulate and manage string values within a node network. It serves as a fundamental tool for handling literal string inputs, enabling seamless integration and manipulation of text data across various nodes and processes.

# Input types
## Required
- string
    - This parameter allows users to input a literal string value, which the node then processes or passes along as needed. It is the primary means of introducing text data into a node workflow, highlighting the node's role in text management and manipulation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - Outputs the input literal string value, facilitating the passing of text data to subsequent nodes or processes in the network.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md)
    - [Text Concatenate](../../was-node-suite-comfyui/Nodes/Text Concatenate.md)
    - [StringFunction|pysssss](../../ComfyUI-Custom-Scripts/Nodes/StringFunction|pysssss.md)



## Source code
```python
class StringLiteral:
    RETURN_TYPES = ("STRING",)
    FUNCTION = "get_string"
    CATEGORY = "ImageSaverTools/utils"

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"string": ("STRING", {"default": "", "multiline": True})}}

    def get_string(self, string):
        return (string,)

```

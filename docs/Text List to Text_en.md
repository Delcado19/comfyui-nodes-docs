# Documentation
- Class name: WAS_Text_List_to_Text
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_List_to_Text node is designed to merge a series of text strings into a single text string. It achieves this by inserting a specified delimiter between each element in the list, effectively combining them into a coherent sequence. This node plays a critical role in text processing workflows where multiple text inputs need to be consolidated into a unified format.

# Input types
## Required
- delimiter
    - The delimiter parameter defines the character or string used when joining the elements of the text list together. It is crucial for determining the format of the final merged text and can significantly impact the readability and structure of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_list
    - The text_list parameter is the collection of text strings that the node will process. This is a mandatory input, indicating that the node requires this data to perform its function. The node's operation directly depends on the content and structure of text_list, which will determine the final output after the joining process.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Output types
- merged_text
    - The merged_text output is the result of joining the input text_list using the specified delimiter. It represents the combined text as a single string, which can be used for further processing or analysis in downstream tasks.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_List_to_Text:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'delimiter': ('STRING', {'default': ', '}), 'text_list': ('LIST', {'forceInput': True})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'text_list_to_text'
    CATEGORY = 'WAS Suite/Text'

    def text_list_to_text(self, delimiter, text_list):
        if delimiter == '\\n':
            delimiter = '\n'
        merged_text = delimiter.join(text_list)
        return (merged_text,)
```
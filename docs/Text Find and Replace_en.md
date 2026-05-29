# Documentation
- Class name: WAS_Search_and_Replace
- Category: WAS Suite/Text/Search
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node is designed to perform search and replace operations on a given text. It identifies occurrences of a specified substring within the text and replaces them with a different substring. The node's functionality aims to facilitate text manipulation and data cleaning tasks by providing a direct string replacement interface.

# Input types
## Required
- text
    - The text parameter is the primary input to the node, containing the text to be processed. It is critical because it determines the context in which the search and replace operations will occur. The node's execution and results are directly influenced by the content and structure of the provided text.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- find
    - The find parameter specifies the substring that the node will search for within the text. It plays a significant role in determining the scope of the operation, as the node will target this substring for replacement. The effectiveness of the node depends on the accuracy of the substring provided in this parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- replace
    - The replace parameter defines the substring that will be used to replace occurrences of the find parameter in the text. It is essential for the transformation process, as it determines what the new content will be after replacement. The node's ability to modify the text is directly related to the value assigned to this parameter.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result_text
    - The result_text output parameter holds the modified text after the search and replace operation is complete. It represents the primary result of the node's functionality, showcasing the final state of the text with the specified replacements applied.
    - Comfy dtype: STRING
    - Python dtype: str
- replacement_count_number
    - The replacement_count_number output parameter provides a count of how many times the find substring was replaced in the text. This numerical value is important because it quantifies the extent of the replacement operations performed by the node.
    - Comfy dtype: NUMBER
    - Python dtype: int
- replacement_count_float
    - The replacement_count_float output parameter provides the replacement count in floating-point form. In cases where further calculations or analysis of the replacement count are needed, using a decimal representation of the replacement count may be useful.
    - Comfy dtype: FLOAT
    - Python dtype: float
- replacement_count_int
    - The replacement_count_int output parameter presents the replacement count as an integer. It serves as a direct numerical representation of the total number of replacements, usable in various computational or statistical contexts.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Search_and_Replace:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False}), 'find': ('STRING', {'default': '', 'multiline': False}), 'replace': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = (TEXT_TYPE, 'NUMBER', 'FLOAT', 'INT')
    RETURN_NAMES = ('result_text', 'replacement_count_number', 'replacement_count_float', 'replacement_count_int')
    FUNCTION = 'text_search_and_replace'
    CATEGORY = 'WAS Suite/Text/Search'

    def text_search_and_replace(self, text, find, replace):
        (modified_text, count) = self.replace_substring(text, find, replace)
        return (modified_text, count, float(count), int(count))

    def replace_substring(self, text, find, replace):
        (modified_text, count) = re.subn(find, replace, text)
        return (modified_text, count)
```
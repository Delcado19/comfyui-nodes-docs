# Documentation
- Class name: WAS_Search_and_Replace_Input
- Category: WAS Suite/Text/Search
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Search_and_Replace_Input node performs search and replace operations on a given text. It efficiently locates all occurrences of a specified substring and replaces them with a new substring. This node is particularly useful for preprocessing text data where updating or correcting specific phrases is common. It contributes to the overall workflow by ensuring the text is accurately modified according to user requirements.

# Input types
## Required
- text
    - The 'text' parameter is the primary input, representing the text to be searched and potentially modified. It is critical as it determines the context in which the search and replace operation occurs. The node's result heavily depends on the content and structure of the 'text' parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- find
    - The 'find' parameter specifies the substring the node will search for within 'text'. It plays a key role in identifying the portions of text that need to be replaced. The effectiveness of the search and replace operation is directly influenced by the accuracy of the 'find' parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- replace
    - The 'replace' parameter defines the new substring that will replace occurrences found by the 'find' parameter. It is important as it determines the final outcome of the text after the replacement process. The choice of 'replace' value can significantly alter the meaning or structure of the resulting text.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result_text
    - The 'result_text' output contains the modified text after all replacements are completed. It is a direct reflection of the input 'text' with specified 'find' substrings replaced by the 'replace' substring. This output is important as it represents the final state of the processed text.
    - Comfy dtype: STRING
    - Python dtype: str
- replacement_count_number
    - The 'replacement_count_number' output provides a count of how many times the 'find' substring was replaced by the 'replace' substring in the text. This numerical output is useful for analysis or logging purposes, offering insight into the extent of text modifications.
    - Comfy dtype: NUMBER
    - Python dtype: float
- replacement_count_float
    - The 'replacement_count_float' output is identical to 'replacement_count_number' but represents the count as a floating-point number. This output is useful when further calculations or statistical analysis on the replacement count are needed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- replacement_count_int
    - The 'replacement_count_int' output provides the replacement count as an integer. This output is particularly useful when an exact replacement count is needed for integer-based applications, such as data logging or integer-based calculations.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Search_and_Replace_Input:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False}), 'find': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False}), 'replace': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = (TEXT_TYPE, 'NUMBER', 'FLOAT', 'INT')
    RETURN_NAMES = ('result_text', 'replacement_count_number', 'replacement_count_float', 'replacement_count_int')
    FUNCTION = 'text_search_and_replace'
    CATEGORY = 'WAS Suite/Text/Search'

    def text_search_and_replace(self, text, find, replace):
        count = 0
        new_text = text
        while find in new_text:
            new_text = new_text.replace(find, replace, 1)
            count += 1
        return (new_text, count, float(count), int(count))

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```
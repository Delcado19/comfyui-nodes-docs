
# Documentation
- Class name: List of strings [Crystools]
- Category: crystools 🪛/List
- Output node: False
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node aggregates multiple string inputs into a list or a string joined by a specified delimiter. It processes and manipulates string collections within the Crystools framework, focusing on simple aggregation and manipulation of string data.

# Input types
## Optional
- string_i
    - Represents one of eight possible string inputs for aggregation. Each input contributes to list formation or the joined string output depending on whether a delimiter is present.
    - Comfy dtype: STRING
    - Python dtype: str or None
- delimiter
    - The delimiter string used to join the provided string inputs into a single string (if specified). Its presence or absence determines the output format (list or joined string).
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- concatenated
    - The joined string result that aggregates input strings using the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str
- list_string
    - A list containing the input strings, demonstrating the node's ability to aggregate string data into a structured collection.
    - Comfy dtype: ListString
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CListString:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
            },
            "optional": {
                "string_1": STRING,
                "string_2": STRING,
                "string_3": STRING,
                "string_4": STRING,
                "string_5": STRING,
                "string_6": STRING,
                "string_7": STRING,
                "string_8": STRING,
                "delimiter": ("STRING", {"default": " "}),
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.LIST.value
    RETURN_TYPES = ("STRING", CLASSES.CLIST_STRING_TYPE.value,)
    RETURN_NAMES = (TEXTS.CONCAT.value, KEYS.LIST.value)
    OUTPUT_IS_LIST = (False, True, )

    FUNCTION = "execute"

    def execute(self,
                string_1=None,
                string_2=None,
                string_3=None,
                string_4=None,
                string_5=None,
                string_6=None,
                string_7=None,
                string_8=None,
                delimiter=""):

        list_str = []

        if string_1 is not None and string_1 != "":
            list_str.append(string_1)
        if string_2 is not None and string_2 != "":
            list_str.append(string_2)
        if string_3 is not None and string_3 != "":
            list_str.append(string_3)
        if string_4 is not None and string_4 != "":
            list_str.append(string_4)
        if string_5 is not None and string_5 != "":
            list_str.append(string_5)
        if string_6 is not None and string_6 != "":
            list_str.append(string_6)
        if string_7 is not None and string_7 != "":
            list_str.append(string_7)
        if string_8 is not None and string_8 != "":
            list_str.append(string_8)

        return delimiter.join(list_str), [list_str]

```

# Documentation
- Class name: WAS_Search_and_Replace_Dictionary
- Category: WAS Suite/Text/Search
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node aims to perform search and replace operations on a given text using a provided dictionary. It intelligently replaces occurrences of dictionary keys in the text with their corresponding values, ensuring replacements are performed in a controlled manner to avoid overwriting unintended segments of the text.

# Input types
## Required
- text
    - The input text on which search and replace operations will be performed. This is the primary data the node will process to achieve the desired result.
    - Comfy dtype: STRING
    - Python dtype: str
- dictionary
    - A dictionary where keys are terms to search for in the text, and values are the terms that will replace the keys. It plays a critical role in determining the node's output.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, str]
## Optional
- replacement_key
    - A string used to wrap dictionary keys before searching in the text. It helps prevent unintended replacements from occurring in the text.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - A seed for the random number generator to control the randomness of the replacement process. It ensures reproducibility for deterministic results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_text
    - The generated text after applying search and replace operations. It reflects the changes made according to the input dictionary and parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Search_and_Replace_Dictionary:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False}), 'dictionary': ('DICT',), 'replacement_key': ('STRING', {'default': '__', 'multiline': False}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'text_search_and_replace_dict'
    CATEGORY = 'WAS Suite/Text/Search'

    def text_search_and_replace_dict(self, text, dictionary, replacement_key, seed):
        random.seed(seed)
        new_text = text
        for term in dictionary.keys():
            tkey = f'{replacement_key}{term}{replacement_key}'
            tcount = new_text.count(tkey)
            for _ in range(tcount):
                new_text = new_text.replace(tkey, random.choice(dictionary[term]), 1)
                if seed > 0 or seed < 0:
                    seed = seed + 1
                    random.seed(seed)
        return (new_text,)

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```
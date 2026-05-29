# Documentation
- Class name: WAS_Dictionary_Update
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'dictionary_update' method aims to merge multiple dictionaries into one. It accepts dictionaries as input and combines their key-value pairs, ensuring the resulting dictionary is a comprehensive representation of all inputs. This method is critical for applications that need to aggregate data from different sources into a unified structure.

# Input types
## Required
- dictionary_a
    - The 'dictionary_a' parameter is the first dictionary to be merged. It plays a key role in the initial formation of the result dictionary. The contents of this dictionary are combined with other dictionaries to achieve the final output.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]
- dictionary_b
    - The 'dictionary_b' parameter is the second dictionary to be merged. It contributes to the comprehensiveness of the result dictionary by adding its key-value pairs to the aggregation process.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]
## Optional
- dictionary_c
    - The 'dictionary_c' parameter is optional and can be included in the merge process. If provided, its contents are also integrated into the final dictionary, enhancing the aggregation with additional data.
    - Comfy dtype: DICT
    - Python dtype: Optional[Dict[Any, Any]]
- dictionary_d
    - The 'dictionary_d' parameter is another optional dictionary that can be used to further enrich the merged dictionary. Its inclusion depends on the specific needs of the application and the desired level of data aggregation.
    - Comfy dtype: DICT
    - Python dtype: Optional[Dict[Any, Any]]

# Output types
- return_dictionary
    - 'return_dictionary' is the output of the 'dictionary_update' method, representing the merged result of all input dictionaries. It is a critical component in applications requiring a unified view of combined data sources.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Dictionary_Update:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'dictionary_a': ('DICT',), 'dictionary_b': ('DICT',)}, 'optional': {'dictionary_c': ('DICT',), 'dictionary_d': ('DICT',)}}
    RETURN_TYPES = ('DICT',)
    FUNCTION = 'dictionary_update'
    CATEGORY = 'WAS Suite/Text'

    def dictionary_update(self, dictionary_a, dictionary_b, dictionary_c=None, dictionary_d=None):
        return_dictionary = {**dictionary_a, **dictionary_b}
        if dictionary_c is not None:
            return_dictionary = {**return_dictionary, **dictionary_c}
        if dictionary_d is not None:
            return_dictionary = {**return_dictionary, **dictionary_d}
        return (return_dictionary,)
```
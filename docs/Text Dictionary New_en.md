# Documentation
- Class name: WAS_Dictionary_New
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Dictionary_New node efficiently creates and manages dictionaries. It facilitates adding key‑value pairs and ensures only non‑empty keys are added. This node is essential for applications that require structured data representation and manipulation.

# Input types
## Required
- key_1
    - The **'key_1'** parameter is a string used as the first key in the dictionary. It is crucial in defining the dictionary structure and determines the unique identifier for the associated value.
    - Comfy dtype: STRING
    - Python dtype: str
- value_1
    - The **'value_1'** parameter stores the value corresponding to **'key_1'**. It is important because it holds the data linked to the key, giving the dictionary meaningful content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- key_2
    - The **'key_2'** parameter is an optional string that can serve as another key in the dictionary. It provides flexibility in data structuring and enables more complex relationships within the dictionary.
    - Comfy dtype: STRING
    - Python dtype: str
- value_2
    - The **'value_2'** parameter is the value associated with **'key_2'**. It contributes to the overall data stored in the dictionary, enhancing its utility across various applications.
    - Comfy dtype: STRING
    - Python dtype: str
- key_3
    - The **'key_3'** parameter is another optional key that may be included in the dictionary. It expands the dictionary’s capacity to store different information, meeting more complex data‑management needs.
    - Comfy dtype: STRING
    - Python dtype: str
- value_3
    - The **'value_3'** parameter corresponds to the value of **'key_3'**. Its presence enriches the dictionary’s content, allowing more detailed data representation.
    - Comfy dtype: STRING
    - Python dtype: str
- key_4
    - The **'key_4'** parameter is an additional optional key that can be added to the dictionary. It enhances the node’s ability to handle diverse data inputs, accommodating varied datasets.
    - Comfy dtype: STRING
    - Python dtype: str
- value_4
    - The **'value_4'** parameter is the value linked to **'key_4'**. It is vital for completing data pairs and ensuring the dictionary can represent a broad range of information.
    - Comfy dtype: STRING
    - Python dtype: str
- key_5
    - The **'key_5'** parameter is the final optional key that may be provided to the dictionary. It offers extra options for categorizing data within the dictionary, supporting comprehensive organization.
    - Comfy dtype: STRING
    - Python dtype: str
- value_5
    - The **'value_5'** parameter is the value associated with **'key_5'**. It is important for the completeness of data pairs and contributes to the overall data integrity of the dictionary.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- dictionary
    - The **'dictionary'** output is the collection of key‑value pairs added to the dictionary through the node operation. It represents the structured data generated from the input parameters and is essential for further processing and analysis.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, str]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Dictionary_New:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'key_1': ('STRING', {'default': '', 'multiline': False}), 'value_1': ('STRING', {'default': '', 'multiline': False})}, 'optional': {'key_2': ('STRING', {'default': '', 'multiline': False}), 'value_2': ('STRING', {'default': '', 'multiline': False}), 'key_3': ('STRING', {'default': '', 'multiline': False}), 'value_3': ('STRING', {'default': '', 'multiline': False}), 'key_4': ('STRING', {'default': '', 'multiline': False}), 'value_4': ('STRING', {'default': '', 'multiline': False}), 'key_5': ('STRING', {'default': '', 'multiline': False}), 'value_5': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = ('DICT',)
    FUNCTION = 'dictionary_new'
    CATEGORY = 'WAS Suite/Text'

    def append_to_dictionary(self, dictionary, key, value):
        if key is not None and key != '':
            dictionary[key] = value
        return dictionary

    def dictionary_new(self, key_1, value_1, key_2, value_2, key_3, value_3, key_4, value_4, key_5, value_5):
        dictionary = {}
        dictionary = self.append_to_dictionary(dictionary, key_1, value_1)
        dictionary = self.append_to_dictionary(dictionary, key_2, value_2)
        dictionary = self.append_to_dictionary(dictionary, key_3, value_3)
        dictionary = self.append_to_dictionary(dictionary, key_4, value_4)
        dictionary = self.append_to_dictionary(dictionary, key_5, value_5)
        return (dictionary,)
```
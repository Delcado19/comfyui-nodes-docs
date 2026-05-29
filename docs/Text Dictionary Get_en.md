# Documentation
- Class name: WAS_Dictionary_Get
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Dictionary_Get node is designed to retrieve a specific entry from a dictionary based on a given key. It plays a crucial role in data extraction and manipulation processes, providing a streamlined way to access and use dictionary values in workflows.

# Input types
## Required
- dictionary
    - The dictionary parameter is essential for the node's operation as it is the source from which the key value is retrieved. It is a key component that directly influences the node's output.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]
- key
    - The key parameter is used to specify the specific entry in the dictionary that the node will access. Its presence is crucial for the node to function correctly and can determine the exact data required.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- default_value
    - The default_value parameter is provided as a fallback option in case the specified key does not exist in the dictionary. It ensures the node can handle this gracefully and continue the workflow without interruption.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- value
    - The value output parameter represents the data retrieved from the dictionary using the specified key. It is important because it is the direct result of the node's operation and can be used for further processing in the workflow.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Dictionary_Get:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'dictionary': ('DICT',), 'key': ('STRING', {'default': '', 'multiline': False})}, 'optional': {'default_value': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'dictionary_get'
    CATEGORY = 'WAS Suite/Text'

    def dictionary_get(self, dictionary, key, default_value=''):
        return (str(dictionary.get(key, default_value)),)
```
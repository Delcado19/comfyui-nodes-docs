# Documentation
- Class name: WAS_Dictionary_Convert
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `dictionary_convert` method aims to convert the string representation of a dictionary into a usable dictionary object. It plays a key role in the preprocessing stage of text-based applications, ensuring that input data is correctly formatted for subsequent processing.

# Input types
## Required
- dictionary_text
    - The parameter `dictionary_text` is required because it provides the raw text that needs to be converted into a dictionary. Its correct formatting is crucial for the successful execution of the node function.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- converted_dictionary
    - The output `converted_dictionary` is very important because it represents the structured dictionary object generated during the conversion process. It is ready for use in subsequent operations within the application.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Dictionary_Convert:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'dictionary_text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = ('DICT',)
    FUNCTION = 'dictionary_convert'
    CATEGORY = 'WAS Suite/Text'

    def dictionary_convert(self, dictionary_text):
        return (ast.literal_eval(dictionary_text),)
```
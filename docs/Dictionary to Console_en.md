# Documentation
- Class name: WAS_Dictionary_To_Console
- Category: WAS Suite/Debug
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Dictionary_To_Console node facilitates debugging by outputting dictionary contents to the console. It enhances data visibility through formatted printing, making it easier to inspect and analyze the structure and values of dictionaries.

# Input types
## Required
- dictionary
    - The dictionary parameter is essential for the node's operation, as it is the data structure that will be printed to the console. It is required and plays a central role in the node's functionality, determining the information displayed for debugging purposes.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]
## Optional
- label
    - The label parameter provides a descriptive title for the output, enhancing the readability of the console output. While not required, it adds clarity when debugging multiple dictionary outputs simultaneously.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- dictionary
    - The node's output is the original dictionary passed in. This allows further processing or debugging if needed, ensuring the data remains available for subsequent operations in the workflow.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Dictionary_To_Console:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'dictionary': ('DICT',), 'label': ('STRING', {'default': f'Dictionary Output', 'multiline': False})}}
    RETURN_TYPES = ('DICT',)
    OUTPUT_NODE = True
    FUNCTION = 'text_to_console'
    CATEGORY = 'WAS Suite/Debug'

    def text_to_console(self, dictionary, label):
        if label.strip() != '':
            print(f'\x1b[34mWAS Node Suite \x1b[33m{label}\x1b[0m:\n')
            from pprint import pprint
            pprint(dictionary, indent=4)
            print('')
        else:
            cstr(f'\x1b[33mText to Console\x1b[0m:\n')
            pprint(dictionary, indent=4)
            print('')
        return (dictionary,)
```
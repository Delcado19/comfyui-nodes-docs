# Documentation
- Class name: promptReplace
- Category: EasyUse/Prompt
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates the text transformation process by identifying and replacing specified substrings within the given text. Its primary purpose is to simplify the editing process, enabling users to perform targeted modifications efficiently.

# Input types
## Required
- prompt
    - The ‘prompt’ parameter forms the basis of the node’s operation, representing the text to be processed for replacement. It is crucial because it determines the content and context where replacements occur.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- find1
    - The ‘find1’ parameter specifies the first substring to identify and replace in the text. Its importance lies in targeting the edit, helping the node perform precise modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- replace1
    - The ‘replace1’ parameter defines the text that will replace the identified ‘find1’ substring. It is indispensable in the transformation process because it determines the replacement outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- find2
    - The ‘find2’ parameter is used to identify and replace a second group of substrings in the text. It expands the node’s editing capability, allowing multiple target replacements.
    - Comfy dtype: STRING
    - Python dtype: str
- replace2
    - The ‘replace2’ parameter corresponds to the text that replaces the ‘find2’ substring, further advancing the overall text transformation process.
    - Comfy dtype: STRING
    - Python dtype: str
- find3
    - The ‘find3’ parameter identifies and replaces a third group of substrings, enhancing the node’s versatility and adaptability in text editing.
    - Comfy dtype: STRING
    - Python dtype: str
- replace3
    - The ‘replace3’ parameter performs the final replacement, ensuring the node can address various editing needs in a single operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The output ‘prompt’ is the modified text after applying all specified replacements. It represents the final result of the node’s function, providing users with an updated version of the original text.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class promptReplace:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'prompt': ('STRING', {'multiline': True, 'default': '', 'forceInput': True})}, 'optional': {'find1': ('STRING', {'multiline': False, 'default': ''}), 'replace1': ('STRING', {'multiline': False, 'default': ''}), 'find2': ('STRING', {'multiline': False, 'default': ''}), 'replace2': ('STRING', {'multiline': False, 'default': ''}), 'find3': ('STRING', {'multiline': False, 'default': ''}), 'replace3': ('STRING', {'multiline': False, 'default': ''})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('prompt',)
    FUNCTION = 'replace_text'
    CATEGORY = 'EasyUse/Prompt'

    def replace_text(self, text, find1='', replace1='', find2='', replace2='', find3='', replace3=''):
        text = text.replace(find1, replace1)
        text = text.replace(find2, replace2)
        text = text.replace(find3, replace3)
        return (text,)
```
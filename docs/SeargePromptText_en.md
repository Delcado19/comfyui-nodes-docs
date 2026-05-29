# Documentation
- Class name: SeargePromptText
- Category: Searge/_deprecated_/Prompting
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargePromptText node is designed to manage and process text prompts. It is used in a system that requires text input to generate or modify content. The node's primary function is to retrieve and provide prompts, which can serve as a foundation for further processing or be used as input to other nodes in the system.

# Input types
## Required
- prompt
    - For the SeargePromptText node, the 'prompt' parameter is the key element for processing, defining the text input that the node will handle. It is expected to be a string, potentially containing multiple lines of text, enabling the input of complex and detailed instructions or information.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The output 'prompt' is the processed or raw text input to the SeargePromptText node. It serves as a foundational data fragment that can influence subsequent operations or be used as a direct response to a query.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SeargePromptText:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt': ('STRING', {'default': '', 'multiline': True})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('prompt',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Prompting'

    def get_value(self, prompt):
        return (prompt,)
```
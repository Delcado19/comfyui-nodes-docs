# Documentation
- Class name: SeargeCustomPromptMode
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to facilitate customization of prompt patterns in the user interface, specifically for data stream processing. It allows dynamic adjustment of data presentation and interaction methods, enhancing user experience by enabling customized input processing.

# Input types
## Optional
- data
    - The 'data' parameter serves as the channel for the data stream to be operated on by the node. It is critical in determining the information content and structure that the node processes and customizes.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Union[Dict[str, Any], None]

# Output types
- data
    - The output 'data' parameter represents the modified data stream after node processing. It encapsulates the customized prompt patterns and any changes made to the original data structure.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeCustomPromptMode:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'get'
    CATEGORY = UI.CATEGORY_UI_INPUTS

    @staticmethod
    def create_dict(example):
        return {UI.EXAMPLE: example}

    def get(self, data=None):
        if data is None:
            data = {}
        data[UI.S_CUSTOM_PROMPTING] = self.create_dict('example')
        return (data,)
```
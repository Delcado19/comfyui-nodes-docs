# Documentation
- Class name: SeargeConditionMixing
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates the integration of search conditions into the data flow, enhancing the specificity of data processing and retrieval operations.

# Input types
## Optional
- data
    - The data parameter serves as the primary input for the node, allowing information to be transmitted and manipulated within the system.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Union[Dict[str, Any], None]

# Output types
- data
    - The output data is a modified version of the input, now containing search conditions for use in subsequent processes.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeConditionMixing:

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
        data[UI.S_CONDITION_MIXING] = self.create_dict('example')
        return (data,)
```
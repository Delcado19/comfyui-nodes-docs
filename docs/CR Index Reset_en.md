# Documentation
- Class name: CR_IndexReset
- Category: Comfyroll/Utils/Index
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_IndexReset node is designed to reset a given index to a specified value, ensuring the continuity and correctness of index operations within the system. It plays a key role in maintaining the integrity of data sequences by providing a direct mechanism to reinitialize the index counter.

# Input types
## Required
- index
    - The ‘index’ parameter is essential for identifying the specific position or sequence number that needs to be reset within a dataset or operation. It directly affects the node's execution by determining which index will be reassigned to the ‘reset_to’ value.
    - Comfy dtype: INT
    - Python dtype: int
- reset_to
    - The ‘reset_to’ parameter defines the new starting point for the index after the reset operation. It is crucial for setting the correct initial value to which ‘index’ will be assigned after the reset, thereby affecting the subsequent behavior of the system.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- index
    - The ‘index’ output reflects the updated index value after the reset operation, indicating the new position or sequence number in the dataset or operation.
    - Comfy dtype: INT
    - Python dtype: int
- reset_to
    - The ‘reset_to’ output is the value to which the index was reset, indicating the new initial point of the index within the system.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The ‘show_help’ output provides a URL link to the documentation for further help or information regarding the node's operation. This is particularly useful for users seeking additional guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_IndexReset:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'index': ('INT', {'default': 1, 'min': 0, 'max': 10000, 'forceInput': True}), 'reset_to': ('INT', {'default': 1, 'min': 0, 'max': 10000})}}
    RETURN_TYPES = ('INT', 'INT', 'STRING')
    RETURN_NAMES = ('index', 'reset_to', 'show_help')
    FUNCTION = 'reset'
    CATEGORY = icons.get('Comfyroll/Utils/Index')

    def reset(self, index, reset_to):
        index = reset_to
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Index-Nodes#cr-index-reset'
        return (index, reset_to, show_help)
```
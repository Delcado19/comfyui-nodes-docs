# Documentation
- Class name: INTConstant
- Category: KJNodes/constants
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The INTConstant node is designed to provide a constant integer value within the network. It is used whenever an operation requires a fixed integer, such as an index, threshold, or any scenario requiring a constant value. This node ensures the value remains unchanged during execution, providing a stable and predictable integer reference.

# Input types
## Required
- value
    - The 'value' parameter is the core of the INTConstant node, representing the constant integer that will be output. It plays a critical role in node operation by defining the fixed integer value to be provided to the network. Its importance lies in its ability to provide a consistent and unchanging integer reference for various computational tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- value
    - The 'value' output from the INTConstant node is the constant integer set as input. It serves as a reliable source of a fixed integer for downstream operations in the network, ensuring the value remains constant and unaffected by external influences.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class INTConstant:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('value',)
    FUNCTION = 'get_value'
    CATEGORY = 'KJNodes/constants'

    def get_value(self, value):
        return (value,)
```
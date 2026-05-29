# Documentation
- Class name: SeargeIntegerConstant
- Category: Searge/_deprecated_/Integers
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeIntegerConstant node provides a constant integer value in the workflow. It is designed to deliver a stable and unchanging integer that can be used in various calculations or comparisons without requiring external input or data processing.

# Input types
## Required
- value
    - The 'value' parameter is the core of the SeargeIntegerConstant node, representing the fixed integer that the node will always return. It serves as a fundamental component in the workflow, ensuring downstream operations have access to a consistent and predefined integer value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- value
    - The output 'value' is the sole result provided by the SeargeIntegerConstant node, which is the constant integer set as input. Its importance lies in ensuring the integer remains unchanged throughout the workflow, thereby facilitating predictable and stable operations.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeIntegerConstant:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('value',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Integers'

    def get_value(self, value):
        return (value,)
```
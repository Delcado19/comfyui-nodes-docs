# Documentation
- Class name: INTtoSTRING
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The INTtoSTRING node converts integer values to their string representations. It offers formatting options, allowing optional commas to suit different use cases, providing a versatile method for displaying numeric data.

# Input types
## Required
- int_
    - The parameter 'int_' is the integer to be converted to a string. It plays a key role in the node's operation, as it is the main input for the conversion process.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- use_commas
    - The parameter 'use_commas' determines whether the output string should include commas as thousand separators. It affects the readability of numeric data in string format.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str

# Output types
- STRING
    - The output of the INTtoSTRING node is the string representation of the input integer. It is important because it directly reflects the conversion result of the node's primary function.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class INTtoSTRING:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'int_': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'use_commas': (['true', 'false'], {'default': 'false'})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'convert'
    CATEGORY = 'Mikey/Utils'

    def convert(self, int_, use_commas):
        if use_commas == 'true':
            return (f'{int_:,}',)
        else:
            return (f'{int_}',)
```
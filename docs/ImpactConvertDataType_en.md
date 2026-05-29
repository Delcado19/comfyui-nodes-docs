# Documentation
- Class name: ImpactConvertDataType
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImpactConvertDataType node is designed to convert input data into various data types. It intelligently determines whether the input can be interpreted as a number and converts it into string, float, integer, and boolean representations. This node plays a critical role in data preprocessing, suitable for applications that require consistent data types across different inputs.

# Input types
## Required
- value
    - The 'value' parameter is the core input of the ImpactConvertDataType node. It can be of any data type and is essential to the node's operation, as it determines the source material for the conversion process. The node's functionality relies heavily on this input to accurately perform its type conversions.
    - Comfy dtype: any
    - Python dtype: Any

# Output types
- converted_value
    - The 'converted_value' output from the ImpactConvertDataType node provides a tuple containing the original string value and its converted forms (float, integer, and boolean). This comprehensive output meets various downstream processing needs, ensuring data is appropriately formatted for further analysis or manipulation.
    - Comfy dtype: COMBO[string, float, int, boolean]
    - Python dtype: Tuple[str, float, int, bool]

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactConvertDataType:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'value': (any_typ,)}}
    RETURN_TYPES = ('STRING', 'FLOAT', 'INT', 'BOOLEAN')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'

    @staticmethod
    def is_number(string):
        pattern = re.compile('^[-+]?[0-9]*\\.?[0-9]+$')
        return bool(pattern.match(string))

    def doit(self, value):
        if self.is_number(str(value)):
            num = value
        elif str.lower(str(value)) != 'false':
            num = 1
        else:
            num = 0
        return (str(value), float(num), int(float(num)), bool(float(num)))
```
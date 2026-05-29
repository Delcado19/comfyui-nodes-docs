# Documentation
- Class name: ImpactValueReceiver
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactValueReceiver node is designed to process and transform input values based on the specified type. It plays a critical role in ensuring correct data format for the input system, facilitating seamless integration and operation within the ImpactPack framework.

# Input types
## Required
- typ
    - The 'typ' parameter indicates which type of conversion the 'doit' method will perform on the input 'value'. It is essential to the node's execution as it determines how the input data is processed and transformed.
    - Comfy dtype: STRING
    - Python dtype: str
- value
    - The 'value' parameter represents the data to be transformed by the 'doit' method. Correct input is crucial for the node to produce expected output, as it directly affects the node's operation and resulting output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- link_id
    - The 'link_id' parameter serves as an optional identifier for connections in the system. It can be used to track or reference specific data points and aids in overall organization and management of node execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- converted_value
    - The output parameter 'converted_value' represents the result of the 'doit' method's transformation process. It is important as it reflects the node's ability to accurately transform input data according to the specified type, ensuring output integrity and usability.
    - Comfy dtype: COMBO[STRING, INT, FLOAT, BOOLEAN]
    - Python dtype: Union[str, int, float, bool]

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactValueReceiver:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'typ': (['STRING', 'INT', 'FLOAT', 'BOOLEAN'],), 'value': ('STRING', {'default': ''}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'
    RETURN_TYPES = (any_typ,)

    def doit(self, typ, value, link_id=0):
        if typ == 'INT':
            return (int(value),)
        elif typ == 'FLOAT':
            return (float(value),)
        elif typ == 'BOOLEAN':
            return (value.lower() == 'true',)
        else:
            return (value,)
```
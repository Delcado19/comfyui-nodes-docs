
# Documentation
- Class name: DF_Absolute_value
- Category: Derfuu_Nodes/Functions/Converters
- Output node: False

The DF_Absolute_value node provides the function of calculating the absolute value of a given input. It can optionally return the negative absolute value based on specified conditions, enabling flexible numeric transformation in data processing pipelines.

# Input types
## Required
- Value
    - The node's primary input, representing the number whose absolute (or negative absolute) value is to be calculated. It plays a crucial role in determining the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- negative_out
    - A boolean flag that determines whether the output should be the negative absolute value of the input. This parameter allows conditional output, enhancing the node's versatility in numeric operations.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

# Output types
- float
    - The node's output, which may be the input's absolute value or its negative absolute value depending on the 'negative_out' setting.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ABSNode:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {
            "required": {
                "Value": Field.float(),
                "negative_out": ([False, True],)
            }
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "abs_val"
    CATEGORY = TREE_CONVERTERS

    def abs_val(self, Value, Get_negative):
        if Get_negative:
            return (-abs(Value),)
        return (abs(Value),)

```

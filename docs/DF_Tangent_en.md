
# Documentation
- Class name: DF_Tangent
- Category: Derfuu_Nodes/Math/Trigonometry
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DF_Tangent node computes the tangent or arctangent of a given value. It provides an option to specify the angular measurement unit (degrees or radians). This functionality enables transformation and analysis of angular data in mathematical and trigonometric calculations.

# Input types
## Required
- value
    - The numerical value for which the tangent or arctangent needs to be computed. This input is essential for determining a specific angle or its tangent value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- type_
    - Specifies the angular measurement unit of the input value, which can be radians (RAD) or degrees (DEG), affecting how the value is interpreted and processed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- arcTan
    - A boolean flag that determines whether to compute the arctangent (True) or tangent (False) of the input value, providing flexibility for trigonometric calculations.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

# Output types
- float
    - The computed result of the input value, i.e., the tangent or arctangent value, provided as a floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class tgNode:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {
            "required": {
                "value": Field.float(),
                "type_": Field.combo(["RAD", "DEG"],),
                "arcTan": Field.combo([False, True],)
            }
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "get_value"
    CATEGORY = TREE_TRIGONOMETRY

    def get_value(self, value, type_="RAD", arcTan=False):
        if type_ == "DEG":
            value = math.radians(value)
        if arcTan == True:
            value = math.atan(value)
        else:
            value = math.tan(value)
        return (value,)

```

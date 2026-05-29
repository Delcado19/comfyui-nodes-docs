
# Documentation
- Class name: DF_Sinus
- Category: Derfuu_Nodes/Math/Trigonometry
- Output node: False

The DF_Sinus node calculates the sine of a given angle. It supports input in radians or degrees and provides an option to compute the inverse sine, offering flexibility for trigonometric calculations.

# Input types
## Required
- value
    - The angle for which to calculate the sine. Depending on the 'type_' parameter setting, this can be in radians or degrees.
    - Comfy dtype: FLOAT
    - Python dtype: float
- type_
    - Specifies the unit of the input angle: 'RAD' for radians, 'DEG' for degrees. This affects how the input value is interpreted before calculation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- arcSin
    - A boolean flag that, when set to true, changes the operation from sine to inverse sine, enabling inverse trigonometric calculations.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

# Output types
- float
    - The result of the sine or inverse sine calculation, depending on the input parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SinNode:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {
            "required": {
                "value": Field.float(),
                "type_": Field.combo(["RAD", "DEG"]),
                "arcSin": Field.combo([False, True])
            }
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "get_value"
    CATEGORY = TREE_TRIGONOMETRY

    def get_value(self, value, type_="RAD", arcSin=False):
        if type_ == "DEG":
            value = math.radians(value)
        if arcSin == True:
            value = math.asin(value)
        else:
            value = math.sin(value)
        return (value,)

```


# Documentation
- Class name: DF_Cosines
- Category: Derfuu_Nodes/Math/Trigonometry
- Output node: False

The Cosines node is used to calculate the cosine of a given angle, and optionally the inverse cosine. It supports both degrees and radians as angle units, providing convenience for flexible trigonometric calculations.

# Input types
## Required
- value
    - The angle value for which to calculate cosine (or inverse cosine). This value determines the specific angle involved in the trigonometric operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- type_
    - Specifies the unit for the input angle: radians ('RAD') or degrees ('DEG'). This affects how the angle is interpreted in trigonometric calculations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- arcCos
    - Boolean flag that, when set to True, changes the operation from computing cosine to computing inverse cosine of the given angle.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

# Output types
- float
    - The computed result: cosine (or inverse cosine) of the given angle.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CosNode:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {
            "required": {
                "value": Field.float(),
                "type_": Field.combo(["RAD", "DEG"],),
                "arcCos": Field.combo([False, True],)
            }
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "get_value"
    CATEGORY = TREE_TRIGONOMETRY

    def get_value(self, value, type_="RAD", arcCos=False):
        if type_ == "DEG":
            value = math.radians(value)
        if arcCos == True:
            value = math.acos(value)
        else:
            value = math.cos(value)
        return (value,)

```

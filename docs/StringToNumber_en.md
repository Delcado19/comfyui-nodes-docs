
# Documentation
- Class name: StringToNumber
- Category: Art Venture/Utils
- Output node: False

The StringToNumber node converts a numeric string representation to its numeric form and offers options to round the result to the nearest integer, round down, or round up. This capability is essential when text‑based numbers must be turned into precise values for calculations or comparisons.

# Input types
## Required
- string
- The *string* parameter accepts a string representing a number and converts it to a numeric form. This conversion is crucial for subsequent numeric operations or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- rounding
- The *rounding* parameter specifies the rounding method applied to the converted number (nearest, down, or up), affecting the final numeric output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- int
- The integer part of the converted number after applying the specified rounding method.
    - Comfy dtype: INT
    - Python dtype: int
- float
- The floating‑point representation of the converted number, providing precise value.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilStringToNumber:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "string": ("STRING", {"default": "0"}),
                "rounding": (["round", "floor", "ceil"], {"default": "round"}),
            },
        }

    RETURN_TYPES = ("INT", "FLOAT")
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "string_to_numbers"

    def string_to_numbers(self, string: str, rounding):
        f = float(string)

        if rounding == "floor":
            return (int(np.floor(f)), f)
        elif rounding == "ceil":
            return (int(np.ceil(f)), f)
        else:
            return (int(round(f)), f)

```

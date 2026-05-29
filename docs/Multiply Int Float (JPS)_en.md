
# Documentation
- Class name: Multiply Int Float (JPS)
- Category: JPS Nodes/Math
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Math_Multiply_INT_FLOAT node is specifically designed to perform multiplication operations between integers and floating-point numbers, generating both integer and floating-point results. This node facilitates mathematical operations in workflows, allowing the combination of different numeric types for precise calculations.

# Input types
## Required
- int_a
    - Represents the integer value to be multiplied. It plays a key role in the multiplication operation, determining the scale of the multiplication.
    - Comfy dtype: INT
    - Python dtype: int
- float_b
    - Represents the floating-point number to be multiplied with the integer. It allows fractional scaling during the multiplication process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int_multiply
    - The integer result of multiplying the input integer and floating-point number.
    - Comfy dtype: INT
    - Python dtype: int
- float_multiply
    - The floating-point result of the multiplication operation, providing the precise calculation result.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Math_Multiply_INT_FLOAT:

    def init(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "int_a": ("INT", {"default": 1,}),
                "float_b": ("FLOAT", {"default": 1,}),
            }
        }

    RETURN_TYPES = ("INT","FLOAT")
    RETURN_NAMES = ("int_multiply","float_multiply")
    FUNCTION = "get_multiply_int_float"

    CATEGORY="JPS Nodes/Math"

    def get_multiply_int_float(self,int_a,float_b):
        int_multiply = int(int_a) * float(float_b)
        float_multiply = int(int_a) * float(float_b)

        return(int(int_multiply),float(float_multiply))

```

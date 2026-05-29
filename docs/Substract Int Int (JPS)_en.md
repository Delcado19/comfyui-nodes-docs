
# Documentation
- Class name: Substract Int Int (JPS)
- Category: JPS Nodes/Math
- Output node: False
- Repo Ref: Unknown

The Subtract Int Int (JPS) node performs subtraction between two integer inputs and provides both integer and floating-point representations of the result. This node is designed to facilitate mathematical operations within the JPS Nodes/Math category, offering a straightforward method to calculate the difference between two numbers.

# Input types
## Required
- int_a
    - The first integer input for the subtraction operation. It serves as the minuend in the subtraction.
    - Comfy dtype: INT
    - Python dtype: int
- int_b
    - The second integer input for the subtraction operation. It acts as the subtrahend, subtracted from the first input.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int_substract
    - The result of the subtraction operation, represented as an integer.
    - Comfy dtype: INT
    - Python dtype: int
- float_substract
    - The result of the subtraction operation, represented as a floating-point number, providing flexibility in precision.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Math_Substract_INT_INT:

    def init(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "int_a": ("INT", {"default": 1,}),
                "int_b": ("INT", {"default": 1,}),
            }
        }

    RETURN_TYPES = ("INT","FLOAT")
    RETURN_NAMES = ("int_substract","float_substract")
    FUNCTION = "get_substract_int_int"

    CATEGORY="JPS Nodes/Math"

    def get_substract_int_int(self,int_a,int_b):
        int_substract = int(int_a) - int(int_b)
        float_substract = int(int_a) - int(int_b)

        return(int(int_substract),float(float_substract))

```

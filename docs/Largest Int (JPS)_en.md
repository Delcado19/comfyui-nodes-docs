
# Documentation
- Class name: `Largest Int (JPS)`
- Category: `JPS Nodes/Math`
- Output node: `False`

This node determines the maximum and minimum integers between two given values and indicates whether the first integer is greater than the second. It abstracts comparison logic into a simple interface for ease of use.

# Input types
## Required
- **`int_a`**
    - Represents the first integer to compare. Its value influences the determination of the larger and smaller integers, as well as the flag indicating whether it is greater than the second integer.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`int_b`**
    - Represents the second integer to compare. It is used alongside the first integer to determine the larger and smaller values, as well as set the flag indicating whether the first integer is larger.
    - Comfy dtype: `INT`
    - Python dtype: `int`

# Output types
- **`larger_int`**
    - The larger of the two input integers.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`smaller_int`**
    - The smaller of the two input integers.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`is_a_larger`**
    - A flag indicating whether the first input integer is greater than the second.
    - Comfy dtype: `INT`
    - Python dtype: `int`


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Math_Largest_Integer:

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

    RETURN_TYPES = ("INT","INT","INT")
    RETURN_NAMES = ("larger_int","smaller_int","is_a_larger")
    FUNCTION = "get_lrg"

    CATEGORY="JPS Nodes/Math"

    def get_lrg(self,int_a,int_b):
        larger_int = int(int_b)
        smaller_int = int(int_a)
        is_a_larger = int(0)
        if int_a > int_b:
            larger_int = int(int_a)
            smaller_int = int(int_b)
            is_a_larger = int(1)

        return(int(larger_int),int(smaller_int),int(is_a_larger))

```

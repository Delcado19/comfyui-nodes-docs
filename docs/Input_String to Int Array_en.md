
# Documentation
- Class name: Input_String to Int Array
- Category: Bmad/api/parseInput
- Output node: False

This node aims to convert a string representation of comma-separated integers into an integer array. It has the versatility to handle different types of input sources.

# Input types
## Required
- inStr
    - Input string containing comma-separated integers, or an integer array. This parameter allows flexible input handling.
    - Comfy dtype: STRING
    - Python dtype: Union[str, List[int]]

# Output types
- int_array
    - The output is an integer array, obtained by parsing the input string or directly using the input array.
    - Comfy dtype: INT_ARRAY
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InputString2IntArray:
    """
    Under the supposition this will be used with RequestInputs, the integers may already come as an array.
    The input is, therefore, polymorphic and both array and string types are accepted as inputs to both allow a valid
    request json and a mock array given via the web UI.

    When using a string: the integers should be separated with commas
    """

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"inStr": ("STRING", {"default": ""})}, }

    RETURN_TYPES = ("INT_ARRAY",)
    FUNCTION = "convert"
    CATEGORY = "Bmad/api/parseInput"

    def convert(self, inStr):
        # not really a str, suppose is a list read from the input json
        if isinstance(inStr, list):
            return (inStr, )

        # otherwise suppose it is a valid string
        return ([int(x) for x in inStr.split(',')],)

```

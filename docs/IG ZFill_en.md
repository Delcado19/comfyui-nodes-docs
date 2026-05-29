
# Documentation
- Class name: `IG ZFill`
- Category: `🐓 IG Nodes/Primitives`
- Output node: `False`

The IG ZFill node provides a simple and effective method to add leading zeros before a given integer value until it reaches a specified length. This functionality is important for formatting numbers to ensure a consistent number of digits, especially for data display and string manipulation tasks.

# Input types
## Required
- value
    - Specifies the integer value to be padded with leading zeros. This parameter determines the base number that will be converted.
    - Comfy dtype: INT
    - Python dtype: int
- fill
    - Determines the total length of the output string after padding. This parameter sets the target length for the zero-padded string.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - The resulting string after the input value has been padded with leading zeros to the specified length.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IG_ZFill:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("INT", {"default": 0, "min": -sys.maxsize, "max": sys.maxsize, "step": 1}),
                "fill": ("INT", {"default": 6, "min": 0, "max": 8, "step": 1}),
            },
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "main"
    CATEGORY = TREE_PRIMITIVES

    def main(self, value, fill):
        return (f"{value}".zfill(fill),)

```

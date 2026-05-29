
# Documentation
- Class name: Color (hexadecimal)
- Category: Bmad/image
- Output node: False

This node is used to convert hexadecimal color codes to specific color formats. It validates the input hexadecimal code and returns the corresponding color, ensuring that the input is in a valid hexadecimal format before conversion.

# Input types
## Required
- hex
    - Hexadecimal code representing the color. This parameter is essential for determining the specific color to convert. The node validates the code, ensuring it is in the correct hexadecimal format before processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- color
    - Color obtained from the input hexadecimal code. This output is the result of converting the validated hexadecimal code directly to the corresponding color format.
    - Comfy dtype: COLOR
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ColorRGBFromHex:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"hex": ("STRING", {"default": "#000000"})}}

    RETURN_TYPES = ("COLOR",)
    FUNCTION = "ret"
    CATEGORY = "Bmad/image"

    def ret(self, hex):
        import re
        hex_color_pattern = r'^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$'
        if re.match(hex_color_pattern, hex) is None:
            print_yellow(f"ColorRGBFromHex node > The following is not a valid hex code:{hex}")
        return (hex,)

```

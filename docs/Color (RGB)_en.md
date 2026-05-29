
# Documentation
- Class name: Color (RGB)
- Category: Bmad/image
- Output node: False

The Color (RGB) node is designed to create a color representation through individual Red, Green, and Blue (RGB) components. It allows users to specify each color component to form a composite color, which can be used for various image processing and color manipulation tasks.

# Input types
## Required
- r
    - The red component of the color, an integer value used to define the intensity of red in the final color.
    - Comfy dtype: INT
    - Python dtype: int
- g
    - The green component of the color, an integer value used to define the intensity of green in the final color.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The blue component of the color, an integer value used to define the intensity of blue in the final color.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- color
    - A composite color composed of the specified red, green, and blue components. This output is critical for subsequent image processing or color manipulation tasks, providing a standardized color format.
    - Comfy dtype: COLOR
    - Python dtype: Tuple[int, int, int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ColorRGB:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"r": color255_INPUT, "g": color255_INPUT, "b": color255_INPUT}}

    RETURN_TYPES = ("COLOR",)
    FUNCTION = "ret"
    CATEGORY = "Bmad/image"

    def ret(self, r, g, b):
        return ([r, g, b],)

```

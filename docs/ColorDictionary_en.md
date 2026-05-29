
# Documentation
- Class name: ColorDictionary
- Category: Bmad/CV/Color A.
- Output node: False

The ColorDictionary node provides a set of predefined color names and their corresponding RGB values. It allows selecting a specific number of colors from this set based on an input parameter to create a custom color dictionary.

# Input types
## Required
- number_of_colors
    - Specifies the number of colors to select from the predefined set. This determines the size of the generated color dictionary.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- color_dict
    - A dictionary mapping color names to their RGB values, limited to the specified number of colors.
    - Comfy dtype: COLOR_DICT
    - Python dtype: Dict[str, Tuple[int, int, int]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ColorDefaultDictionary:
    default_color_dict = {
        "red": (255, 0, 0),
        "green": (0, 255, 0),
        "blue": (0, 0, 255),
        "white": (255, 255, 255),
        "black": (0, 0, 0),
        "yellow": (255, 255, 0),
        "cyan": (0, 255, 255),
        "magenta": (255, 0, 255),
        "purple": (128, 0, 128),
        "teal": (0, 128, 128),
        "orange": (255, 165, 0),
        "pink": (255, 192, 203),
        #    "brown": (165, 42, 42),
        #    "gray": (128, 128, 128),
    }

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"number_of_colors": ("INT", {"default": 8, "min": 2, "max": 12})}}

    RETURN_TYPES = ("COLOR_DICT",)
    FUNCTION = "ret"
    CATEGORY = "Bmad/CV/Color A."

    def ret(self, number_of_colors):
        dic = dict(list(self.default_color_dict.items())[0: number_of_colors])
        return (dic,)

```

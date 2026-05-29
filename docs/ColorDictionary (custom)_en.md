
# Documentation
- Class name: ColorDictionary (custom)
- Category: Bmad/CV/Color A.
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ColorDictionary node allows users to create a custom color dictionary by mapping user-defined color names to corresponding color values. The node ensures the number of color names matches the number of provided color values, adjusting list lengths as needed to keep them consistent.

# Input types
## Required
- color_names
    - This is a list of user-defined color names. These names will be used as keys in the generated color dictionary.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- colors
    - This is a list of color values corresponding to the provided color names. These values will be used as values in the generated color dictionary.
    - Comfy dtype: COLOR
    - Python dtype: List[Tuple[int, int, int]]

# Output types
- color_dict
    - The output color_dict is a custom color dictionary that maps the provided color names to their corresponding color values.
    - Comfy dtype: COLOR_DICT
    - Python dtype: Dict[str, Tuple[int, int, int]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ColorCustomDictionary:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "color_names": ("STRING", {"default": ""}),
            "colors": ("COLOR", {"default": ""})
        }
        }

    RETURN_TYPES = ("COLOR_DICT",)
    FUNCTION = "ret"
    CATEGORY = "Bmad/CV/Color A."
    INPUT_IS_LIST = True

    def ret(self, color_names, colors):
        if len(color_names) != len(colors):
            print_yellow("color_names size is different than colors size!")
            min_len = min(len(color_names), len(colors))
            color_names = color_names[0:min_len]
            colors = colors[0:min_len]

        return (dict(zip(color_names, colors)),)

```

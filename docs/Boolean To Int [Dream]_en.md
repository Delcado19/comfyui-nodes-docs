
# Documentation
- Class name: Boolean To Int [Dream]
- Category: ✨ Dream/🛠 utils/⭆ switches
- Output node: False

The "Boolean To Int" node converts a boolean input into an integer output, enabling conditional logic to be applied in numerical environments. It provides a direct method to convert true/false conditions into numerical representation for further processing or decision-making.

# Input types
## Required
- boolean
    - Determines the condition for conversion. If true, returns the 'on_true' value; otherwise, selects the 'on_false' value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- on_true
    - The integer value returned when the 'boolean' input is true. This allows customization of the numerical representation for true conditions.
    - Comfy dtype: INT
    - Python dtype: int
- on_false
    - The integer value returned when the 'boolean' input is false. This enables false conditions to be represented by specific numerical values.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The result of the boolean-to-integer conversion, reflecting the 'on_true' or 'on_false' value based on the boolean input.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamBoolToInt:
    NODE_NAME = "Boolean To Int"
    ICON = "⬖"
    CATEGORY = NodeCategories.UTILS_SWITCHES
    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("result",)
    FUNCTION = "pick"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "boolean": ("BOOLEAN", {"default": False}),
                "on_true": ("INT", {"default": 1}),
                "on_false": ("INT", {"default": 0})
            }
        }

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(values)

    def pick(self, boolean, on_true, on_false):
        if boolean:
            return (on_true,)
        else:
            return (on_false,)

```


# Documentation
- Class name: Boolean To Float [Dream]
- Category: ✨ Dream/🛠 utils/⭆ switches
- Output node: False

The Boolean To Float node converts a Boolean input to a Float output, allowing custom float values to be assigned to true and false Boolean states. This node facilitates conditional logic and value conversion in data streams, enabling dynamic adjustments based on Boolean conditions.

# Input types
## Required
- boolean
    - Determines which branch to execute: returns the 'on_true' value if true; otherwise selects the 'on_false' value. This Boolean input directly influences the node's output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- on_true
    - Specifies the float value returned when the Boolean input is true, allowing custom output for the true condition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- on_false
    - Defines the float value returned when the Boolean input is false, allowing customized response for the false condition.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The float value corresponding to the input Boolean condition, determined by the 'on_true' or 'on_false' parameter.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamBoolToFloat:
    NODE_NAME = "Boolean To Float"
    ICON = "⬖"
    CATEGORY = NodeCategories.UTILS_SWITCHES
    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("result",)
    FUNCTION = "pick"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "boolean": ("BOOLEAN", {"default": False}),
                "on_true": ("FLOAT", {"default": 1.0}),
                "on_false": ("FLOAT", {"default": 0.0})
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

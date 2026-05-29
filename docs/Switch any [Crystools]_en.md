
# Documentation
- Class name: Switch any [Crystools]
- Category: crystools 🪛/Switch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node provides a mechanism for switching between two values based on a boolean condition. It abstracts conditional logic, offering a concise and clear way to select between two possible outcomes.

# Input types
## Required
- on_true
    - The value returned when the boolean condition evaluates to true. It plays a key role in determining the node output based on the condition.
    - Comfy dtype: *
    - Python dtype: any
- on_false
    - The value returned when the boolean condition evaluates to false. This parameter ensures an alternative result is available, making the switching operation complete.
    - Comfy dtype: *
    - Python dtype: any
- boolean
    - The boolean condition that determines which value ('on_true' or 'on_false') is returned. It is the core of the switching functionality, enabling dynamic decision-making.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- *
    - The output depends on the evaluation result of the boolean condition, and can be either 'on_true' or 'on_false'.
    - Comfy dtype: *
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CSwitchBooleanAny:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "on_true": (any, {}),
                "on_false": (any, {}),
                "boolean": BOOLEAN,
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.SWITCH.value
    RETURN_TYPES = (any,)

    FUNCTION = "execute"

    def execute(self, on_true, on_false, boolean=True):
        logger.debug("Any switch: " + str(boolean))

        if boolean:
            return (on_true,)
        else:
            return (on_false,)

```

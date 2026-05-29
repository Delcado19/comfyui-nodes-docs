
# Documentation
- Class name: BooleanPrimitive
- Category: Art Venture/Utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The BooleanPrimitive node operates on boolean values, directly passing the input boolean or inverting it. As a fundamental utility node, it plays a key role in the system, supporting conditional logic flows and binary decision processes.

# Input types
## Required
- value
- Specify the boolean value to operate on. This parameter is the core of the node's operation and determines the base value that may be inverted according to the 'reverse' parameter.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- reverse
- Determine whether to invert the input boolean. When set to True, the output is the logical negation of the input, enabling dynamic control of boolean logic flows.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- boolean
- The boolean result after applying the 'reverse' logic to the input. This output reflects either the original value or its negation, depending on the 'reverse' parameter.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- string
- The string representation of the resulting boolean, providing a textual output corresponding to the boolean result.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilBooleanPrimitive:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "value": ("BOOLEAN", {"default": False}),
                "reverse": ("BOOLEAN", {"default": False}),
            }
        }

    RETURN_TYPES = ("BOOLEAN", "STRING")
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "boolean_primitive"

    def boolean_primitive(self, value: bool, reverse: bool):
        if reverse:
            value = not value

        return (value, str(value))

```

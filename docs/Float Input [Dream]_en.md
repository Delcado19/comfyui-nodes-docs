
# Documentation
- Class name: Float Input [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False

The Float Input node is designed to accept floating‑point numbers as input, providing users with a simple interface for entering decimal values. It is a fundamental UI element, especially suitable for configuration scenarios that require precise measurement or adjustment.

# Input types
## Required
- value
    - Represents the floating‑point number entered by the user. This is the primary value for the node's operation and serves as the basis for further processing or calculation in the node workflow.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- FLOAT
    - Comfy dtype: FLOAT
    - Outputs the same floating‑point number as the input, effectively acting as a transmission channel for that value.
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamInputFloat:
    NODE_NAME = "Float Input"
    ICON = "✍"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("FLOAT", {"default": 0.0}),
            },
        }

    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("FLOAT",)
    FUNCTION = "noop"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def noop(self, value):
        return (value,)

```


# Documentation
- Class name: Int Input [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Int Input node provides users with a straightforward integer input interface. It allows users to input integer values, which is crucial in scenarios requiring precise numerical input, such as setting parameters or configurations that depend on integer values. The node is designed to simplify the process of entering numerical data, ensuring that the system can receive and process the exact integer values specified by the user.

# Input types
## Required
- value
    - The value parameter represents the integer value to be input by the user. It is essential for defining the precise numerical input that the system will process. Users can directly specify the required integer through this parameter, providing basic data for subsequent operations or calculations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- INT
    - Outputs the integer value input by the user, making it available for subsequent operations or calculations in the system. This output facilitates other nodes or processes that require integer input, ensuring data consistency and accuracy.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamInputInt:
    NODE_NAME = "Int Input"
    ICON = "✍"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("INT", {"default": 0}),
            },
        }

    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("INT",)
    FUNCTION = "noop"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def noop(self, value):
        return (value,)

```

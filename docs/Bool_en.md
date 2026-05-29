
# Documentation
- Class name: Bool
- Category: Logic
- Output node: False

Bool nodes are designed to simply pass boolean values, allowing logical operations or conditions to be applied based on their input.

# Input types
## Required
- value
    - Represents the boolean input of the node, directly determining the output. It serves as a basic logical unit for further operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- BOOLEAN
    - Outputs the same boolean value as the input, aiding logical decision-making in the workflow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Bool:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {"value": ("BOOLEAN", {"default": False})},
        }

    RETURN_TYPES = ("BOOLEAN",)

    RETURN_NAMES = ("BOOLEAN",)

    FUNCTION = "execute"

    CATEGORY = "Logic"

    def execute(self, value):
        return (value,)

```

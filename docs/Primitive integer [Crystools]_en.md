
# Documentation
- Class name: Primitive integer [Crystools]
- Category: crystools 🪛/Primitive
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Primitive integer node is specifically used to handle integer values, providing a straightforward way to operate on integers within the Crystools framework. It encapsulates the functionality required to input, process, and return integer values, simplifying the handling of numerical data.

# Input types
## Required
- int
    - Represents the integer value to be processed by the node. This input is crucial for executing the node functionality, as it directly affects the output integer value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The output of this node is the integer value from the input, allowing seamless integration and subsequent processing within the Crystools framework.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CInteger:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "int": INT,
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.PRIMITIVE.value
    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("int",)

    FUNCTION = "execute"

    def execute(self, int=True):
        return (int,)

```

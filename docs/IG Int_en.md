
# Documentation
- Class name: IG Int
- Category: 🐓 IG Nodes/Primitives
- Output node: False

IG Int node is designed to encapsulate and handle integer values in a node-based programming environment. It allows specifying an integer value, providing a direct way to process integers in a visual programming environment.

# Input types
## Required
- value
    - Specify the integer value to be used or operated on by the node. This parameter is the core of the node's operation, serving as the main input that determines the node's output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - Output the integer value specified by the input parameter, effectively passing that value through the node.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IG_Int:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("INT", {"default": 0, "min": -sys.maxsize, "max": sys.maxsize, "step": 1}),
            },
        }

    RETURN_TYPES = ("INT",)
    FUNCTION = "main"
    CATEGORY = TREE_PRIMITIVES

    def main(self, value):
        return (value,)

```

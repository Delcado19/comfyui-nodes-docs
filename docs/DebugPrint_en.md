
# Documentation
- Class name: DebugPrint
- Category: Logic
- Output node: True

The DebugPrint node is designed for debugging purposes, allowing developers to print any input directly to the console. This helps track and inspect data flow through the node network, aiding in identifying and resolving issues.

# Input types
## Required
- ANY
    - Accepts any input, serving as a flexible data logging channel. This versatility ensures the node can be seamlessly integrated at various points in the node network without compatibility issues.
    - Comfy dtype: {}
    - Python dtype: Any

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DebugPrint:
    """
    This node prints the input to the console.
    """

    @classmethod
    def INPUT_TYPES(s):
        """
        Takes in any input.

        """
        return {"required": {"ANY": (AlwaysEqualProxy({}),)}}

    RETURN_TYPES = ()

    OUTPUT_NODE = True

    FUNCTION = "log_input"

    CATEGORY = "Logic"

    def log_input(self, ANY):
        print(ANY)
        return {}

```

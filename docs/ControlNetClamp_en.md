---
tags:
- DataClamp

# ControlNetClamp
## Documentation Overview
### Class name: `ControlNetClamp`
### Category: `clamp`
### Output Node: `False`

The `ControlNetClamp` node is designed to pass control network data as-is, acting as a "clamp" to ensure the integrity and original state of control network information in the data processing pipeline.
## Input Types
### Required
- **`control_net_clamp`**
    - Represents data to be passed through in an unmodified form, emphasizing the node's role in maintaining the original state of control network information.
    - Comfy data type: `CONTROL_NET`
    - Python data type: `tuple`

## Output Types
- **`control_net`**
    - Comfy data type: `CONTROL_NET`
    - Outputs unmodified control network data, maintaining the integrity of the original input.
    - Python data type: `tuple`

## Usage Tips
- Hardware type: `CPU`
- Common Nodes: Unknown

## Source Code
```python
class ControlNetClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "control_net_clamp": ("CONTROL_NET",),
            },
        }

    RETURN_TYPES = ("CONTROL_NET",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, control_net_clamp):
        return (control_net_clamp,)
```
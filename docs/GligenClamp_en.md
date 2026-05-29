---
tags:
- DataClamp

# GligenClamp
## Documentation Overview
### Class Name: `GligenClamp`
### Category: `clamp`
### Output Node: `False`

`GligenClamp` node passes GLIGEN data unchanged, serving as a placeholder or checkpoint in the data processing pipeline. It ensures GLIGEN data remains intact across processing stages, acting as a control mechanism.
## Input Types
### Required
- **`gligen`**
    - The `gligen` parameter specifies the GLIGEN data to be clamped. This node acts as a relay, guaranteeing the GLIGEN data stays unchanged throughout the process.
    - Comfy data type: `GLIGEN`
    - Python data type: `tuple`

## Output Types
- **`gligen`**
    - Comfy data type: `GLIGEN`
    - Returns the unmodified GLIGEN data, ensuring its integrity within the processing pipeline.
    - Python data type: `tuple`

## Usage Tips
- Hardware type: `CPU`
- Common Nodes: Unknown

## Source Code
```python
class GligenClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "gligen": ("GLIGEN",),
            },
        }

    RETURN_TYPES = ("GLIGEN",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, gligen):
        return (gligen,)
```
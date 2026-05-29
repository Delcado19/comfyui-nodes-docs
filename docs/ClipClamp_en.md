---
tags:
- DataClamp

# ClipClamp
## Documentation Overview
### Class Name: `ClipClamp`
### Category: `clamp`
### Output Node: `False`

The `ClipClamp` node is designed to process CLIP data without modification, serving as a placeholder or checkpoint in a data processing pipeline.
## Input Types
### Required
- **`clip`**
    - The `clip` parameter is the CLIP data processed by this node. It acts as a direct pass-through, ensuring the CLIP data remains unchanged within the node.
    - Comfy data type: `CLIP`
    - Python data type: `tuple`

## Output Types
- **`clip`**
    - Comfy data type: `CLIP`
    - Returns the unmodified CLIP data, maintaining its integrity for further processing or analysis.
    - Python data type: `tuple`

## Usage Tips
- Hardware type: `CPU`
- Common Nodes: Unknown

## Source Code
```python
class ClipClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "clip": ("CLIP",),
            },
        }

    RETURN_TYPES = ("CLIP",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, clip):
        return (clip,)
```
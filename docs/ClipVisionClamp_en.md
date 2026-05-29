---
tags:
- DataClamp

# ClipVisionClamp
## Documentation Overview
### Class name: `ClipVisionClamp`
### Category: `clamp`
### Output Node: `False`

The `ClipVisionClamp` node is designed to process and pass through CLIP_VISION data as-is, serving as a direct pass-through for CLIP_VISION data in the pipeline.
## Input Types
### Required
- **`clip_vision`**
    - This parameter represents the CLIP_VISION data to be processed by the node. It is essential to the node's operation, as it directly processes the input data without any modification, ensuring the integrity of CLIP_VISION data is maintained throughout the pipeline.
    - Comfy data type: `CLIP_VISION`
    - Python data type: `tuple`

## Output Types
- **`clip_vision`**
    - Comfy data type: `CLIP_VISION`
    - Outputs the received unmodified CLIP_VISION data, ensuring data integrity and consistency for further processing or use in subsequent nodes.
    - Python data type: `tuple`

## Usage Tips
- Hardware type: `CPU`
- Common Nodes: Unknown

## Source Code
```python
class ClipVisionClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "clip_vision": ("CLIP_VISION",),
            },
        }

    RETURN_TYPES = ("CLIP_VISION",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, clip_vision):
        return (clip_vision,)
```
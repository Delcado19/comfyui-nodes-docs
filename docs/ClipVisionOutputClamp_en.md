---
tags:
- DataClamp

# ClipVisionOutputClamp
## Documentation Overview
### Class Name: `ClipVisionOutputClamp`
### Category: `clamp`
### Output Node: `False`

The `ClipVisionOutputClamp` node is designed to pass CLIP vision output data as-is, serving as a utility to ensure data consistency and integrity when processing CLIP vision output pipelines.
## Input Types
### Required
- **`clip_vision_output`**
    - This parameter represents the CLIP vision output data to be processed by the node. Essential for moving data through the processing pipeline while maintaining data integrity and consistency.
    - Comfy data type: `CLIP_VISION_OUTPUT`
    - Python data type: `tuple`

## Output Types
- **`clip_vision_output`**
    - Comfy data type: `CLIP_VISION_OUTPUT`
    - This output is the unmodified CLIP vision output data, passed through from the input, ensuring data consistency and integrity in the pipeline.
    - Python data type: `tuple`

## Usage Tips
- Hardware type: `CPU`
- Common Nodes: Unknown

## Source Code
```python
class ClipVisionOutputClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "clip_vision_output": ("CLIP_VISION_OUTPUT",),
            },
        }

    RETURN_TYPES = ("CLIP_VISION_OUTPUT",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, clip_vision_output):
        return (clip_vision_output,)
```
---
tags:
- DataClamp

# ConditioningClamp
## Documentation Overview
### Class Name: `ConditioningClamp`
### Category: `clamp`
### Output Node: `False`

The `ConditioningClamp` node is designed to pass conditioning data through unchanged, serving as a placeholder or checkpoint in a data processing pipeline.
## Input Types
### Required
- **`conditioning`**
    - This parameter represents the conditioning data passed through the node unaltered, emphasizing its role in maintaining data flow integrity.
    - Comfy data type: `CONDITIONING`
    - Python data type: `List[Tuple[torch.Tensor, Dict[str, Any]]]`

## Output Types
- **`conditioning`**
    - Comfy data type: `CONDITIONING`
    - Outputs the unmodified conditioning data, emphasizing the node's function as a transparent conduit in the pipeline.
    - Python data type: `List[Tuple[torch.Tensor, Dict[str, Any]]]`

## Usage Tips
- Hardware type: `CPU`
- Common Nodes: Unknown

## Source Code
```python
class ConditioningClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "conditioning": ("CONDITIONING",),
            },
        }

    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, conditioning):
        return (conditioning,)
```
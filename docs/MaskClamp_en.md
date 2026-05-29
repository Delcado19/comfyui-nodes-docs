
# Documentation
- Class name: MaskClamp
- Category: clamp
- Output node: False

The MaskClamp node is designed to pass mask data without any modification, serving as a placeholder or checkpoint in a data processing pipeline.

# Input types
## Required
- mask
    - The mask input represents the mask data that will be passed through the node unchanged. It is critical for maintaining the integrity of mask information throughout the processing flow.
    - Comfy dtype: MASK
    - Python dtype: Tuple[str]

# Output types
- mask
    - Outputs the unchanged mask data, ensuring continuity of mask information in the workflow.
    - Comfy dtype: MASK
    - Python dtype: Tuple[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class MaskClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "mask": ("MASK",),
            },
        }

    RETURN_TYPES = ("MASK",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, mask):
        return (mask,)

```

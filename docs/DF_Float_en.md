
# Documentation
- Class name: DF_Float
- Category: Derfuu_Nodes/Variables
- Output node: False

The DF_Float node is designed to pass floating-point values directly without any modification, serving as a fundamental building block for numerical data operations in a node network.

# Input types
## Required
- Value
    - Accepts a floating-point value as input, which is passed through without any modification. This parameter is critical to the node's operation, as it determines the exact value that will be output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - Outputs the same floating-point value received as input, ensuring direct pass-through of numerical data.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [SVD_img2vid_Conditioning](../../Comfy/Nodes/SVD_img2vid_Conditioning.md)
    - ezMath
    - [KSampler Adv. (Efficient)](../../efficiency-nodes-comfyui/Nodes/KSampler Adv. (Efficient).md)
    - Reroute
    - workflow/IP Adapter full bundle



## Source code
```python
class FloatNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value": Field.float(),
            },
        }

    RETURN_TYPES = ("FLOAT",)
    CATEGORY = TREE_VARIABLE
    FUNCTION = "get_value"

    def get_value(self, Value):
        return (Value,)

```

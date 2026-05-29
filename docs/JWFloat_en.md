
# Documentation
- Class name: JWFloat
- Category: jamesWalker55
- Output node: False

This node is dedicated to floating-point operations, providing a platform for calculations or manipulations involving floating-point values. It focuses on enabling precise numerical computations and transformations within a given workflow.

# Input types
## Required
- value
    - Represents the floating-point value to be processed or manipulated by the node. It is essential for performing operations specific to floating-point numbers and directly influences the result of the node's functionality.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - Comfy dtype: FLOAT
    - The output is a floating-point value, resulting from the node's operation on the input floating-point number. This output is critical for further numerical computations or analysis within the workflow.
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
        @register_node(identifier, display_name)
        class _:
            CATEGORY = category
            INPUT_TYPES = lambda: {"required": required_inputs}
            RETURN_TYPES = tuple(return_types)
            OUTPUT_NODE = output_node
            FUNCTION = "execute"

            def execute(self, *args, **kwargs):
                return func(*args, **kwargs)

```

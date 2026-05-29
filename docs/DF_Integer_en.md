
# Documentation
- Class name: DF_Integer
- Category: Derfuu_Nodes/Variables
- Output node: False

The DF_Integer node is designed to convert floating-point numbers to integers by rounding down. It serves as a basic tool to support operations needing integer values (such as indexing or discrete mathematics), ensuring that numeric inputs are properly formatted for these scenarios.

# Input types
## Required
- Value
    - The 'Value' parameter accepts a floating-point number and rounds it down to the nearest integer, facilitating operations that require integers.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int
    - The output is the integer representation of the input floating-point number, obtained by rounding down to the nearest integer.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [CLIPTextEncodeSDXL](../../Comfy/Nodes/CLIPTextEncodeSDXL.md)
    - [SVD_img2vid_Conditioning](../../Comfy/Nodes/SVD_img2vid_Conditioning.md)
    - [Image Resize](../../was-node-suite-comfyui/Nodes/Image Resize.md)
    - [KSampler Adv. (Efficient)](../../efficiency-nodes-comfyui/Nodes/KSampler Adv. (Efficient).md)



## Source code
```python
class IntegerNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value": Field.float(step=1)
            },
        }

    RETURN_TYPES = ("INT",)
    CATEGORY = TREE_VARIABLE
    FUNCTION = "get_value"

    def get_value(self, Value: float):
        return (int(Value),)

```

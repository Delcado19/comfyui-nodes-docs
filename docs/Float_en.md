
# Documentation
- Class name: Float
- Category: Logic
- Output node: False

Float node is specifically used to process numerical input, especially floating-point numbers, allowing precise control of decimal values in logical operations or calculations.

# Input types
## Required
- value
    - Define the floating-point number to be processed. This input is critical for determining the node's operation, affecting the precision and result of the calculation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- FLOAT
    - Output the processed floating-point number, maintaining the precision specified in the input.
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
class Float:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {"value": ("FLOAT", {"default": 0, "step": 0.01})},
        }

    RETURN_TYPES = ("FLOAT",)

    RETURN_NAMES = ("FLOAT",)

    FUNCTION = "execute"

    CATEGORY = "Logic"

    def execute(self, value):
        return (value,)

```

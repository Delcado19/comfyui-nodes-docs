
# Documentation
- Class name: XY Input: Add_Return Noise
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The TSC_XYplot_AddReturnNoise node is designed specifically for XY input types, adding or returning noise during a given process. It maps the input type to the corresponding noise operation and enables or disables noise based on the specified type.

# Input types
## Required
- XY_type
- Specify the noise operation type to perform, which can be adding noise or returning remaining noise, determining how the node processes the input.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- X or Y
- Output parameters X or Y represent the node's processed result, which may be data with added noise or the returned remaining noise, depending on the input XY_type.
    - Comfy dtype: XY
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_AddReturnNoise:

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {
                    "XY_type": (["add_noise", "return_with_leftover_noise"],)}
        }

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, XY_type):
        type_mapping = {
            "add_noise": "AddNoise",
            "return_with_leftover_noise": "ReturnNoise"
        }
        xy_type = type_mapping[XY_type]
        xy_value = ["enable", "disable"]
        return ((xy_type, xy_value),)

```

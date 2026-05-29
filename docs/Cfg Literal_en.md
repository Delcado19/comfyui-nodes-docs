
# Documentation
- Class name: Cfg Literal
- Category: ImageSaverTools/utils
- Output node: False

The Cfg Literal node aims to provide a configurable floating point value within a specified range. It serves as a utility tool under the ImageSaverTools/utils category, allowing dynamic adjustment of parameters that require precise numerical input.

# Input types
## Required
- float
    - Specify the floating point value returned by the node. This parameter allows dynamic configuration of the value within the defined range, influencing the node's output based on the specified numerical input.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The floating point value specified by the input parameter. This output is used to dynamically configure other nodes or parameters within the system.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - Reroute
    - [FaceDetailer](../../ComfyUI-Impact-Pack/Nodes/FaceDetailer.md)
    - [KSampler](../../Comfy/Nodes/KSampler.md)



## Source code
```python
class CfgLiteral:
    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "get_float"
    CATEGORY = "ImageSaverTools/utils"

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"float": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0})}}

    def get_float(self, float):
        return (float,)

```

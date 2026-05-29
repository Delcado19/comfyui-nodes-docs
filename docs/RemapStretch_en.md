
# Documentation
- Class name: RemapStretch
- Category: Bmad/CV/Transform
- Output node: False

The RemapStretch node applies a stretch transformation to an image, adjusting its geometry based on specified x-axis and y-axis power factors, centered on a given point. This node is intended to manipulate image dimensions in a non-linear manner, providing a method to simulate or correct distortion.

# Input types
## Required
- power_x
    - Specifies the power factor for stretching along the x-axis. Higher values result in more pronounced stretching.
    - Comfy dtype: FLOAT
    - Python dtype: float
- power_y
    - Specifies the power factor for stretching along the y-axis. Similar to power_x, it controls the degree of vertical stretching.
    - Comfy dtype: FLOAT
    - Python dtype: float
- center_x
    - Determines the horizontal center point of the stretch effect. The value range is 0 to 1, representing a percentage of the image width.
    - Comfy dtype: FLOAT
    - Python dtype: float
- center_y
    - Determines the vertical center point of the stretch effect. The value range is 0 to 1, representing a percentage of the image height.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- remap
    - The output is a set of parameters or transformation map that defines how the image is stretched based on the input parameters. This map is used to adjust the image geometry to achieve the stretch effect.
    - Comfy dtype: REMAP
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemapStretch(RemapBase):
    @classmethod
    def INPUT_TYPES(s):
        return RemapPinch.INPUT_TYPES_DICT

    def send_remap(self, power_x, power_y, center_x, center_y):
        from .utils.remaps import remap_pinch_or_stretch
        return ({
                    "func": remap_pinch_or_stretch,
                    "xargs": [(1 / power_x, 1 / power_y), (center_x, center_y)]
                },)

```

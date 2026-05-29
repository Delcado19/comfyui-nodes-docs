# Documentation
- Class name: ConditioningSetAreaPercentage
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningSetAreaPercentage node aims to modify the properties of a conditioning set by adding a new set of parameters that define area percentages. It operates by adjusting the 'area' attribute to percentage values based on provided width and height, without affecting existing bounds. This node plays a key role in fine-tuning model conditioning, allowing more granular control over the conditioning process.

# Input types
## Required
- conditioning
    - The conditioning parameter is critical to the node, as it represents the initial conditioning set to be modified. This is the starting point for the node's operation and determines the context in which area percentages are applied.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- width
    - The width parameter defines the area width as a percentage of the total width. It is a key factor in determining the size of the area within the conditioning set, and thus has a significant impact on the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- height
    - The height parameter specifies the area height as a percentage of the total height. It works together with width to determine the dimensions of the region within the conditioning set.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x
    - The x parameter represents the horizontal position of the top-left corner of the region within the conditioning set. It is essential for precisely locating where the area percentage is applied.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y
    - The y parameter represents the vertical position of the top-left corner of the region within the conditioning set. It is essential for accurately positioning the region within the set.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - The intensity parameter determines the strength of influence within the region of the conditioning set. It allows fine-tuning of how strongly the region's features affect the overall conditioning.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning set is a modified version of the input, with area percentage and intensity parameters applied. It represents the updated state of the conditioning after processing by the node.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConditioningSetAreaPercentage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',), 'width': ('FLOAT', {'default': 1.0, 'min': 0, 'max': 1.0, 'step': 0.01}), 'height': ('FLOAT', {'default': 1.0, 'min': 0, 'max': 1.0, 'step': 0.01}), 'x': ('FLOAT', {'default': 0, 'min': 0, 'max': 1.0, 'step': 0.01}), 'y': ('FLOAT', {'default': 0, 'min': 0, 'max': 1.0, 'step': 0.01}), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'append'
    CATEGORY = 'conditioning'

    def append(self, conditioning, width, height, x, y, strength):
        c = node_helpers.conditioning_set_values(conditioning, {'area': ('percentage', height, width, y, x), 'strength': strength, 'set_area_to_bounds': False})
        return (c,)
```
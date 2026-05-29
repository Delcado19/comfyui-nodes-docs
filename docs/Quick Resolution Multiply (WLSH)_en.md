# Documentation
- Class name: WLSH_Res_Multiply
- Category: WLSH Nodes/number
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_Res_Multiply node performs multiplication on width and height values, scaling them according to the provided multiplier. It plays a critical role in resizing images or similar geometric entities, ensuring the scaling factor is applied uniformly to both dimensions.

# Input types
## Required
- width
    - ‘width’ parameter represents the initial width of the entity to be scaled. It is essential to the node's operation because it determines the starting point of the multiplication process. Once the width is multiplied by the multiplier, it defines the new scaled width.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - ‘height’ parameter represents the initial height of the entity before scaling. It is a key input to the node because it determines the vertical dimension affected by the multiplier. The final height after operation will reflect the scaled height.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - ‘multiplier’ parameter is the factor by which width and height will be scaled. It is a key component of the node because it directly influences the magnitude of the scaling operation. Choosing an appropriate multiplier is crucial to achieving the desired dimensions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - ‘width’ output represents the scaled width of the entity after the multiplication operation. It is important because it provides the new width measurement resulting from the scaling process.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - ‘height’ output indicates the scaled height of the entity after multiplication. It is a significant result of the node's operation because it provides the new height measurement after scaling.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Res_Multiply:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'width': ('INT', {'default': 512, 'min': 16, 'max': MAX_RESOLUTION, 'forceInput': True}), 'height': ('INT', {'default': 512, 'min': 16, 'max': MAX_RESOLUTION, 'forceInput': True}), 'multiplier': ('INT', {'default': 2, 'min': 1, 'max': 10000})}}
    RETURN_TYPES = ('INT', 'INT')
    RETURN_NAMES = ('width', 'height')
    FUNCTION = 'multiply'
    CATEGORY = 'WLSH Nodes/number'

    def multiply(self, width, height, multiplier):
        adj_width = width * multiplier
        adj_height = height * multiplier
        return (int(adj_width), int(adj_height))
```
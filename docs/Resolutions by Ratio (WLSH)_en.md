# Documentation
- Class name: WLSH_Resolutions_by_Ratio
- Category: WLSH Nodes/number
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'get_resolutions' method of the WLSH_Resolutions_by_Ratio node calculates image width and height based on a given aspect ratio, direction, and short side length. It first determines the ratio from the aspect ratio string, then computes the width using the short side length and ratio. The method also accounts for image direction; if the direction is portrait, it swaps width and height. This node plays a critical role in image processing and display settings where aspect ratio and direction are essential.

# Input types
## Required
- aspect
- Parameter `aspect` defines the image's aspect ratio and is crucial for determining correct dimensions. It is a ratio string such as `16:9`. When resizing, the aspect ratio is vital for preserving the image's shape and proportion.
    - Comfy dtype: STR
    - Python dtype: str
- direction
- Parameter `direction` specifies the image orientation and can be `landscape` or `portrait`. This parameter is essential because it influences width and height calculations, ensuring dimensions fit the specified orientation.
    - Comfy dtype: STR
    - Python dtype: str
- shortside
- Parameter `shortside` represents the length of the image's shorter edge. It is a key input that directly affects width and height calculations based on aspect ratio and direction. The method ensures the width is optimized for display or processing purposes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
- Output parameter `width` provides the calculated image width after considering aspect ratio, direction, and short side length. It is important for ensuring the image fits the required display or processing constraints.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Output parameter `height` provides the calculated image height after considering aspect ratio, direction, and short side length. It plays a vital role in maintaining image proportion and meeting display requirements.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Resolutions_by_Ratio:
    aspects = ['1:1', '6:5', '5:4', '4:3', '3:2', '16:10', '16:9', '21:9', '2:1', '3:1', '4:1']
    direction = ['landscape', 'portrait']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'aspect': (s.aspects,), 'direction': (s.direction,), 'shortside': ('INT', {'default': 512, 'min': 64, 'max': MAX_RESOLUTION, 'step': 64})}}
    RETURN_TYPES = ('INT', 'INT')
    RETURN_NAMES = ('width', 'height')
    FUNCTION = 'get_resolutions'
    CATEGORY = 'WLSH Nodes/number'

    def get_resolutions(self, aspect, direction, shortside):
        (x, y) = aspect.split(':')
        x = int(x)
        y = int(y)
        ratio = x / y
        width = int(shortside * ratio)
        width = width + 63 & -64
        height = shortside
        if direction == 'portrait':
            (width, height) = (height, width)
        return (width, height)
```
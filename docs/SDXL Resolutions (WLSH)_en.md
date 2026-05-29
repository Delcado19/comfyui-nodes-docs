# Documentation
- Class name: WLSH_SDXL_Resolutions
- Category: WLSH Nodes/number
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'get_resolutions' method of the WLSH_SDXL_Resolutions node processes image resolution and orientation data. It takes a resolution string and a direction indicator, converts the resolution to integer width and height, and adjusts these values based on the provided direction to maintain the correct aspect ratio for portrait or landscape orientation.

# Input types
## Required
- resolution
- The "resolution" parameter is a string that specifies the image size in 'widthxheight' format. It is essential for determining the pixel dimensions and for calculating width and height values.
    - Comfy dtype: str
    - Python dtype: str
- direction
- The "direction" parameter indicates the image orientation, which can be 'landscape' or 'portrait'. This parameter is crucial for adjusting width and height to match the specified orientation.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- width
- The 'width' output represents the image width after considering the direction specified by the 'direction' input. It is an integer reflecting the number of pixels on the horizontal axis.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The 'height' output corresponds to the image height after orientation adjustment. It is an integer indicating the number of pixels on the vertical axis.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_SDXL_Resolutions:
    resolution = ['1024x1024', '1152x896', '1216x832', '1344x768', '1536x640']
    direction = ['landscape', 'portrait']

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'resolution': (s.resolution,), 'direction': (s.direction,)}}
    RETURN_TYPES = ('INT', 'INT')
    RETURN_NAMES = ('width', 'height')
    FUNCTION = 'get_resolutions'
    CATEGORY = 'WLSH Nodes/number'

    def get_resolutions(self, resolution, direction):
        (width, height) = resolution.split('x')
        width = int(width)
        height = int(height)
        if direction == 'portrait':
            (width, height) = (height, width)
        return (width, height)
```
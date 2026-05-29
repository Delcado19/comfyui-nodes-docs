# Documentation
- Class name: WAS_Image_Bounds_to_Console
- Category: WAS Suite/Debug
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Bounds_to_Console node facilitates the debugging process by outputting image bounds information to the console. It enhances visibility during image processing stages by providing a clear, formatted display of bounds, aiding in the analysis and validation of image manipulation workflows.

# Input types
## Required
- image_bounds
    - The image_bounds parameter is critical to the node's operation, as it defines the region of interest within the image. It is used to identify and isolate specific portions of the image for further processing or analysis, and thus plays a significant role in the node's execution and the results it produces.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: List[Tuple[int, int, int, int]]
## Optional
- label
    - The label parameter serves as a descriptive identifier for the debug output. While not mandatory, it can be used to customize console output, making it easier to distinguish between different debug messages, which is particularly useful in complex debugging scenarios.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image_bounds
    - The output image_bounds parameter retains the input image bounds data, ensuring that debug information accurately reflects in the console output. This parameter is important because it allows verification of image bounds after node processing.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: List[Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Bounds_to_Console:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image_bounds': ('IMAGE_BOUNDS',), 'label': ('STRING', {'default': 'Debug to Console', 'multiline': False})}}
    RETURN_TYPES = ('IMAGE_BOUNDS',)
    OUTPUT_NODE = True
    FUNCTION = 'debug_to_console'
    CATEGORY = 'WAS Suite/Debug'

    def debug_to_console(self, image_bounds, label):
        label_out = 'Debug to Console'
        if label.strip() != '':
            label_out = label
        bounds_out = 'Empty'
        if len(bounds_out) > 0:
            bounds_out = ', \n    '.join(('\t(rmin={}, rmax={}, cmin={}, cmax={})'.format(a, b, c, d) for (a, b, c, d) in image_bounds))
        cstr(f'\x1b[33m{label_out}\x1b[0m:\n[\n{bounds_out}\n]\n').msg.print()
        return (image_bounds,)

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```
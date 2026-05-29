# Documentation
- Class name: NearestSDXLResolution
- Category: math/graphics
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

NearestSDXLResolution node aims to select the supported resolution closest to the input image resolution. It does this by calculating the aspect ratio of the input image, comparing it with a list of supported resolutions, and selecting the resolution with the smallest difference. The function of this node is crucial for ensuring compatibility and optimal display quality in graphics processing applications.

# Input types
## Required
- image
    - The 'image' parameter is crucial as it serves as the input to the node. This is the image whose resolution is to be matched with the supported resolutions. The node's operation entirely depends on this input, as it determines the selection of the nearest supported resolution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - The 'width' parameter represents the width of the selected resolution. It is a key output, as it defines the horizontal dimension of the image after the resolution matching process. This output is very important for any subsequent graphics operations that depend on the image size.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter represents the height of the selected resolution. Similar to the 'width' parameter, it is an important output that determines the vertical dimension of the image for further processing. It ensures that the aspect ratio of the image is maintained after the resolution selection.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class NearestSDXLResolution:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'image': ('IMAGE',)}}
    RETURN_TYPES = ('INT', 'INT')
    RETURN_NAMES = ('width', 'height')
    FUNCTION = 'op'
    CATEGORY = 'math/graphics'

    def op(self, image) -> tuple[int, int]:
        image_width = image.size()[2]
        image_height = image.size()[1]
        print(f'Input image resolution: {image_width}x{image_height}')
        image_ratio = image_width / image_height
        differences = [(abs(image_ratio - resolution[2]), resolution) for resolution in SDXL_SUPPORTED_RESOLUTIONS]
        smallest = None
        for difference in differences:
            if smallest is None:
                smallest = difference
            elif difference[0] < smallest[0]:
                smallest = difference
        if smallest is not None:
            width = smallest[1][0]
            height = smallest[1][1]
        else:
            width = 1024
            height = 1024
        print(f'Selected SDXL resolution: {width}x{height}')
        return (width, height)
```
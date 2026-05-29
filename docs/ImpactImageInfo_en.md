# Documentation
- Class name: ImpactImageInfo
- Category: ImpactPack/Logic/_for_test
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactImageInfo node is designed to provide critical image information. It is essential for understanding the dimensions and structure of image datasets, which is crucial for downstream processing and analysis tasks. This method abstractly conveys the node's ability to extract and return the batch size, height, width, and number of channels of the input image.

# Input types
## Required
- value
    - The 'value' parameter is the input image data processed by the node. Its role is foundational, as it directly affects the output information regarding image dimensions. This parameter is critical to the node's execution, as it serves as the basis for determining the batch size, height, width, and number of channels.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- batch
    - The 'batch' parameter represents the number of images processed in a single batch. It is important because it indicates the volume of data processed at once, which is critical for optimizing computational resources and understanding the scope of analysis.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter represents the vertical dimension of the input image. It is a key factor in determining spatial resolution and is essential for image manipulation and display purposes.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The 'width' parameter represents the horizontal dimension of the input image. It plays a critical role in overall image resolution and is essential for ensuring correct aspect ratio and display format.
    - Comfy dtype: INT
    - Python dtype: int
- channel
    - The 'channel' parameter refers to the number of color components in the image, typically three for RGB images. It is the determining factor for color depth and is essential for color processing and image enhancement tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactImageInfo:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'value': ('IMAGE',)}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic/_for_test'
    RETURN_TYPES = ('INT', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('batch', 'height', 'width', 'channel')

    def doit(self, value):
        return (value.shape[0], value.shape[1], value.shape[2], value.shape[3])
```
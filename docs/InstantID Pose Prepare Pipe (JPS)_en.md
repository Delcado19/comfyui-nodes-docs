
# Documentation
- Class name: InstantID Pose Prepare Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The InstantIDPosePrepare_Pipe node is specifically designed to prepare image settings for pose estimation in the InstantID generation process. It handles various image preparation parameters such as resizing, cropping, padding, and interpolation to optimize images for subsequent pose analysis.

# Input types
## Required
- imageprepare_settings
    - Specifies settings for preparing images, including resizing, cropping, padding, and interpolation, which are critical for optimizing images for pose estimation.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[str]

# Output types
- resize_to
    - The target size the image should be resized to.
    - Comfy dtype: INT
    - Python dtype: int
- offset_width
    - The width offset applied to the image.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - The height offset applied to the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_left
    - The amount cropped from the left side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_right
    - The amount cropped from the right side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_top
    - The amount cropped from the top of the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_bottom
    - The amount cropped from the bottom of the image.
    - Comfy dtype: INT
    - Python dtype: int
- padding_left
    - Amount of padding added to the left side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- padding_right
    - Amount of padding added to the right side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- padding_top
    - Amount of padding added to the top of the image.
    - Comfy dtype: INT
    - Python dtype: int
- padding_bottom
    - Amount of padding added to the bottom of the image.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - The interpolation method used for resizing the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- sharpening
    - The degree of sharpening applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- flip
    - Specifies whether the image should be flipped and along which axis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstantIDPosePrepare_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "imageprepare_settings": ("BASIC_PIPE",),
            }
        }
    RETURN_TYPES = ("INT","INT","INT","INT","INT","INT","INT","INT","INT","INT","INT",["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],"FLOAT",["No", "X-Axis", "Y-Axis"],)
    RETURN_NAMES = ("resize_to","offset_width","offset_height","crop_left","crop_right","crop_top","crop_bottom","padding_left","padding_right","padding_top","padding_bottom","interpolation","sharpening","flip")
    FUNCTION = "get_imageprepare"

    CATEGORY="JPS Nodes/Pipes"

    def get_imageprepare(self,imageprepare_settings):

        resizeto,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening,flip = imageprepare_settings

        return(resizeto,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening,flip)

```

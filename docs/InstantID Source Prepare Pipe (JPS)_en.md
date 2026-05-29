
# Documentation
- Class name: InstantID Source Prepare Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

This node prepares the source image for InstantID processing through a series of transformations such as resizing, cropping, and flipping. It allows detailed customization of the image preparation process to meet the specific requirements of InstantID analysis.

# Input types
## Required
- imageprepare_settings
    - Specify settings for preparing the source image, including resize, crop, and flip parameters. This configuration directly affects the dimensions and appearance of the output image, making it suitable for InstantID processing.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, int, int, int, int, int, int, str, float, str]

# Output types
- resize_to
    - The target size to which the source image will be resized.
    - Comfy dtype: INT
    - Python dtype: int
- offset_width
    - The horizontal offset applied during image preparation.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - The vertical offset applied during image preparation.
    - Comfy dtype: INT
    - Python dtype: int
- crop_left
    - Number of pixels cropped from the left side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_right
    - Number of pixels cropped from the right side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_top
    - Number of pixels cropped from the top of the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_bottom
    - Number of pixels cropped from the bottom of the image.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - The method used to resize the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - The degree of sharpening applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- flip
    - Specifies whether the image should be flipped and along which axis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstantIDSourcePrepare_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "imageprepare_settings": ("BASIC_PIPE",),
            }
        }
    RETURN_TYPES = ("INT","INT","INT","INT","INT","INT","INT",["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],"FLOAT",["No", "X-Axis", "Y-Axis"],)
    RETURN_NAMES = ("resize_to","offset_width","offset_height","crop_left","crop_right","crop_top","crop_bottom","interpolation","sharpening","flip",)
    FUNCTION = "get_imageprepare"

    CATEGORY="JPS Nodes/Pipes"

    def get_imageprepare(self,imageprepare_settings):

        resizeto,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,interpolation,sharpening,flip = imageprepare_settings

        return(resizeto,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,interpolation,sharpening,flip)

```

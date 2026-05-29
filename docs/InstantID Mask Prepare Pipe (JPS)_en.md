
# Documentation
- Class name: InstantID Mask Prepare Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

InstantIDMaskPrepare_Pipe node is used to prepare image masks for instant ID generation and perform specific configurations. It handles various settings to adjust image preparation parameters such as resizing, cropping, padding, and interpolation, which are specifically used for generating masks in identity verification or similar applications.

# Input types
## Required
- imageprepare_settings
    - Specifies the settings for preparing image masks, including details of resizing, cropping, padding, and interpolation, which are critical for the final appearance and alignment of the mask.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[str, int, str, int, int, int, int, int, int, int, int, int, int, str, float]

# Output types
- mask_type
    - Indicates the type of mask generated.
    - Comfy dtype: INT
    - Python dtype: int
- resize_to
    - Specifies the target size to which the image should be resized.
    - Comfy dtype: INT
    - Python dtype: int
- resize_type
    - Describes the method used to resize the image, such as cropping or stretching.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- offset_width
    - Width offset applied during the image preparation process.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - Height offset applied during the image preparation process.
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
    - Interpolation method used for resizing the image, affecting image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Sharpening amount applied to the image to enhance detail visibility.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstantIDMaskPrepare_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "imageprepare_settings": ("BASIC_PIPE",),
            }
        }
    RETURN_TYPES = ("INT","INT",["Crop","Stretch"],"INT","INT","INT","INT","INT","INT","INT","INT","INT","INT",["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],"FLOAT",)
    RETURN_NAMES = ("mask_type","resize_to","resize_type","offset_width","offset_height","crop_left","crop_right","crop_top","crop_bottom","padding_left","padding_right","padding_top","padding_bottom","interpolation","sharpening",)
    FUNCTION = "get_imageprepare"

    CATEGORY="JPS Nodes/Pipes"

    def get_imageprepare(self,imageprepare_settings):

        masktype,resizeto,resizetype,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening = imageprepare_settings

        return(masktype,resizeto,resizetype,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening)

```

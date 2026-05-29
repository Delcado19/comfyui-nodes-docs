
# Documentation
- Class name: Crop Image Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The Crop Image Pipe node is specifically designed to handle image crop settings, allowing you to apply specified crop positions, offsets, and interpolation methods to images. It simplifies the complexity of image cropping operations, enabling users to define how to crop and resize images for further processing or visualization.

# Input types
## Required
- cropimage_settings
    - Specifies the settings for image cropping, including the position, offset, and interpolation method to use. This parameter is critical for determining how the image is cropped and resized, directly affecting the final output.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[str, int, str, int, str]

# Output types
- source_crop_pos
    - The position from which the source image should be cropped.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- source_crop_offset
    - The offset applied to the crop position of the source image.
    - Comfy dtype: INT
    - Python dtype: int
- support_crop_pos
    - The position from which the auxiliary image should be cropped.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- support_crop_offset
    - The offset applied to the crop position of the auxiliary image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_intpol
    - The interpolation method used for cropping the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CropImage_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "cropimage_settings": ("BASIC_PIPE",)
            },
        }
    RETURN_TYPES = (["center","top", "bottom", "left", "right"],"INT",["center","top", "bottom", "left", "right"],"INT",["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],)
    RETURN_NAMES = ("source_crop_pos", "source_crop_offset", "support_crop_pos", "support_crop_offset", "crop_intpol",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Pipes"

    def give_values(self,cropimage_settings):
        
        source_crop_pos, source_crop_offset, support_crop_pos, support_crop_offset, crop_intpol = cropimage_settings

        return(source_crop_pos, source_crop_offset, support_crop_pos, support_crop_offset, crop_intpol,)

```

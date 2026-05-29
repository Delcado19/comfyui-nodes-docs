
# Documentation
- Class name: Crop Image Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

The Crop Image Settings node is designed to configure parameters for image cropping, including position, offset, and interpolation method. It abstracts the complexity of image cropping settings, allowing flexible and precise control over image cropping and preparation for further processing.

# Input types
## Required
- source_crop_pos
    - Specify the initial position for cropping the source image. This affects the starting point of cropping and influences the final composition of the cropped image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- source_crop_offset
    - Determine the offset for the specified position of source image cropping, providing fine control over the cropping position.
    - Comfy dtype: INT
    - Python dtype: int
- support_crop_pos
    - Specify the initial position for supporting image cropping, similar to 'source_crop_pos', but for additional images or context.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- support_crop_offset
    - Determine the offset for the specified position of supporting image cropping, allowing precise alignment with the source image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_intpol
    - Define the interpolation method used for cropping, affecting the quality and appearance of the cropped image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- cropimage_settings
    - Configuration settings for image cropping, encapsulating details of position, offset, and interpolation method.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[List[str], int, List[str], int, List[str]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CropImage_Settings:
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "source_crop_pos": (["center","top", "bottom", "left", "right"],),
                "source_crop_offset": ("INT", { "default": 0, "min": -2048, "max": 2048, "step": 1, "display": "number" }),
                "support_crop_pos": (["center","top", "bottom", "left", "right"],),
                "support_crop_offset": ("INT", { "default": 0, "min": -2048, "max": 2048, "step": 1, "display": "number" }),
                "crop_intpol": (["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],),
            }   
        }
    RETURN_TYPES = ("BASIC_PIPE",) 
    RETURN_NAMES = ("cropimage_settings",)
    FUNCTION = "get_cropimage"

    CATEGORY="JPS Nodes/Settings"

    def get_cropimage(self, source_crop_pos, source_crop_offset, support_crop_pos, support_crop_offset, crop_intpol,):
       
        cropimage_settings = source_crop_pos, source_crop_offset, support_crop_pos, support_crop_offset, crop_intpol

        return(cropimage_settings,)

```


# Documentation
- Class name: InstantID Source Prepare Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

The InstantID Source Prepare Settings (JPS) node is designed to prepare settings for source image processing in the InstantID generation process. It primarily focuses on resizing, cropping, and flipping of the source image to meet the specific requirements of subsequent processing steps.

# Input types
## Required
- resize_to
    - Determines the resizing strategy for the source image, affecting how the image is scaled to fit the required dimensions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- offset_width
    - Specifies the horizontal offset applied during image processing, adjusting the position of the image.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - Specifies the vertical offset applied during image processing, adjusting the position of the image.
    - Comfy dtype: INT
    - Python dtype: int
- crop_left
    - Defines the amount cropped from the left side of the image, adjusting its dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- crop_right
    - Defines the amount cropped from the right side of the image, adjusting its dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- crop_top
    - Defines the amount cropped from the top of the image, adjusting its dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- crop_bottom
    - Defines the amount cropped from the bottom of the image, adjusting its dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - Specifies the interpolation method used for image resizing, affecting image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Determines the degree of sharpening applied to the image, enhancing its details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- flip
    - Indicates whether the image should be flipped horizontally or vertically, changing its orientation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- imageprepare_settings
    - Encapsulates the configuration settings for preparing the source image, including resizing, cropping, and flipping parameters.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstantIDSourcePrepare_Settings:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "resize_to": (["Resize to Target","Keep Size"],),
                "offset_width": ("INT", { "default": 0, "min": -99, "max": 99, "step": 1, "display": "number" }),
                "offset_height": ("INT", { "default": 0, "min": -99, "max": 99, "step": 1, "display": "number" }),
                "crop_left": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_right": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_top": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_bottom": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "interpolation": (["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],),
                "sharpening": ("FLOAT", { "default": 0.0, "min": 0, "max": 1, "step": 0.05, "display": "number" }),
                "flip": (["No", "X-Axis", "Y-Axis"],),                
            }
        }
    RETURN_TYPES = ("BASIC_PIPE",)
    RETURN_NAMES = ("imageprepare_settings",)
    FUNCTION = "get_imageprepare"

    CATEGORY="JPS Nodes/Settings"

    def get_imageprepare(self,resize_to,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,interpolation,sharpening,flip):

        resizeto = int (0)
        if(resize_to == "Keep Size"):
            resizeto = int(1)
        elif(resize_to == "Resize to Target"):
            resizeto = int(2)

        imageprepare_settings = resizeto, offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,interpolation,sharpening,flip

        return(imageprepare_settings,)

```

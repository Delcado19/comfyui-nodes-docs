
# Documentation
- Class name: Image Prepare Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: None specified

This node is designed to configure and prepare image settings for further processing or conversion. It allows customization of various parameters such as resizing, cropping, padding, and applying specific image adjustments (such as sharpening or interpolation), enabling a tailored image preparation workflow.

# Input types
## Required
- offset_width
    - Horizontal offset applied to the image, used for precise positioning or adjustment.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - Vertical offset applied to the image, used for precise positioning or adjustment.
    - Comfy dtype: INT
    - Python dtype: int
- crop_left
    - Amount cropped from the left side of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- crop_right
    - Amount cropped from the right side of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- crop_top
    - Amount cropped from the top of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- crop_bottom
    - Amount cropped from the bottom of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- padding_left
    - Amount of padding added to the left side of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- padding_right
    - Amount of padding added to the right side of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- padding_top
    - Amount of padding added to the top of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- padding_bottom
    - Amount of padding added to the bottom of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - Specifies the interpolation method used when resizing or converting the image, affecting the smoothness and quality of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Degree of sharpening applied to the image, enhancing details and clarity.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- imageprepare_settings
    - Configured image preparation settings, encapsulating all adjustments and transformations to be applied.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, int, str, int, int, int, int, int, int, int, int, int, int, str, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImagePrepare_Settings:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "offset_width": ("INT", { "default": 0, "min": -99, "max": 99, "step": 1, "display": "number" }),
                "offset_height": ("INT", { "default": 0, "min": -99, "max": 99, "step": 1, "display": "number" }),
                "crop_left": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_right": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_top": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_bottom": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "padding_left": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "padding_right": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "padding_top": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "padding_bottom": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "interpolation": (["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],),
                "sharpening": ("FLOAT", { "default": 0.0, "min": 0, "max": 1, "step": 0.05, "display": "number" }),
            }
        }
    RETURN_TYPES = ("BASIC_PIPE",)
    RETURN_NAMES = ("imageprepare_settings",)
    FUNCTION = "get_imageprepare"

    CATEGORY="JPS Nodes/Settings"

    def get_imageprepare(self,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening):

        imageprepare_settings = offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening

        return(imageprepare_settings,)

```

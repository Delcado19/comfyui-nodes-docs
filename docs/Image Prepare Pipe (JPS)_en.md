
# Documentation
- Class name: Image Prepare Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The Image Prepare Pipe node is designed to configure and apply various preprocessing steps to prepare images before further processing. This includes setting parameters for resizing, cropping, padding, interpolation, and sharpening to ensure images are optimally processed in subsequent stages.

# Input types
## Required
- imageprepare_settings
    - Specify image preparation settings, including resizing, cropping, padding, interpolation, and sharpening. This configuration is critical for tailoring the image processing pipeline to the specific needs of the application.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, int, str, int, int, int, int, int, int, int, int, str, float]

# Output types
- offset_width
    - The horizontal offset applied during image preparation.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - The vertical offset applied during image preparation.
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
    - The amount of padding added to the left side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- padding_right
    - The amount of padding added to the right side of the image.
    - Comfy dtype: INT
    - Python dtype: int
- padding_top
    - The amount of padding added to the top of the image.
    - Comfy dtype: INT
    - Python dtype: int
- padding_bottom
    - The amount of padding added to the bottom of the image.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - The interpolation method used when resizing the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - The degree of sharpening applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImagePrepare_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "imageprepare_settings": ("BASIC_PIPE",),
            }
        }
    RETURN_TYPES = ("INT","INT","INT","INT","INT","INT","INT","INT","INT","INT",["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],"FLOAT",)
    RETURN_NAMES = ("offset_width","offset_height","crop_left","crop_right","crop_top","crop_bottom","padding_left","padding_right","padding_top","padding_bottom","interpolation","sharpening",)
    FUNCTION = "get_imageprepare"

    CATEGORY="JPS Nodes/Pipes"

    def get_imageprepare(self,imageprepare_settings):

        offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening = imageprepare_settings

        return(offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening)

```

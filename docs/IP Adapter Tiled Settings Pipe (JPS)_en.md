
# Documentation
- Class name: IP Adapter Tiled Settings Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The IP Adapter Tiled Settings Pipe (JPS) node is used to configure and apply image processing adapter settings for tiled images. It allows customization of various image processing parameters to enhance or modify tiled images according to the specified settings.

# Input types
## Required
- ip_adapter_settings
    - Defines a comprehensive configuration of image processing adapter settings for tiled images. By adjusting parameters such as model, weight type, noise level, etc., it affects the results of processing and enhancement.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[str, str, float, float, float, float, int, float, int, int, int, int, str, float]

# Output types
- ipa_model
    - The model used for image processing.
    - Comfy dtype: INT
    - Python dtype: str
- ipa_wtype
    - The type of weight applied during image processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- ipa_weight
    - The weight applied to image processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_noise
    - The noise level applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_start
    - The starting point of image processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_end
    - The ending point of image processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_short
    - The short side length of the tile.
    - Comfy dtype: INT
    - Python dtype: int
- tile_weight
    - The weight applied to the tile.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoom
    - The scale level applied to the image.
    - Comfy dtype: INT
    - Python dtype: int
- offset_w
    - The width offset applied to the image.
    - Comfy dtype: INT
    - Python dtype: int
- offset_h
    - The height offset applied to the image.
    - Comfy dtype: INT
    - Python dtype: int
- prepare_type
    - The preparation type used for the image.
    - Comfy dtype: INT
    - Python dtype: int
- prepare_intpol
    - The interpolation method used for image preparation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prepare_sharpening
    - The sharpening level applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IP_Adapter_Tiled_Settings_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "ip_adapter_settings": ("BASIC_PIPE",),
            }
        }
    RETURN_TYPES = ("INT",["linear", "ease in", "ease out", "ease in-out", "reverse in-out", "weak input", "weak output", "weak middle", "strong middle"],"FLOAT","FLOAT","FLOAT","FLOAT","INT","FLOAT","INT","INT","INT","INT",["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],"FLOAT")
    RETURN_NAMES = ("ipa_model","ipa_wtype","ipa_weight","ipa_noise","ipa_start","ipa_end","tile_short","tile_weight","zoom","offset_w","offset_h","prepare_type","prepare_intpol","prepare_sharpening")
    FUNCTION = "get_ipatiled"

    CATEGORY="JPS Nodes/Pipes"

    def get_ipatiled(self,ip_adapter_settings):

        ipamodel,ipa_wtype,ipa_weight,ipa_noise,ipa_start,ipa_end,tile_short,tile_weight,zoom,offset_w,offset_h,preparetype,prepare_intpol,prepare_sharpening = ip_adapter_settings

        return(ipamodel,ipa_wtype,ipa_weight,ipa_noise,ipa_start,ipa_end,tile_short,tile_weight,zoom,offset_w,offset_h,preparetype,prepare_intpol,prepare_sharpening)

```

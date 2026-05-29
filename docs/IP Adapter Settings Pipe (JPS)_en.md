
# Documentation
- Class name: IP Adapter Settings Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

IP Adapter Settings Pipe node is used to process and adjust image processing settings, facilitating customization and application of various image processing techniques based on the provided settings. It abstracts the complexity of configuring and applying these settings, making it easier to achieve the desired image manipulation effects.

# Input types
## Required
- ip_adapter_settings
    - Specifies the settings for image processing adaptation, including weight, type, noise level, start and stop points, crop preference, scaling level, offset, mask type, interpolation method, sharpening level, and model type. This comprehensive set of parameters allows detailed customization of the image processing workflow.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[float, str, float, float, float, str, float, int, int, int, str, float, int]

# Output types
- ipa_weight
    - Weight factor applied to image processing settings, affecting the intensity of the applied effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_wtype
    - Type of weight application method used in image processing settings, such as linear or ease-in-out.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_noise
    - Noise level to be applied to the image as part of the processing settings.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_start
    - Starting point for applying the image processing effect, typically related to the intensity or duration of the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_stop
    - Stopping point of the image processing effect, marking the end of effect application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_crop
    - Crop method applied to the image, can be directional (such as center, top, bottom) or based on specific dimensions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_zoom
    - Zoom level applied to the image, affecting the focus and proportion of the processed image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_offset_x
    - Horizontal offset applied to the image, adjusting its position on the x-axis.
    - Comfy dtype: INT
    - Python dtype: int
- ipa_offset_y
    - Vertical offset applied to the image, adjusting its position on the y-axis.
    - Comfy dtype: INT
    - Python dtype: int
- ipa_mask
    - Mask type applied to the image, which can affect the area of the image influenced by the processing settings.
    - Comfy dtype: INT
    - Python dtype: int
- crop_intpol
    - Interpolation method used for cropping the image, affecting the smoothness and quality of the cropped area.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Sharpening level applied to the image, enhancing its clarity and details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_model
    - Model type used for processing the image, which can affect the overall style and quality of the output.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IP_Adapter_Settings_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "ip_adapter_settings": ("BASIC_PIPE",),
            }
        }
    RETURN_TYPES = ("FLOAT",["linear", "ease in", "ease out", "ease in-out", "reverse in-out", "weak input", "weak output", "weak middle", "strong middle"],"FLOAT","FLOAT","FLOAT",["center","top", "bottom", "left", "right"],"FLOAT","INT","INT","INT",["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],"FLOAT","INT")
    RETURN_NAMES = ("ipa_weight","ipa_wtype","ipa_noise","ipa_start","ipa_stop","ipa_crop","ipa_zoom","ipa_offset_x","ipa_offset_y","ipa_mask","crop_intpol","sharpening","ipa_model")
    FUNCTION = "get_ipamode_single"

    CATEGORY="JPS Nodes/Pipes"

    def get_ipamode_single(self,ip_adapter_settings):

        ipaweight,ipawtype,ipanoise,ipastart,ipastop,ipacrop,ipazoom,ipaoffsetx,ipaoffsety,ipamask,cropintpol,sharpening,ipamodel = ip_adapter_settings

        return(float(ipaweight),ipawtype,float(ipanoise),float(ipastart),float(ipastop),ipacrop,float(ipazoom),int(ipaoffsetx),int(ipaoffsety),int(ipamask),cropintpol,float(sharpening),int(ipamodel),)

```

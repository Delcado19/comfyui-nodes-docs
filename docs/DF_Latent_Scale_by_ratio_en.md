
# Documentation
- Class name: DF_Latent_Scale_by_ratio
- Category: Derfuu_Nodes/Modded nodes/Latent
- Output node: False

This node scales the latent representation of an image by a specified ratio, adjusting its dimensions while preserving the integrity of the latent space. It supports various scaling and cropping methods to fine-tune the output.

# Input types
## Required
- latent
    - The latent representation of the image to be scaled. It is essential for determining the base dimensions that will be modified according to the scaling ratio.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- modifier
    - A scaling factor that determines how much the latent dimensions should increase or decrease.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_method
    - Specifies the method used for scaling the latent image, such as nearest-exact, bilinear, etc., which affects the quality and characteristics of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- crop
    - Defines the cropping method to apply after scaling, allowing adjustment of the aspect ratio or size of the latent representation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- latent
    - The scaled latent representation adjusted according to the specified modifier, scaling method, and cropping preferences.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LatentScale_Ratio:
    scale_methods = scale_methods
    crop_methods = ["disabled", "center"]

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "latent": Field.latent(),
                "modifier": Field.float(min=0),
                "scale_method": Field.combo(cls.scale_methods),
                "crop": Field.combo(cls.crop_methods),
            }
        }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "scale"
    CATEGORY = TREE_LATENTS

    def scale(self, latent, scale_method, crop, modifier):

        size = get_latent_size(latent, True)

        lat_width = size[0] * modifier
        lat_width = int(lat_width + lat_width % 8)

        lat_height = size[1] * modifier
        lat_height = int(lat_height + lat_height % 8)

        cls = latent.copy()
        cls["samples"] = common_upscale(latent["samples"], lat_width, lat_height, scale_method, crop)
        return (cls,)

```

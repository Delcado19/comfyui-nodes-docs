
# Documentation
- Class name: RegionalConditioningColorMask __Inspire
- Category: InspirePack/Regional
- Output node: False

The RegionalConditioningColorMask node belongs to the Inspire Pack and is primarily used to regionally adjust input CLIP representations based on a specified color mask. It achieves precise control of image features by overlaying a color mask, adjusting intensity, and defining the adjustment region, enabling finer operations during generation.

# Input types
## Required
- clip
    - The CLIP representation serving as the basis for regional adjustment is the core input for target operations.
    - Comfy dtype: CLIP
    - Python dtype: str
- color_mask
    - An image mask that specifies the region to be adjusted, based on the provided color.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- mask_color
    - The color value used to generate a mask from the color_mask image, defining the specific area for adjustment.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - The adjustment intensity applied to the specified region, allowing fine‑tuning of the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - The image region to be adjusted, which can be the default area or the mask boundaries, offering flexible target selection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- prompt
    - Text prompt guiding the adjustment process, influencing features of the content generated within the masked area.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning
    - The conditioned CLIP representation modified according to the specified parameters and mask.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple
- mask
    - A mask generated from the specified color, used for adjustment.
    - Comfy dtype: MASK
    - Python dtype: Image


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RegionalConditioningColorMask:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "clip": ("CLIP", ),
                "color_mask": ("IMAGE",),
                "mask_color": ("STRING", {"multiline": False, "default": "#FFFFFF"}),
                "strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                "set_cond_area": (["default", "mask bounds"],),
                "prompt": ("STRING", {"multiline": True, "placeholder": "prompt"}),
            },
        }

    RETURN_TYPES = ("CONDITIONING", "MASK")
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, clip, color_mask, mask_color, strength, set_cond_area, prompt):
        mask = color_to_mask(color_mask, mask_color)

        conditioning = nodes.CLIPTextEncode().encode(clip, prompt)[0]
        conditioning = nodes.ConditioningSetMask().append(conditioning, mask, set_cond_area, strength)[0]
        return (conditioning, mask)

```

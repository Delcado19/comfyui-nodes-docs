
# Documentation
- Class name: RegionalConditioningSimple __Inspire
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet

This node is specifically used to apply regional conditions to a given input, leveraging a combination of text prompts and masks to influence the generation process of specific regions. It integrates text encoding and mask application to create conditional inputs customized according to regional specifications.

# Input types
## Required
- clip
    - The CLIP model used to encode text prompts into a format suitable for conditioning.
    - Comfy dtype: CLIP
    - Python dtype: str
- mask
    - Defines the mask of the region where conditioning is applied in the input.
    - Comfy dtype: MASK
    - Python dtype: numpy.ndarray
- strength
    - Determines the strength of the conditioning effect within the specified region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - Specifies the method for setting the conditioning region, which can be the default method or a method based on mask boundaries.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt
    - Used to generate conditioned text prompts. This will be encoded using the CLIP model.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning
    - The output is a conditioned input, customized according to the specified regional conditions, which can be used for further processing or generation tasks.
    - Comfy dtype: CONDITIONING
    - Python dtype: object


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RegionalConditioningSimple:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "clip": ("CLIP", ),
                "mask": ("MASK",),
                "strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                "set_cond_area": (["default", "mask bounds"],),
                "prompt": ("STRING", {"multiline": True, "placeholder": "prompt"}),
            },
        }

    RETURN_TYPES = ("CONDITIONING", )
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, clip, mask, strength, set_cond_area, prompt):
        conditioning = nodes.CLIPTextEncode().encode(clip, prompt)[0]
        conditioning = nodes.ConditioningSetMask().append(conditioning, mask, set_cond_area, strength)[0]
        return (conditioning, )

```

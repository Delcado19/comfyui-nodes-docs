# Documentation
- Class name: RemoveControlNet
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node aims to process and refine input data by removing control-related elements, thereby improving the clarity and focus of the dataset.

# Input types
## Required
- conditioning
    - Adjustment parameter is crucial because it is the main input for node operation. It contains the data to be processed to achieve the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, dict]]

# Output types
- conditioning
    - The output is a refined version of the input data, with control elements removed, which is crucial for further analysis or processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, dict]]

# Usage tips
- Infra type: CPU

# Source code
```
class RemoveControlNet:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',)}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Util'

    def doit(self, conditioning):
        c = []
        for t in conditioning:
            n = [t[0], t[1].copy()]
            if 'control' in n[1]:
                del n[1]['control']
            if 'control_apply_to_uncond' in n[1]:
                del n[1]['control_apply_to_uncond']
            c.append(n)
        return (c,)
```
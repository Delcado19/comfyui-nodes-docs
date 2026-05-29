# Documentation
- Class name: CLIPSubtract
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPSubtract node aims to perform subtraction operations on two CLIP models. It merges key patches from one CLIP model into another, allowing fine-tuning of model features by adjusting the influence of specific patches. This node is crucial in advanced model merging techniques, with the goal of distilling or modifying the behavior of existing models.

# Input types
## Required
- clip1
    - The first CLIP model, which will receive patches from the second model. It is crucial because it defines the base model that will incorporate modifications.
    - Comfy dtype: CLIP
    - Python dtype: An instance of a CLIP model class.
- clip2
    - The second CLIP model that provides key patches, which will be subtracted from the first model. It plays an important role in determining which aspects of the model will be changed.
    - Comfy dtype: CLIP
    - Python dtype: An instance of a CLIP model class.
## Optional
- multiplier
    - A floating point value to adjust the intensity of patches merged from the second CLIP model into the first model. It is important for controlling the degree of influence of the patches on the resulting model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- resulting_clip
    - The output of the CLIPSubtract node is the modified CLIP model, which now includes the patches subtracted from the second model and adjusted according to the specified multiplier.
    - Comfy dtype: CLIP
    - Python dtype: An instance of a modified CLIP model class.

# Usage tips
- Infra type: CPU

# Source code
```
class CLIPSubtract:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip1': ('CLIP',), 'clip2': ('CLIP',), 'multiplier': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('CLIP',)
    FUNCTION = 'merge'
    CATEGORY = 'advanced/model_merging'

    def merge(self, clip1, clip2, multiplier):
        m = clip1.clone()
        kp = clip2.get_key_patches()
        for k in kp:
            if k.endswith('.position_ids') or k.endswith('.logit_scale'):
                continue
            m.add_patches({k: kp[k]}, -multiplier, multiplier)
        return (m,)
```
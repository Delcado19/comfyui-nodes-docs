# Documentation
- Class name: CLIPMergeSimple
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPMergeSimple node is designed to seamlessly integrate two independent CLIP models into a unified representation. It achieves this by merging key patches from one model into another based on a specified ratio, which determines the influence of each model on the final merged output. This node is particularly useful for advanced applications where insights from two models need to be combined without training a new model from scratch.

# Input types
## Required
- clip1
    - The first CLIP model to be used as the base for merging. It serves as the primary structure where patches from the second model will be integrated.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model object
- clip2
    - The second CLIP model whose key patches will be merged into the base model. The selection of patches contributes to the final result of the merged model.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model object
- ratio
    - The ratio parameter controls the influence of the second model's patches on the merged model. A higher ratio increases the influence of the second model, while a lower ratio favors the attributes of the first model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_clip
    - The output of the CLIPMergeSimple node is a merged CLIP model that combines the features of both input models, providing a more nuanced representation for downstream tasks.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model object

# Usage tips
- Infra type: CPU

# Source code
```
class CLIPMergeSimple:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip1': ('CLIP',), 'clip2': ('CLIP',), 'ratio': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('CLIP',)
    FUNCTION = 'merge'
    CATEGORY = 'advanced/model_merging'

    def merge(self, clip1, clip2, ratio):
        m = clip1.clone()
        kp = clip2.get_key_patches()
        for k in kp:
            if k.endswith('.position_ids') or k.endswith('.logit_scale'):
                continue
            m.add_patches({k: kp[k]}, 1.0 - ratio, ratio)
        return (m,)
```
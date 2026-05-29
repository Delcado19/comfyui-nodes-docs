
# Documentation
- Class name: MergeModels
- Category: Art Venture/Utils
- Output node: False

The MergeModels node merges two models together according to a specified ratio, effectively combining their features and functions. This process enables creation of a hybrid model that incorporates the strengths or attributes of both input models.

# Input types
## Required
- model1
    - The first model to merge. It serves as the base model, and key features of the second model are applied to it according to the specified ratio.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_base.Model
- model2
    - The second model to merge. Its key features are applied to the first model, with the degree of influence determined by the ratio.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_base.Model
- ratio
    - A floating‑point value that determines the balance between the two models during merging. The closer the ratio is to 1.0, the greater the weight of the second model’s features in the result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The resulting model obtained after merging the two input models according to the specified ratio.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_base.Model


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilModelMerge:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model1": ("MODEL",),
                "model2": ("MODEL",),
                "ratio": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
            }
        }

    RETURN_TYPES = ("MODEL",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "merge_models"

    def merge_models(self, model1, model2, ratio=1.0):
        m = model1.clone()
        kp = model2.get_key_patches("diffusion_model.")

        for k in kp:
            k_unet = k[len("diffusion_model.") :]
            if k_unet == "input_blocks.0.0.weight":
                w = kp[k][0]
                if w.shape[1] == 9:
                    w = w[:, 0:4, :, :]
                m.add_patches({k: (w,)}, 1.0 - ratio, ratio)
            else:
                m.add_patches({k: kp[k]}, 1.0 - ratio, ratio)

        return (m,)

```

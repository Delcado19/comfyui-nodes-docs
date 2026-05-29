# Documentation
- Class name: Epsilon Scaling
- Category: model_patches/unet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Applies an epsilon scaling patch to a UNET model by multiplying its internal epsilon values by a given factor. This subtly adjusts the model's noise prediction behavior without retraining. The modified model is returned for downstream use in the workflow.

# Input types
## Required
- model
    - The UNET model to which the epsilon scaling patch will be applied.
    - Comfy dtype: MODEL
- scaling_factor
    - The multiplier applied to the model's epsilon values; defaults to 1.005 for minimal adjustment.
    - Comfy dtype: FLOAT
    - Default: `1.005`

# Output types
- MODEL
    - The patched UNET model with scaled epsilon values.
    - Comfy dtype: MODEL

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: ModelSubtract
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'merge' method of the ModelSubtract node aims to combine two models by subtracting key patches from one model using a specified multiplier. It performs a complex operation that integrates the characteristics of both models, allowing fine-tuned adjustments to their contributions.

# Input types
## Required
- model1
    - The 'model1' parameter is the main model from which patches will be subtracted. It plays a key role in the merge process as it forms the basic structure of the resulting model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter provides the key patches that will be subtracted from model1. It is crucial for determining the specific differences that will be integrated into the final model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- multiplier
    - The 'multiplier' parameter adjusts the intensity of the patches subtracted from model1. It is important as it allows fine-tuning the influence of model2 on the merged model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The 'merged_model' output represents the result of the model merging process. It encapsulates the combined features of the two input models, providing a new model with adjusted characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

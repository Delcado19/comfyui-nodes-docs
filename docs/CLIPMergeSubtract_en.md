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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

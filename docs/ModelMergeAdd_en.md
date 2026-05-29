# Documentation
- Class name: ModelAdd
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `merge` method of the ModelAdd node aims to merge two different models into a single, unified model. It works by cloning one model and then integrating key patches from the second model, ensuring the resulting model embodies characteristics of both original models. This process is critical for advanced applications that require fusion of model capabilities.

# Input types
## Required
- model1
    - The `model1` parameter is the first model to be cloned and serve as the base for the merge process. It is the foundational component, as it determines the initial structure and properties of the final merged model.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher or a similar type representing a model structure
- model2
    - The `model2` parameter represents the second model from which key patches are extracted and applied to `model1`. These patches help enhance the merged model with additional features and capabilities.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher or a similar type representing a model structure

# Output types
- merged_model
    - The output of the `merge` method is a single model merged from the input models. This model now encapsulates the combined strengths and functionalities of the two original models.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher or a similar type representing the merged model structure

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

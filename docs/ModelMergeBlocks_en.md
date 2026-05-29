# Documentation
- Class name: ModelMergeBlocks
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'merge' function of the ModelMergeBlocks node aims to fuse two different models into a unified structure. It achieves this by cloning the first model and then applying key patches from the second model according to a specified ratio. This process allows the creation of a hybrid model that combines the strengths of both original models, enhancing its overall predictive capabilities.

# Input types
## Required
- model1
    - The 'model1' parameter is the first model to be cloned and serve as the foundation for the merge process. It is a critical component because it determines the initial structure of the resulting hybrid model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter represents the second model from which key patches are extracted and applied to the cloned model. These patches are essential for incorporating the second model's characteristics into the merged model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- input
    - The 'input' parameter is a float value used as the default ratio in the merge process. It determines the influence of the second model's patches on the final model and can be adjusted to fine-tune the merge result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- middle
    - The 'middle' parameter is another float value that can be used to specify a different ratio for certain patches during the merge process. It provides additional control over how the models are merged.
    - Comfy dtype: FLOAT
    - Python dtype: float
- out
    - The 'out' parameter is a float value used to define the output ratio of the merge process. It is used to balance the contributions of the original models to the final hybrid model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The output 'merged_model' is the result of the merge process, combining the characteristics of the input models into a single, cohesive structure. It represents the culmination of the node's functionality, providing a new model with an enhanced set of capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

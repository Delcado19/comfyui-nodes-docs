
# Documentation
- Class name: AV_CheckpointMerge
- Category: Art Venture/Model Merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_CheckpointMerge node is designed to merge model checkpoints within the Art Venture framework. It abstracts the complex process of combining different model states into a unified checkpoint, facilitating the integration or experimentation of various model configurations in a simplified manner.

# Input types
## Required
- model1
    - The first model to be merged, which contributes to the creation of a new unified model checkpoint.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The second model to be merged, which combines with the first model to form the new unified model checkpoint.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model1_weight
    - The weight factor of the first model, influencing the degree of its contribution to the merged model checkpoint.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model2_weight
    - The weight factor of the second model, influencing the degree of its contribution to the merged model checkpoint.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The merged model checkpoint, containing elements from both input models.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: FreeU_V2
- Category: model_patches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FreeU_V2 node aims to enhance the functionality of a given model by applying a patch that modifies the model's output blocks. It does this by scaling and filtering the model's hidden states in a channel-sensitive manner, potentially improving the model's performance or output characteristics.

# Input types
## Required
- model
    - The model parameter is required as it represents the base model that the FreeU_V2 node will modify. The node's functionality revolves around altering the model's behavior, making this parameter crucial for node execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- b1
    - The b1 parameter is a scaling factor applied to certain hidden states in the model. It plays an important role in determining the extent of modification applied by the node, affecting the model's final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b2
    - The b2 parameter is another scaling factor applied to a different set of hidden states. It contributes to the overall modification process and is important for fine-tuning the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s1
    - The s1 parameter defines the scaling factor for the Fourier filtering process applied to the model's hidden states. It is important for controlling the frequency components retained in the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s2
    - The s2 parameter is another scaling factor used with the Fourier filtering process for a different subset of hidden states. It is important for adjusting the node's influence on the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output of the FreeU_V2 node is the modified model, now containing the applied patch. This modified model is expected to produce different outputs from the original model, possibly offering improved performance or features.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: FreeU
- Category: model_patches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FreeU node aims to modify the behavior of a given model by applying patches to its output blocks. It adjusts the scale and offset parameters of the model's intermediate representations, enhancing the model's performance on specific tasks.

# Input types
## Required
- model
    - The model parameter is critical because it defines the base model to which the FreeU node will apply its patches. This is the primary input for the node to operate and achieve the desired modifications.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- b1
    - The b1 parameter is a scaling factor that affects the first half of the model's channels. It plays a key role in the node's ability to adjust the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b2
    - The b2 parameter is another scaling factor that affects the second quarter of the model's channels. It helps fine-tune the model's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s1
    - The s1 parameter defines the offset applied to the first half of the model's channels after scaling. It is a core part of the node's functionality for modifying the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s2
    - The s2 parameter specifies the offset for the second quarter of the model's channels, further customizing the model's output to meet specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The modified_model output is the result of applying the FreeU node's patches to the input model. It represents the enhanced model with adjusted parameters.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

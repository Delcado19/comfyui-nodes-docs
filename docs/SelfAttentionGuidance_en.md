# Documentation
- Class name: SelfAttentionGuidance
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SelfAttentionGuidance class aims to enhance attention mechanisms in models by providing self-attention-based guidance. It modifies the model's attention process to incorporate additional context, potentially improving the model's ability to focus on relevant parts of the input data.

# Input types
## Required
- model
    - The model parameter is essential for the SelfAttentionGuidance node, as it represents the machine learning model that the node will modify and guide. The node's functionality is directly related to the model's architecture and capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scale
    - The scale parameter adjusts the influence of self-attention guidance on the model output. It is a key component that allows fine-tuning the point's impact on the model's attention process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur_sigma
    - The blur_sigma parameter defines the degree of blurring applied in the model's post-configuration function. It is important as it can affect the visual quality and detail preservation of the model output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The modified_model output is the result of applying the SelfAttentionGuidance patch to the input model. It represents the model with enhanced attention mechanisms, ready for further use or evaluation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

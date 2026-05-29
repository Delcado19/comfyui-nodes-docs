# Documentation
- Class name: VideoLinearCFGGuidance
- Category: sampling/video_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VideoLinearCFGGuidance node aims to provide a way to modify the guidance of the video model sampling process. It achieves this by patching the model using a linear configuration function that smoothly blends unconditional and conditional sampling according to a minimum configuration scale. This node enhances the model's ability to generate videos with varying levels of detail and control.

# Input types
## Required
- model
    - The model parameter is critical for the VideoLinearCFGGuidance node, as it represents the video model that will be patched. It is through this model that the node exerts its functionality, allowing customization of the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- min_cfg
    - The min_cfg parameter determines the minimum configuration scale of the linear guidance function within the VideoLinearCFGGuidance node. It is a key factor controlling the blend between unconditional and conditional sampling, thereby influencing the characteristics of the output video.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The output of the VideoLinearCFGGuidance node is a modified video model that incorporates the linear configuration function. This allows for a more nuanced approach to video generation, providing greater flexibility and control over the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

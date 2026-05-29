# Documentation
- Class name: VideoTriangleCFGGuidance
- Category: sampling/video_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VideoTriangleCFGGuidance node aims to enhance the controllability of video models by applying patches that introduce a configurable guidance function. It modifies the sampling process to mix conditional and unconditional outputs based on a linear configuration ratio, allowing fine-tuning of the generated video content.

# Input types
## Required
- model
    - The model parameter is crucial for the VideoTriangleCFGGuidance node, as it represents the video model that will be guided and modified. The node relies on this input to apply patches and adjust the sampling behavior accordingly.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- min_cfg
    - The min_cfg parameter determines the minimum proportion of guidance for mixing the conditional and unconditional outputs of the video model. It plays a key role in controlling the degree of guidance applied during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The modified_model output represents the video model updated with the new sampling guidance. It is important because it is the direct result of applying the patch through the VideoTriangleCFGGuidance node, enabling the generation of videos with adjusted content characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: WanUni3CControlnetApply
- Category: model/patch/wan
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Apply Wan Uni3C ControlNet is a ComfyUI node registered by `comfy_extras.nodes_model_patch`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model_patch
    - The model_patch input is used by this node during execution.
    - Comfy dtype: MODEL_PATCH
    - Python dtype: object
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- render_video
    - The guidance video rendered from the camera trajectory, most commonly warped point cloud renders of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

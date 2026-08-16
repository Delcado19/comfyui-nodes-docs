# Documentation
- Class name: SUPIRApply
- Category: model/patch/supir
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SUPIRApply is a ComfyUI node registered by `comfy_extras.nodes_model_patch`. The live metadata did not provide a longer description.

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
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength_start
    - Control strength at the start of sampling (high sigma).
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_end
    - Control strength at the end of sampling (low sigma). Linearly interpolated from start.
    - Comfy dtype: FLOAT
    - Python dtype: float
- restore_cfg
    - Pulls denoised output toward the input latent. Higher = stronger fidelity to input. 0 to disable.
    - Comfy dtype: FLOAT
    - Python dtype: float
- restore_cfg_s_tmin
    - Sigma threshold below which restore_cfg is disabled.
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

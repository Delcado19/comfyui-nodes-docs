# Documentation
- Class name: ApplyRifleXRoPE_WanVideo
- Category: KJNodes/wan
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Extends the potential frame count of HunyuanVideo using this method: https://github.com/thu-ml/RIFLEx

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent
    - Only used to get the latent count
    - Comfy dtype: LATENT
    - Python dtype: dict
- k
    - Index of intrinsic frequency
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

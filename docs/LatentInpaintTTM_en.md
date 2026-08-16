# Documentation
- Class name: LatentInpaintTTM
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

https://github.com/time-to-move/TTM

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- steps
    - Number of steps to apply TTM inpainting for.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - Latent mask where white (1.0) is the area to inpaint and black (0.0) is the area to keep unchanged.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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

# Documentation
- Class name: Super Pop Residual Blend (SuperBeasts.AI)
- Category: SuperBeastsAI/Image
- Output node: False
- Repo Ref: https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts

Interactively re-apply a residual predicted by **Super Pop Color Adjustment** at any arbitrary strength.

    Inputs
    ------
    image      : original image batch to adjust
    residual   : batch of residual tensors output from SuperPopColorAdjustment
    strength   : scalar multiplier (e.g. 0.0-2.0) applied to the residual

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- residual
    - The residual input is used by this node during execution.
    - Comfy dtype: SPCA_RESIDUAL
    - Python dtype: object
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - The filename_prefix output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

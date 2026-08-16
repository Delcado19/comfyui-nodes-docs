# Documentation
- Class name: ColorMatchToReference
- Category: video/enhancement
- Output node: False
- Repo Ref: https://github.com/zhihui6/zhihui_nodes_comfyui

Matches the color tone of input image to a reference image using LAB mean/std alignment

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_image
    - The reference_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- match_strength
    - The match_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/zhihui6/zhihui_nodes_comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

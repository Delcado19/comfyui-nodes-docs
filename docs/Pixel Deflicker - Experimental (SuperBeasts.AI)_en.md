# Documentation
- Class name: Pixel Deflicker - Experimental (SuperBeasts.AI)
- Category: SuperBeastsAI/Animation
- Output node: False
- Repo Ref: https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts

Experimental per-pixel temporal smoothing for animation. Operates in a sliding window to average noisy pixels while preserving detail, helping mitigate small-scale flicker.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- window_size
    - The window_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- blending_strength
    - The blending_strength input is used by this node during execution.
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
[View source repository](https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

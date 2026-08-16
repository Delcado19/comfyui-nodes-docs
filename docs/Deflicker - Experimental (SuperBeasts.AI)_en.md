# Documentation
- Class name: Deflicker - Experimental (SuperBeasts.AI)
- Category: SuperBeastsAI/Animation
- Output node: False
- Repo Ref: https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts

Experimental high-level deflicker pass for video/animation. Analyses brightness across neighbouring frames and blends, denoises and smooths gradients to reduce global flicker.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- context_length
    - The context_length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- brightness_threshold
    - The brightness_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blending_strength
    - The blending_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_reduction_strength
    - The noise_reduction_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gradient_smoothing_strength
    - The gradient_smoothing_strength input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
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

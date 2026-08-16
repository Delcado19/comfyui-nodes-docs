# Documentation
- Class name: ColorTransfer
- Category: image/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Match the colors of one image to another using various algorithms.

# Input types
## Required
- image_target
    - Image(s) to apply the color transform to.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_ref
    - Reference image(s) to match colors to.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- source_stats
    - per_frame: each frame matched to image_ref individually. uniform: pool stats across all source frames as baseline, match to image_ref. target_frame: use one chosen frame as the baseline for the transform to image_ref, applied uniformly to all frames (preserves relative differences)
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

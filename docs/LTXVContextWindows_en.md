# Documentation
- Class name: LTXVContextWindows
- Category: model/patch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Set context windows for LTXV-like models.

# Input types
## Required
- model
    - The model to apply context windows to during sampling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- context_length
    - The length of the context window in real frames. Must be 8*n + 1.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - The overlap of the context window in real frames.
    - Comfy dtype: INT
    - Python dtype: int
- context_schedule
    - Step-dependent scheduling algorithm for context windows.
    - Comfy dtype: COMBO
    - Python dtype: object
- context_stride
    - The stride of the context window; only applicable to uniform schedules.
    - Comfy dtype: INT
    - Python dtype: int
- closed_loop
    - Whether to close the context window loop; only applicable to looped schedules.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fuse_method
    - The method to use to fuse the context windows.
    - Comfy dtype: COMBO
    - Python dtype: object
- freenoise
    - Whether to apply FreeNoise noise shuffling, improves window blending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- retain_first_frame
    - Retain the first latent frame in every context window (may help retain initial reference).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- split_conds_to_windows
    - Whether to split multiple conditionings (created by ConditionCombine) to each window based on region index.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The model with context windows applied during sampling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

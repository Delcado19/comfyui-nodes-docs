# Documentation
- Class name: ContextWindowsManual
- Category: model/patch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Manually set context windows.

# Input types
## Required
- model
    - The model to apply context windows to during sampling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- context_length
    - The length of the context window.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - The overlap of the context window.
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
- dim
    - The dimension to apply the context windows to.
    - Comfy dtype: INT
    - Python dtype: int
- freenoise
    - Whether to apply FreeNoise noise shuffling, improves window blending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cond_retain_index_list
    - List of latent indices to retain in the conditioning tensors for each window. For concat-style I2V models (e.g. Wan I2V, HunyuanVideo I2V, Cosmos I2V, SVD) the encoded start image lives in the c_concat conditioning channels; setting this to '0' will retain that start image content at sub-pos 0 of every window.
    - Comfy dtype: STRING
    - Python dtype: str
- split_conds_to_windows
    - Whether to split multiple conditionings (created by ConditionCombine) to each window based on region index.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- latent_retain_index_list
    - List of latent indices to retain in the noise latent itself for each window. Use for workflows where reference content (e.g. a start image) lives directly in the noise latent rather than in separate conditioning channels (e.g. inplace-style I2V like LTXV, AnimateDiff). Independent of cond_retain_index_list.
    - Comfy dtype: STRING
    - Python dtype: str
- causal_window_fix
    - Whether to add a causal fix frame to non-0-indexed context windows.
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

# Documentation
- Class name: RIFE_VFI_Opt
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Interpolate a clip by a chosen multiple using RIFE 4.7/4.9 — inserts evenly spaced in-between frames between every pair (e.g., ×2 adds 1 frame per pair).

# Input types
## Required
- ckpt_name
    - Choose the RIFE 4.7 or 4.9 model file from the base pack.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- frames
    - Your input clip: one image per frame.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- multiplier
    - Adds extra frames to smooth motion: 2 adds 1 new frame per pair; 4 adds 3.
    - Comfy dtype: INT
    - Python dtype: int
- scale_factor
    - Quality vs speed. 1.0 recommended. Lower = faster/softer; higher = sharper/slower.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ensemble
    - Blend forward & backward predictions to reduce artifacts (slower).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clear_cache_after_n_frames
    - Free up GPU memory every N generated frames (advanced). Set 0 to never.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- optional_interpolation_states
    - Don’t create in-between frames for selected frame pairs (e.g., scene cuts). Timing stays the same.
    - Comfy dtype: INTERPOLATION_STATES
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

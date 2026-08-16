# Documentation
- Class name: RIFE_VFI_Advanced
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Custom timing for RIFE 4.7/4.9 — still “interpolate by multiple,” but you control where the in-betweens land (ease in/out, clamps, or your own t-list).

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
    - How many new frames to create between each pair. 0 = passthrough (no new frames).
    - Comfy dtype: INT
    - Python dtype: int
- t_mode
    - How to spread the new frames over time: straight line, ease in/out, limit the range, or provide your own list.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- t_gamma
    - Easing strength for gamma modes. Higher = more easing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- t_min
    - Earliest allowed position between the two frames (0 = exactly the first frame). Use with bounded_linear.
    - Comfy dtype: FLOAT
    - Python dtype: float
- t_max
    - Latest allowed position between the two frames (1 = exactly the next frame). Use with bounded_linear.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
- custom_t_list_csv
    - Exact positions between the two frames (0–1), comma-separated, e.g. 0.18,0.41,0.66. Overrides the schedule.
    - Comfy dtype: STRING
    - Python dtype: str
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
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

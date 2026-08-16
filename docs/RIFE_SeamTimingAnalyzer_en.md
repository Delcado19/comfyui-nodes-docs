# Documentation
- Class name: RIFE_SeamTimingAnalyzer
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Finds a smooth loop timing: measures motion in your clip and solves a set of t-values across the wrap [last→first] so the seam blends naturally.

# Input types
## Required
- ckpt_name
    - Choose the RIFE 4.7 or 4.9 model file (used only to test candidate timings).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale_factor
    - Quality vs speed for the probe renders. 1.0 recommended.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ensemble
    - Blend forward & backward predictions to reduce artifacts (slower).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- full_clip
    - Your input clip (≥2 frames). Real motion here decides the loop seam timing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- multiplier
    - How many new frames you plan to create at the loop seam [last→first]. Set 0 to skip.
    - Comfy dtype: INT
    - Python dtype: int
- use_first_two
    - Match the motion between the first two frames in your clip.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_last_two
    - Match the motion between the last two frames in your clip.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_global_median
    - Use the median motion across the whole clip (needs ≥3 frames). Helps ignore outliers.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- calibrate_metric
    - How we compare frames while solving: MSE (more sensitive) or L1 (more forgiving).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- calibrate_iters
    - Search depth per solve. Higher = slower, but a tighter match.
    - Comfy dtype: INT
    - Python dtype: int
- t_min
    - Earliest allowed blend point at the seam (0 = exactly the last frame).
    - Comfy dtype: FLOAT
    - Python dtype: float
- t_max
    - Latest allowed blend point at the seam (keep below 1.0 to avoid sticking to the first frame).
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- auto_tmax
    - Automatically push the upper limit closer to the next frame to hit the target motion step.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- t_cap
    - Safety cap used with the auto upper limit (keeps it just shy of 1.0).
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- t_list_csv
    - The t_list_csv output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- multiplier
    - The multiplier output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

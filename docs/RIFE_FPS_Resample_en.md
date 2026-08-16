# Documentation
- Class name: RIFE_FPS_Resample
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Convert a clip from one FPS to another using RIFE 4.7/4.9. Non-integer changes synthesize in-betweens; exact integer downscales just decimate. Includes optional stabilizers to reduce flicker and protect edges.

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
- fps_in
    - Current frame rate of your clip (frames per second).
    - Comfy dtype: FLOAT
    - Python dtype: float
- fps_out
    - Target frame rate you want (frames per second).
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
- linearize
    - Work in linear light for more accurate brightness and gradients (slower).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- lf_guardrail
    - Keep overall brightness and gradients close to the originals to reduce flicker.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- lf_sigma
    - How strong the low-frequency smoothing is. Higher = smoother changes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- source_pair_match
    - Match exposure and contrast to the source pair to reduce flicker.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- match_a_cap
    - Maximum change allowed for exposure scale.
    - Comfy dtype: FLOAT
    - Python dtype: float
- match_b_cap
    - Maximum change allowed for brightness offset.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_band_lock
    - Protect sharp edges: near edges, mix in more of the nearest real frame to avoid smearing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tau_low
    - Edge sensitivity: lower threshold (smaller finds more edges).
    - Comfy dtype: FLOAT
    - Python dtype: float
- tau_high
    - Edge sensitivity: higher threshold (larger finds only strong edges).
    - Comfy dtype: FLOAT
    - Python dtype: float
- band_radius
    - Width of the edge protection band (pixels).
    - Comfy dtype: INT
    - Python dtype: int
- band_soft_sigma
    - Soften the edge band. Higher = smoother.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clear_cache_after_n_frames
    - Free up GPU memory every N output frames (advanced). Set 0 to never.
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
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

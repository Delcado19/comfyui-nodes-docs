# Documentation
- Class name: HiDreamO1PatchSeamSmoothing
- Category: model/patch/hidream
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Average the model output across multiple shifted patch-grid positions during the late portion of sampling. Cancels seams.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- start_percent
    - Sampling progress (0=start, 1=end) at which the blend turns ON.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Sampling progress at which the blend turns OFF.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pattern
    - Shift layout. single_shift: one pass at the natural patch grid + others offset. symmetric: all passes off-grid, shifts split around origin.
    - Comfy dtype: COMBO
    - Python dtype: object
- passes
    - Number of passes per gated step. 2/4 = fixed. ramp_*: pass count increases as sampling approaches end (more smoothing where seams are most visible).
    - Comfy dtype: COMBO
    - Python dtype: object
- blend
    - average: equal-weight mean. window: Hann-windowed weighting favoring each pass away from its patch boundaries. median: per-pixel median, rejects wraparound-outlier passes.
    - Comfy dtype: COMBO
    - Python dtype: object
- strength
    - Interpolation between the natural-grid pred (0) and the averaged result (1).
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

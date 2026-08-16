# Documentation
- Class name: PixelHold
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Locks parts of each frame to a chosen reference (external image or a frame from the clip) whenever changes are small—useful for stabilizing flat areas or backgrounds while leaving motion to pass through.

# Input types
## Required
- frames
    - Your clip (frames×H×W×C, values 0–1).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ref_source
    - Pick the reference: an external image or a frame from this clip.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ref_index
    - If using a frame from this clip, which frame to use as the reference.
    - Comfy dtype: INT
    - Python dtype: int
- reference
    - Optional external reference (1×H×W×C). If sizes differ, it will be resized to match.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- linearize
    - Work in linear color for steadier results on flat areas.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- auto_luma
    - Auto sensitivity for brightness changes (adapts per frame).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- auto_k
    - Auto strength. Higher = lock more to the reference (2–3 is typical).
    - Comfy dtype: FLOAT
    - Python dtype: float
- tau_luma
    - Manual brightness threshold when Auto is OFF. Lower = stricter (more locking).
    - Comfy dtype: FLOAT
    - Python dtype: float
- tau_grad
    - How much edge change to allow. Lower protects edges more.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - Tile: fast & robust. Pixel: finer but noisier.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- tile_size
    - Tile size when using Tile mode.
    - Comfy dtype: INT
    - Python dtype: int
- score_mode
    - How tiles measure change: mean abs diff (fast) or median abs dev (robust).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- edge_band
    - Protect a belt around strong edges to avoid wobble/stretch.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- band_radius
    - Width of the protected belt (pixels).
    - Comfy dtype: INT
    - Python dtype: int
- tau_edge_low
    - Treat as low-motion below this level (edge belt).
    - Comfy dtype: FLOAT
    - Python dtype: float
- tau_edge_high
    - Treat as high-motion above this level (edge belt).
    - Comfy dtype: FLOAT
    - Python dtype: float
- apply
    - Hold the whole image (All) or only its smooth part (Low-freq).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dilate
    - Expand the mask (pixels).
    - Comfy dtype: INT
    - Python dtype: int
- feather_sigma
    - Soften mask edges (pixels).
    - Comfy dtype: FLOAT
    - Python dtype: float
- process_on
    - Choose CPU/GPU. Auto switches to GPU on very large frames.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- gpu_clear_every
    - If >0 and using GPU, free memory every N frames.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_preview
    - The mask_preview output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

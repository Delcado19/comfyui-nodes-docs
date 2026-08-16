# Documentation
- Class name: ContextWindowsVisualizerKJ
- Category: KJNodes/misc
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Interactive visualization of ComfyUI context windows: window placement, overlap, fuse weights and per-frame blending, updated live. Optionally applies the settings to a model like the core Context Windows (Manual) node.

# Input types
## Required
- frame_units
    - Units for the frame counts below. 'pixel' converts to latent via ((n - 1) // temporal_downscale) + 1.
    - Comfy dtype: COMBO
    - Python dtype: object
- dim
    - Latent temporal dimension: 2 for WAN-like, 0 for AnimateDiff-style. Model path only.
    - Comfy dtype: INT
    - Python dtype: int
- temporal_downscale
    - VAE temporal compression for pixel->latent. WAN/Hunyuan/CogVideoX=4, Mochi=6, LTXV=8.
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - Total frames to visualize. Ignored on the model path (the real latent length is used).
    - Comfy dtype: INT
    - Python dtype: int
- context_length
    - Window length.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - Overlap between windows.
    - Comfy dtype: INT
    - Python dtype: int
- context_schedule
    - Window placement. standard_static_balanced: static with windows spread evenly (uniform seams, any frame count). batched_shifted: zero-overlap windows whose seams roll each step (~1.0x compute, pairs with freenoise). Uniform schedules also shift per step.
    - Comfy dtype: COMBO
    - Python dtype: object
- context_stride
    - Max stride power for uniform schedules (adds dilated windows: 1, 2, 4...).
    - Comfy dtype: INT
    - Python dtype: int
- closed_loop
    - Wrap looped-schedule windows around the end back to frame 0.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fuse_method
    - How overlapping windows are blended.
    - Comfy dtype: COMBO
    - Python dtype: object
- causal_window_fix
    - Prepend an anchor frame to non-0 windows, stripped after the model call.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- freenoise
    - FreeNoise noise shuffling for smoother blending. Model path only.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cond_retain_index_list
    - Comma-separated window-relative indices that keep their original conditioning, e.g. '0' reuses the start frame's cond per window. No viz effect; model path only.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- model
    - Optional model to apply the context windows to during sampling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Output types
- model
    - Model with context windows applied; only valid when a model is connected.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

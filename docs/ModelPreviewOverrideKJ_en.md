# Documentation
- Class name: ModelPreviewOverrideKJ
- Category: KJNodes/sampling
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Adds a dedicated live-preview frame on this node, with overridable max resolution. Default ComfyUI preview caps at 512px; this node sends its own preview straight to a DOM widget on the node so pixel-space models (Chroma Radiance, ZImage, HiDream-O1, …) can be previewed at full sampler resolution.

# Input types
## Required
- model
    - Model to attach the preview override to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- max_resolution
    - Max preview side in pixels for the live widget. 0 = full sampler resolution (no downscale).
    - Comfy dtype: INT
    - Python dtype: int
- jpeg_quality
    - JPEG quality for the live preview transport.
    - Comfy dtype: INT
    - Python dtype: int
- suppress_default_preview
    - Suppress the standard sampler-node preview overlay while sampling, so only this node's frame updates. Progress bar still advances normally.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- preview_frames
    - Frames to sample from each video step's latent for animated preview. 1 = single frame (current behavior, fastest). >1 = animated WebP playing back at preview_fps. Only applies to video models (5D latents); ignored for image models.
    - Comfy dtype: INT
    - Python dtype: int
- preview_fps
    - Playback FPS for the animated WebP preview. Ignored when preview_frames=1.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- vae
    - Optional LTX VAE for true-RGB previews. TAEHV-LTX = fast tiny decode (VAE pinned to GPU). Any other LTX VAE = full-quality decode via vae.decode() — MUCH slower per step.
    - Comfy dtype: VAE
    - Python dtype: object
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- MODEL
    - Model with preview override attached.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

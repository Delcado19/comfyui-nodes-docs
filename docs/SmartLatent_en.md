# Documentation
- Class name: SmartLatent
- Category: itsjustregi / SDXL Adherence
- Output node: False
- Repo Ref: https://github.com/regiellis/ComfyUI-SDXL-Adherence

ComfyUI nodes that improve SDXL prompt adherence and any-size/tiled VAE workflows.

# Input types
## Required
- vae
    - VAE model used to create or encode latents.
    - Comfy dtype: VAE
    - Python dtype: object
- mode
    - Create an empty latent or encode an input image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- width
    - Requested width; may downscale by 64s to respect max_pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Requested height; may downscale by 64s to respect max_pixels.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- resolution
    - Quick presets; selecting one overrides width/height (empty mode).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- snap_mode
    - Snap policy for non-64 dims: pad, downscale, resize, or crop.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pad_kind
    - Padding type for pad_up/downscale (reflect avoids seams). 'edge' behaves like 'replicate'.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pad_value
    - Pad value (constant mode only).
    - Comfy dtype: INT
    - Python dtype: int
- batch
    - Batch size for empty latent or image batch.
    - Comfy dtype: INT
    - Python dtype: int
- image
    - Image tensor when mode = encode_image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tile_size
    - Tile size for VAE.encode_tiled if available.
    - Comfy dtype: INT
    - Python dtype: int
- tile_overlap
    - Tile overlap for tiled VAE encode/decode.
    - Comfy dtype: INT
    - Python dtype: int
- force_bchw
    - Ensure image is [B,C,H,W] before encoding.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_tiled
    - Use tiled VAE encode/decode when available.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Reserved for future use.
    - Comfy dtype: INT
    - Python dtype: int
- max_pixels
    - Upper bound on W*H; uniformly downscale to fit if exceeded.
    - Comfy dtype: INT
    - Python dtype: int
- max_long_side
    - Optional VRAM guard: if >0, downscale input image so max(H,W) <= this before snapping.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- dims_json
    - The dims_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_json
    - The bbox_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/regiellis/ComfyUI-SDXL-Adherence)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

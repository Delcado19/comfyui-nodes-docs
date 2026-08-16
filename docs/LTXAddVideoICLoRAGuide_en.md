# Documentation
- Class name: LTXAddVideoICLoRAGuide
- Category: Lightricks/IC-LoRA
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Adds one or more conditioning frames starting at the specified frame index. Supports both single images and multi-frame videos. The latent_downscale_factor resizes input to a fraction of the target size (1 = original, 2 = half, 3 = third, etc.) for IC-LoRA on small grids.

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- latent
    - Video-only latent to condition. Must be a 5D video latent (batch, channels, frames, height, width).
    - Comfy dtype: LATENT
    - Python dtype: dict
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frame_idx
    - Frame index to start the conditioning at. For single-frame videos, any frame_idx value is acceptable. For videos, frame_idx must be 1 modulo 8, otherwise it will be rounded down to the nearest 1 modulo 8. Negative values are counted from the end of the video.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_downscale_factor
    - For IC-LoRA on small grid. 1 means original size, 2 means half size, 3 means third, etc.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - Crop mode when resizing. 'center' crops to fit, 'disabled' stretches to fit.
    - Comfy dtype: COMBO
    - Python dtype: object
- use_tiled_encode
    - Enable tiled VAE encoding for large resolutions/long videos to reduce memory usage.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tile_size
    - Spatial tile size for tiled encoding. Only used when use_tiled_encode is enabled.
    - Comfy dtype: INT
    - Python dtype: int
- tile_overlap
    - Overlap between tiles for tiled encoding. Only used when use_tiled_encode is enabled.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

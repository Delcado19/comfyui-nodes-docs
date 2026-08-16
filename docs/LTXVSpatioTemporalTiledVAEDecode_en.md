# Documentation
- Class name: LTXVSpatioTemporalTiledVAEDecode
- Category: latent
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Spatio Temporal Tiled VAE Decode is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- vae
    - The VAE to use.
    - Comfy dtype: VAE
    - Python dtype: object
- latents
    - The latent samples to decode.
    - Comfy dtype: LATENT
    - Python dtype: dict
- spatial_tiles
    - The number of spatial tiles to use, horizontal and vertical.
    - Comfy dtype: INT
    - Python dtype: int
- spatial_overlap
    - The overlap between the spatial tiles. (in latent frames)
    - Comfy dtype: INT
    - Python dtype: int
- temporal_tile_length
    - The length of the temporal tile to use for the sampling, in latent frames, including the overlapping region.
    - Comfy dtype: INT
    - Python dtype: int
- temporal_overlap
    - The overlap between the temporal tiles, in latent frames.
    - Comfy dtype: INT
    - Python dtype: int
- last_frame_fix
    - If true, the last frame will be repeated and discarded after the decoding.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- working_device
    - The device to use for the decoding. auto->same as the latents.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- working_dtype
    - The data type to use for the decoding. auto->same as the latents.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: ClownStyle_Boost
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownStyle_Boost is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- noise_mode
    - The noise_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- recon_lure
    - Only used if noise_mode = recon. Can increase the strength of the style.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- datashock
    - Will drastically increase the strength at low denoise levels. Use with img2img workflows.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- datashock_weight
    - Set the strength of the guide by multiplying all other weights by this value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- datashock_start_step
    - Start step for data shock.
    - Comfy dtype: INT
    - Python dtype: int
- datashock_end_step
    - End step for data shock.
    - Comfy dtype: INT
    - Python dtype: int
- tile_h
    - Tile size for tiled modes. Lower values will transfer composition more effectively. Dimensions of image must be divisible by this value.
    - Comfy dtype: INT
    - Python dtype: int
- tile_w
    - Tile size for tiled modes. Lower values will transfer composition more effectively. Dimensions of image must be divisible by this value.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- guides
    - The guides input is used by this node during execution.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Output types
- guides
    - The guides output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

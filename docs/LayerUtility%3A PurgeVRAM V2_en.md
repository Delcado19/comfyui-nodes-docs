# Documentation
- Class name: LayerUtility: PurgeVRAM V2
- Display name: LayerUtility: Purge VRAM V2
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Purges GPU VRAM by optionally clearing the cache and unloading models, then passes the input data through unchanged.

# Input types
## Required
- anything
    - Arbitrary input data that is forwarded to the output without modification.
    - Comfy dtype: *
- purge_cache
    - When true, clears the GPU cache to free VRAM.
    - Comfy dtype: BOOLEAN
    - Default: `true`
- purge_models
    - When true, unloads loaded models from VRAM.
    - Comfy dtype: BOOLEAN
    - Default: `true`

# Output types
- any
    - The same data received on the anything input, passed through unchanged.
    - Comfy dtype: *

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

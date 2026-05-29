# Documentation
- Class name: PurgeVRAM
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Clear GPU memory. Can accept any type of input. When this node is executed, it will clean up garbage objects in VRAM and RAM. Usually placed after nodes that complete inference tasks, such as VAE Decode node.

# Input types

## Required

- anything
    - Any input.
    - Comfy dtype: any
    - Python dtype: any

- purge_cache
    - Clear cache.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- purge_models
    - Clear model.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional

- None

# Output types

- None

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: LTXPrepareAttnInjections
- Category: fluxtapoz
- Output node: False
- Repo Ref: https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte

Custom nodes for LTX-Video support in ComfyUI - registry fix - forked by Mattabyte

# Input types
## Required
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- attn_bank
    - The attn_bank input is used by this node during execution.
    - Comfy dtype: ATTN_BANK
    - Python dtype: object
- query
    - The query input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- key
    - The key input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- value
    - The value input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- inject_steps
    - The inject_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- blocks
    - The blocks input is used by this node during execution.
    - Comfy dtype: LTX_BLOCKS
    - Python dtype: object

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- ATTN_INJ
    - The ATTN_INJ output is produced by this node.
    - Comfy dtype: ATTN_INJ
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

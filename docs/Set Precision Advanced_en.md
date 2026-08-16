# Documentation
- Class name: Set Precision Advanced
- Category: RES4LYF/precision
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Set Precision Advanced is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- global_precision
    - The global_precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- shark_precision
    - The shark_precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- passthrough
    - The passthrough output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_cast_to_global
    - The latent_cast_to_global output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_16
    - The latent_16 output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_32
    - The latent_32 output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_64
    - The latent_64 output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

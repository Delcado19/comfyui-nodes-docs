# Documentation
- Class name: Set Precision Universal
- Category: RES4LYF/precision
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Set Precision Universal is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- precision
    - The precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- set_default
    - The set_default input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- cond_pos
    - The cond_pos input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- cond_neg
    - The cond_neg input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- cond_pos
    - The cond_pos output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- cond_neg
    - The cond_neg output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- sigmas
    - The sigmas output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- latent_image
    - The latent_image output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

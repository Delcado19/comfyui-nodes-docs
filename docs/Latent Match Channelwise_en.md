# Documentation
- Class name: Latent Match Channelwise
- Category: RES4LYF/latents
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Latent Match Channelwise is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent_target
    - The latent_target input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_source
    - The latent_source input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- mask_target
    - The mask_target input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_source
    - The mask_source input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- extra_options
    - The extra_options input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- latent_matched
    - The latent_matched output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

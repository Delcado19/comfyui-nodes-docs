# Documentation
- Class name: PrepForUnsampling
- Category: RES4LYF/vae
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

PrepForUnsampling is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- resize_to_input
    - The resize_to_input input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mask_channel
    - The mask_channel input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- latent_type
    - The latent_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object

# Output types
- latent_1
    - The latent_1 output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_2
    - The latent_2 output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- empty_latent
    - The empty_latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

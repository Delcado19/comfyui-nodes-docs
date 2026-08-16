# Documentation
- Class name: VOIDInpaintConditioning
- Category: model/conditioning/void
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

VOIDInpaintConditioning is a ComfyUI node registered by `comfy_extras.nodes_void`. The live metadata did not provide a longer description.

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
- video
    - Source video frames [T, H, W, 3]
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- quadmask
    - Preprocessed quadmask from VOIDQuadmaskPreprocess [T, H, W]
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - Number of pixel frames to process. For CogVideoX-Fun-V1.5 (patch_size_t=2), latent_t must be even — lengths that produce odd latent_t are rounded down (e.g. 49 → 45).
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
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
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

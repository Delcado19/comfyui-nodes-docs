
# Documentation
- Class name: PreviewLatentXL
- Category: latent
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PreviewLatentXL node is specifically used to preview latent representations generated with the SDXL base model. It automatically determines the optimal preview method and incorporates additional information (such as prompts and unique identifiers), enhancing visualization of the latent space.

# Input types
## Required
- latent
    - The latent representation to be visualized. This is the core input for generating the preview.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Output types
- latent
    - The modified latent representation, which may have been adjusted during preview generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

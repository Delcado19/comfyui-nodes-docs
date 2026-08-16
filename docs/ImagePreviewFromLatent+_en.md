# Documentation
- Class name: ImagePreviewFromLatent+
- Category: essentials/image utils
- Output node: True
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Saves the input images to your ComfyUI output directory.

# Input types
## Required
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- tile_size
    - The tile_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
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
[View source repository](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

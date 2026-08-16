# Documentation
- Class name: LTXVTiledVAEDecode
- Category: latent
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Tiled VAE Decode is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- latents
    - The latents input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- horizontal_tiles
    - The horizontal_tiles input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- vertical_tiles
    - The vertical_tiles input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - The overlap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- last_frame_fix
    - The last_frame_fix input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- working_device
    - The working_device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- working_dtype
    - The working_dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

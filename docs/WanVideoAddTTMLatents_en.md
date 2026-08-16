# Documentation
- Class name: WanVideoAddTTMLatents
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

https://github.com/time-to-move/TTM

# Input types
## Required
- embeds
    - The embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- reference_latents
    - Latents used as reference for TTM
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - Mask used for TTM
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- start_step
    - Start step for whole denoising process
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - The step to stop applying TTM
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

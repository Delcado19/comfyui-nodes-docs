# Documentation
- Class name: LTXVSeparateAVLatent
- Category: model/latent/ltxv
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Split a joint AV latent into its video and audio latents (any AV model, e.g. LTXV or MiniMax H3).

# Input types
## Required
- av_latent
    - The av_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- video_latent
    - The video_latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio_latent
    - The audio_latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: WanSoundImageToVideoExtend
- Category: model/conditioning/wan/sound
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanSoundImageToVideoExtend is a ComfyUI node registered by `comfy_extras.nodes_wan`. The live metadata did not provide a longer description.

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
- length
    - The length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- video_latent
    - The video_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- audio_encoder_output
    - The audio_encoder_output input is used by this node during execution.
    - Comfy dtype: AUDIO_ENCODER_OUTPUT
    - Python dtype: object
- ref_image
    - The ref_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- control_video
    - The control_video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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

# Documentation
- Class name: WanDancerVideo
- Category: model/conditioning/wan/dancer
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanDancerVideo is a ComfyUI node registered by `comfy_extras.nodes_wandancer`. The live metadata did not provide a longer description.

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
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - The number of frames in the generated video. Should stay 149 for WanDancer.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- clip_vision_output
    - The CLIP vision embeds for the first frame.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- clip_vision_output_ref
    - The CLIP vision embeds for the reference image.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- start_image
    - The initial image(s) to be encoded, can be any number of frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Image conditioning mask for the start image(s). White is kept, black is generated. Used for the local generations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- audio_encoder_output
    - The audio_encoder_output input is used by this node during execution.
    - Comfy dtype: AUDIO_ENCODER_OUTPUT
    - Python dtype: object

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
    - Empty latent.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

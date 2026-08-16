# Documentation
- Class name: BerniniConditioning
- Category: model/conditioning/bernini
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Conditioning node for Bernini in-context video/image conditioning. It can be used for the following tasks: t2v (text-to-video), v2v (video-to-video), rv2v (reference-guided video editing), r2v (reference-to-video), ads2v (insert image/video into video).Reference images injected as in-context tokens (r2v, rv2v) are encoded independently at their own native aspect ratio (long edge capped at ref_max_size)

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
    - The length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- source_video
    - Source video to edit or restyle (v2v, rv2v). Resized to width/height and trimmed to length.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_video
    - Video to insert into the source video (ads2v).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_images
    - The reference_images input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- ref_max_size
    - Max size for the long edge of reference_video and reference_images. Resized with preserved aspect ratio and snapped to 16px.
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

# Documentation
- Class name: HunyuanVideo15SuperResolution
- Category: model/conditioning/hunyuan video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Hunyuan Video 1.5 Super Resolution is a ComfyUI node registered by `comfy_extras.nodes_hunyuan`. The live metadata did not provide a longer description.

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
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- noise_augmentation
    - The noise_augmentation input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- start_image
    - The start_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- clip_vision_output
    - The clip_vision_output input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
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
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

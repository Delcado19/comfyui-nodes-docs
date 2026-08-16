# Documentation
- Class name: TripoSplatConditioning
- Category: model/conditioning/triposplat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encode the image with DINOv3 and the Flux2 VAE into TripoSplat positive/negative conditioning, and create the fixed size noise target (latent + camera) for the KSampler

# Input types
## Required
- clip_vision
    - DINOv3 ViT-H/16+ image encoder
    - Comfy dtype: CLIP_VISION
    - Python dtype: object
- vae
    - Flux2 VAE
    - Comfy dtype: VAE
    - Python dtype: object
- image
    - The image input is used by this node during execution.
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
    - The fixed size noise target (latent +camera).
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

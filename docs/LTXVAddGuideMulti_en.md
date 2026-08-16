# Documentation
- Class name: LTXVAddGuideMulti
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Add multiple guide images at specified frame indices with strengths, uses DynamicCombo which requires ComfyUI 0.8.1 and frontend 1.33.4 or later.

# Input types
## Required
- positive
    - Positive conditioning to which guide keyframe info will be added
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - Negative conditioning to which guide keyframe info will be added
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- vae
    - Video VAE used to encode the guide images
    - Comfy dtype: VAE
    - Python dtype: object
- latent
    - Video latent, guides are added to the end of this latent
    - Comfy dtype: LATENT
    - Python dtype: dict
- num_guides
    - Select how many guide images to use
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
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
    - Video latent with added guides
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

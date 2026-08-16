# Documentation
- Class name: TextEncodeMageFlowEdit
- Category: model/conditioning/mage
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encode an edit instruction with one or more reference images for Mage-Flow-Edit. Reference latents are resized to the output resolution (width/height, or the first image's size when 0). Use the latent output for sampling so the sizes always match.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- images
    - Reference image(s) to edit. All references are resized to the output resolution before encoding.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- width
    - Output width. 0 = use the first reference image's size.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Output height. 0 = use the first reference image's size.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
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

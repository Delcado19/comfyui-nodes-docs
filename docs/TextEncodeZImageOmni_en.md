# Documentation
- Class name: TextEncodeZImageOmni
- Category: model/conditioning/z-image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

TextEncodeZImageOmni is a ComfyUI node registered by `comfy_extras.nodes_zimage`. The live metadata did not provide a longer description.

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
- auto_resize_images
    - The auto_resize_images input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image_encoder
    - The image_encoder input is used by this node during execution.
    - Comfy dtype: CLIP_VISION
    - Python dtype: object
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- image1
    - The image1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The image2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - The image3 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

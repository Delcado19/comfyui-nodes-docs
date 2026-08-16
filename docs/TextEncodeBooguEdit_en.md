# Documentation
- Class name: TextEncodeBooguEdit
- Category: model/conditioning/boogu
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

TextEncodeBooguEdit is a ComfyUI node registered by `comfy_extras.nodes_boogu`. The live metadata did not provide a longer description.

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
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- images
    - Reference image(s) to edit. Boogu focuses on one reference per sample; more are allowed.
    - Comfy dtype: COMFY_AUTOGROW_V3
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

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

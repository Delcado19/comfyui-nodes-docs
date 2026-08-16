# Documentation
- Class name: ReplaceVideoLatentFrames
- Category: model/latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Replace Video Latent Frames is a ComfyUI node registered by `comfy_extras.nodes_latent`. The live metadata did not provide a longer description.

# Input types
## Required
- destination
    - The destination latent where frames will be replaced.
    - Comfy dtype: LATENT
    - Python dtype: dict
- index
    - The starting latent frame index in the destination latent where the source latent frames will be placed. Negative values count from the end.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- source
    - The source latent providing frames to insert into the destination latent. If not provided, the destination latent is returned unchanged.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

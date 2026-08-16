# Documentation
- Class name: EmptyMiniMaxH3LatentAV
- Category: model/latent/minimax
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Joint video+audio latent for MiniMax H3. Duration snaps to the model's 17k+5 frame grid at 24 fps.

# Input types
## Required
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - Frame count at 24 fps, snapped up to the model's 17k+5 grid (124 = ~5s; trained range is ~124-362, longer is untested)
    - Comfy dtype: INT
    - Python dtype: int

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

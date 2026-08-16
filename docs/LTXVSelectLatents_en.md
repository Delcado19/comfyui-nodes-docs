# Documentation
- Class name: LTXVSelectLatents
- Category: latent/video
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Selects a range of frames from the video latent. start_index and end_index define a closed interval (inclusive of both endpoints).

# Input types
## Required
- samples
    - The samples input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- start_index
    - The start_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_index
    - The end_index input is used by this node during execution.
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
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: WanMove_native
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- track_coords
    - JSON string or list of JSON strings representing the tracks
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- track_mask
    - The track_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- tracks
    - The tracks output is produced by this node.
    - Comfy dtype: TRACKS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

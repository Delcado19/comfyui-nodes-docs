# Documentation
- Class name: WanVideoAddWanMoveTracks
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- image_embeds
    - The image_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- strength
    - Strength of the reference embedding
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- track_mask
    - The track_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- track_coords
    - JSON string or list of JSON strings representing the tracks
    - Comfy dtype: STRING
    - Python dtype: str
- tracks
    - Alternatively use Comfy Tracks dictionary
    - Comfy dtype: TRACKS
    - Python dtype: object

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- tracks
    - The tracks output is produced by this node.
    - Comfy dtype: TRACKS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

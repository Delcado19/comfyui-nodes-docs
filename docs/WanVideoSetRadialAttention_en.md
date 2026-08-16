# Documentation
- Class name: WanVideoSetRadialAttention
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Sets radial attention parameters, dense attention refers to normal attention

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object
- dense_attention_mode
    - The attention mode for dense attention
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dense_blocks
    - Number of blocks to apply normal attention to
    - Comfy dtype: INT
    - Python dtype: int
- dense_vace_blocks
    - Number of vace blocks to apply normal attention to
    - Comfy dtype: INT
    - Python dtype: int
- dense_timesteps
    - The step to start applying sparse attention
    - Comfy dtype: INT
    - Python dtype: int
- decay_factor
    - Controls how quickly the attention window shrinks as the distance between frames increases in the sparse attention mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- block_size
    - Radial attention block size, larger blocks are faster but restricts usable dimensions more.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

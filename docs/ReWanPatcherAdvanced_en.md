# Documentation
- Class name: ReWanPatcherAdvanced
- Category: RES4LYF/model_patches
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ReWanPatcherAdvanced is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- self_attn_blocks
    - The self_attn_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- cross_attn_blocks
    - The cross_attn_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- enable
    - The enable input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sliding_window_self_attn
    - The sliding_window_self_attn input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sliding_window_frames
    - How many real frames each frame sees. Divide frames by 4 to get real frames.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

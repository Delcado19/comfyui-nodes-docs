# Documentation
- Class name: ClownpileModelWanVideo
- Category: RES4LYF/model
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownpileModelWanVideo is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- backend
    - The backend input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fullgraph
    - Enable full graph mode
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dynamic
    - Enable dynamic mode
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- dynamo_cache_size_limit
    - torch._dynamo.config.cache_size_limit
    - Comfy dtype: INT
    - Python dtype: int
- skip_self_attn_blocks
    - For WAN only: select self-attn blocks to disable. Due to the size of the self-attn masks, VRAM required to compile blocks using regional WAN is excessive. List any blocks selected in the ReWanPatcher node.
    - Comfy dtype: STRING
    - Python dtype: str
- compile_transformer_blocks
    - Compile all transformer blocks
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- force_recompile
    - Force recompile.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

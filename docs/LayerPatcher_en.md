# Documentation
- Class name: LayerPatcher
- Category: RES4LYF/patchers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

LayerPatcher is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- embedder
    - The embedder input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- gates
    - The gates input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- last_layer
    - The last_layer input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dtype
    - The dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

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

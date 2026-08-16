# Documentation
- Class name: TorchCompileModelFluxAdv
- Category: RES4LYF/model_patches
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

TorchCompileModelFluxAdv is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

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
- double_blocks
    - The double_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- single_blocks
    - The single_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- dynamic
    - Enable dynamic mode
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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

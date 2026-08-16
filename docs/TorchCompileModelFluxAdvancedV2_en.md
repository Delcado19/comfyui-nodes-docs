# Documentation
- Class name: TorchCompileModelFluxAdvancedV2
- Category: KJNodes/torchcompile
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Deprecated, use TorchCompileModelAdvanced instead.

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
    - Compile double blocks
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- single_blocks
    - Compile single blocks
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- dynamic
    - Enable dynamic mode
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- dynamo_cache_size_limit
    - torch._dynamo.config.cache_size_limit
    - Comfy dtype: INT
    - Python dtype: int
- force_parameter_static_shapes
    - torch._dynamo.config.force_parameter_static_shapes
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
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

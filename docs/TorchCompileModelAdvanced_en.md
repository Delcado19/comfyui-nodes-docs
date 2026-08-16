# Documentation
- Class name: TorchCompileModelAdvanced
- Category: KJNodes/torchcompile
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Advanced torch.compile patching for diffusion models.

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
    - Use dynamic shape tracing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- compile_transformer_blocks_only
    - Compile only transformer blocks, faster compile and less error prone
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- dynamo_cache_size_limit
    - torch._dynamo.config.cache_size_limit
    - Comfy dtype: INT
    - Python dtype: int
- debug_compile_keys
    - Print the compile keys used for torch.compile
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- disable_dynamic_vram
    - Disable dynamic VRAM feature as it can cause issues with compile
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

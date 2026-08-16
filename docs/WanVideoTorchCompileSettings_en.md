# Documentation
- Class name: WanVideoTorchCompileSettings
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

torch.compile settings, when connected to the model loader, torch.compile of the selected layers is attempted. Requires Triton and torch > 2.7.0 is recommended

# Input types
## Required
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
- compile_transformer_blocks_only
    - Compile only the transformer blocks, usually enough and can make compilation faster and less error prone
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- dynamo_recompile_limit
    - torch._dynamo.config.recompile_limit
    - Comfy dtype: INT
    - Python dtype: int
- force_parameter_static_shapes
    - torch._dynamo.config.force_parameter_static_shapes
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_unmerged_lora_compile
    - Allow LoRA application to be compiled with torch.compile to avoid graph breaks, causes issues with some LoRAs, mostly dynamic ones
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- torch_compile_args
    - The torch_compile_args output is produced by this node.
    - Comfy dtype: WANCOMPILEARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

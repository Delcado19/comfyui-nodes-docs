# Documentation
- Class name: PatchFlashAttentionKJ
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Experimental node for patching attention to use flash attention, without the silent SDPA fallback the ComfyUI default does. Patches the attention of the model passing through this node; to disable, bypass or disconnect this node. Requires the flash_attn library to be installed.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- allow_compile
    - Allow torch.compile to trace into the flash attention function. If disabled (default), the function is wrapped with torch.compiler.disable() for compatibility, matching the sage attention node.
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

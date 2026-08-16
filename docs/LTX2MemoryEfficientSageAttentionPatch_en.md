# Documentation
- Class name: LTX2MemoryEfficientSageAttentionPatch
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

EXPERIMENTAL! Activates custom sageattention to reduce peak VRAM usage, overrides the attention mode. Requires latest sageattention version.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- triton_kernels
    - Use Triton fused RoPE kernel on the self-attention Q/K. Requires Triton.
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
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

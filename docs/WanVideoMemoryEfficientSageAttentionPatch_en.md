# Documentation
- Class name: WanVideoMemoryEfficientSageAttentionPatch
- Category: KJNodes/wan
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

EXPERIMENTAL! Activates custom sageattention on the WanVideo self-attention to reduce peak VRAM usage, overrides the attention mode. Requires latest sageattention version.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

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

# Documentation
- Class name: ModelSamplingZImage
- Category: 🎈LAOGOU/Sampling Utils
- Output node: False
- Repo Ref: https://github.com/LAOGOU-666/ComfyUI-LG_SamplingUtils

调整 ZImage/Lumina2 模型的采样参数。可设置 shift 和 multiplier。

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- shift
    - 噪声调度偏移量。ZImage 默认 3.0。shift=1.0 为线性，>1.0 向高噪声偏移
    - Comfy dtype: FLOAT
    - Python dtype: float
- multiplier
    - Timestep 乘数。ZImage/AuraFlow=1.0，SD3/Flux=1000
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/LAOGOU-666/ComfyUI-LG_SamplingUtils)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

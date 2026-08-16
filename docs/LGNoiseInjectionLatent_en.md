# Documentation
- Class name: LGNoiseInjectionLatent
- Category: advanced/model
- Output node: False
- Repo Ref: https://github.com/LAOGOU-666/ComfyUI-LG_SamplingUtils

直接输入 latent 进行特征注入，自动使用 latent 的 noise_mask 作为遮罩。

# Input types
## Required
- model
    - 模型
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- reference_latent
    - 参考 latent（含有你想要注入的特征）
    - Comfy dtype: LATENT
    - Python dtype: dict
- strength
    - 注入强度。0.1-0.2 轻微，0.2-0.4 明显
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - 开始注入的采样进度
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - 结束注入的采样进度
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

# Documentation
- Class name: LGNoiseInjection
- Category: advanced/model
- Output node: False
- Repo Ref: https://github.com/LAOGOU-666/ComfyUI-LG_SamplingUtils

将参考图像的特征（如水珠、纹理等）注入到生成结果中。

# Input types
## Required
- model
    - 模型
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - VAE 编码器
    - Comfy dtype: VAE
    - Python dtype: object
- reference_image
    - 参考图像（含有你想要注入的特征）
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
## Optional
- mask
    - 遮罩，白色区域会被注入特征
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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

# Documentation
- Class name: ZImageTimestepNoise
- Category: 🎈LAOGOU/Sampling Utils
- Output node: False
- Repo Ref: https://github.com/LAOGOU-666/ComfyUI-LG_SamplingUtils

对 timestep 添加噪声扰动，改变模型对去噪步骤的感知。sigma 模式适用于传统扩散模型，flow 模式适用于 Flow Matching 模型（如 ZImage/Lumina2）。可选遮罩限制影响区域。

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- mode
    - sigma: 传统扩散模型（乘性噪声）; flow: Flow Matching 模型（加性噪声）
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noise_strength
    - 噪声强度
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - 噪声种子
    - Comfy dtype: INT
    - Python dtype: int
- start_percent
    - 开始应用噪声的采样进度 (0.0 = 开始)
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - 停止应用噪声的采样进度 (1.0 = 结束)
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask
    - The mask input is used by this node during execution.
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

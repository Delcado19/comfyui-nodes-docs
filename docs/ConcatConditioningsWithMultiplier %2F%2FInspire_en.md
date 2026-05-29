# Documentation
- Class name: ConcatConditioningsWithMultiplier
- Category: InspirePack/__for_testing
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

ConcatConditioningsWithMultiplier节点旨在通过将条件输入乘以指定因子来增强它们，允许在复杂工作流中调整条件强度。

# Input types
## Required
- conditioning1
    - 主要的条件输入是至关重要的，因为它构成了节点内部后续乘法和连接操作的基础。
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
## Optional
- multiplier1
    - 乘数参数对于调整条件输入的强度至关重要，使得节点的输出可以进行微调。
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - 输出代表增强后的条件数据，它是原始输入与各自乘以因子的附加条件的组合。
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

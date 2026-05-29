
# Documentation
- Class name: SaltMaskNoiseAddition
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SaltMaskNoiseAddition节点专门设计用于向蒙版区域引入噪声，模拟真实场景中可能出现的变化和不完美之处。它允许通过诸如均值和标准差等参数来自定义噪声特征，从而实现广泛的噪声效果。

# Input types
## Required
- masks
    - masks输入是一组将被添加噪声的蒙版区域。这个参数对于定义噪声效果将应用的区域至关重要，直接影响节点的执行和噪声添加的视觉效果。
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- mean
    - mean参数指定了噪声分布的平均值。调整这个值可以控制所添加噪声的整体亮度或暗度，从而影响蒙版的视觉表现。
    - Comfy dtype: FLOAT
    - Python dtype: float
- stddev
    - stddev参数决定了噪声分布的标准差。这影响了添加到蒙版中的噪声的变化程度和强度，使得可以微调噪声效果以达到预期的结果。
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - 输出的MASKS包含了添加了噪声的原始蒙版区域，反映了指定的均值和标准差参数。这组修改后的蒙版可用于进一步处理或可视化。
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SEGSPreview
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSPreview节点旨在处理和预览分割图像。它接受分割数据和可选参数来控制alpha混合和最小alpha值，然后生成一个视觉表示分割的预览图像。该节点能够处理一批分割数据，并且在分割数据不可用时可以回退到默认图像。

# Input types
## Required
- segs
    - ‘segs’参数对于节点至关重要，因为它提供了节点将处理的分割数据。此输入直接影响预览图像的生成方式及其质量。
    - Comfy dtype: SEGS
    - Python dtype: List[Tuple[int, np.ndarray]]
## Optional
- alpha_mode
    - ‘alpha_mode’参数决定预览中是否启用alpha混合。它在处理最终输出中分割遮罩的透明度方面起着重要作用。
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- min_alpha
    - ‘min_alpha’参数设置遮罩的最小alpha值，确保即使在遮罩置信度低的区域，分割也是可见的。这对于预览中分割的视觉清晰度至关重要。
    - Comfy dtype: FLOAT
    - Python dtype: float
- fallback_image_opt
    - ‘fallback_image_opt’参数提供了一个可选图像，当分割数据不可用时使用。它确保了即使在这种情况下，节点仍然可以生成预览。
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- ui
    - ‘ui’输出包含预览的用户界面元素，包括已处理并准备显示的图像列表。
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, str]]}
- result
    - ‘result’输出是代表分割预览的组合图像批次的列表。它很重要，因为它包含了分割的实际视觉数据。
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: Tuple[List[torch.Tensor],]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

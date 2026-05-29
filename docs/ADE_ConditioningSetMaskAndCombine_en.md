# Set Props and Combine Cond 🎭🅐🅓
## Documentation
- Class name: ADE_ConditioningSetMaskAndCombine
- Category: Animate Diff 🎭🅐🅓/conditioning/single cond ops
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

此节点专门用于生成模型的高级条件数据操作，特别关注掩码和附加条件层的应用和组合。它通过应用掩码、强度调整和整合新的条件数据来增强或修改现有条件，从而允许对生成过程进行更精确的控制。

## Input types
### Required
- cond
    要增强或修改的原始条件数据。它作为应用附加条件层和掩码的基础，直接影响最终输出。
    - Comfy dtype: CONDITIONING
    - Python dtype: CustomType[CONDITIONING]
- cond_ADD
    要与原始条件结合的附加条件数据。此层应用于现有条件之上，允许引入新特性或修改。
    - Comfy dtype: CONDITIONING
    - Python dtype: CustomType[CONDITIONING]
- strength
    一个标量值，确定掩码应用于条件的强度。它控制附加条件和掩码对原始数据的影响程度。
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    指定在条件数据中进行修改的区域，而不提及特定类型。
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

### Optional
- opt_mask
    一个可选的LoraHookGroup，可以应用于进一步操作条件数据。它提供了修改条件的额外灵活性。
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- opt_lora_hook
    用于条件操作的可选时间步。此参数允许在生成过程中的特定点应用修改。
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- opt_timesteps
    应用附加条件层、掩码和调整后的增强或修改的条件数据。
    - Comfy dtype: TIMESTEPS_COND
    - Python dtype: TimestepsCond

## Output types
- conditioning
    - Comfy dtype: CONDITIONING
    应用附加条件层、掩码和调整后的增强或修改的条件数据。
    - Python dtype: CustomType[CONDITIONING]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

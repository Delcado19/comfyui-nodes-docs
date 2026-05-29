# Set Props on Cond 🎭🅐🅓
## Documentation
- Class name: ADE_ConditioningSetMask
- Category: Animate Diff 🎭🅐🅓/conditioning/single cond ops
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to apply a mask to conditional data, adjusting the area and intensity of the condition based on specified parameters. It enables dynamic modification of conditional inputs to better align with desired outcomes, such as focusing on or excluding specific regions in the data.

## Input types
### Required
- cond_ADD
    - The conditional data to be added or modified. This parameter is crucial for introducing new context or content within an existing conditional framework.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tensor
- strength
    - Defines the intensity of the mask's effect on conditional data, allowing for fine-grained control over the modification impact.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - Determines whether the mask effect is applied to the default area or the mask's boundary, providing flexibility for localized adjustments.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

### Optional
- opt_mask
    - An optional mask specifying the region of conditional data to be modified, offering additional control over the condition's influence.
    - Comfy dtype: MASK
    - Python dtype: Tensor
- opt_lora_hook
    - An optional parameter allowing Lora hooks to be applied to the condition, further customizing the conditioning process.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- opt_timesteps
    - Optional time-step conditions enabling temporal adjustments to the conditional data.
    - Comfy dtype: TIMESTEPS_COND
    - Python dtype: TimestepsCond

## Output types
- conditioning
    - Comfy dtype: CONDITIONING
    - The modified conditional data reflecting the applied mask and adjustments, including any additional conditional data introduced.
    - Python dtype: Tensor

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

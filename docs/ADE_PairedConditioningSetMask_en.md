# Set Props on Conds 🎭🅐🅓
## Documentation
- Class name: ADE_PairedConditioningSetMask
- Category: Animate Diff 🎭🅐🅓/conditioning
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_PairedConditioningSetMask node is designed to apply masks and conditioning adjustments to a pair of conditioning inputs. It utilizes additional parameters such as intensity, setting conditioning area, and optional elements like masks, Lora hooks, and timestep conditions to fine-tune the conditioning process, aiming to enhance or modify the attributes of generated content according to specified adjustments.

## Input types
### Required
- positive_ADD
    - Specifies the positive conditioning input to be adjusted. It plays a key role in defining the attributes or characteristics to be enhanced or modified in the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING
- negative_ADD
    - Specifies the negative conditioning input to be adjusted. It is crucial for defining the attributes or characteristics to be weakened or changed in a way opposite to the positive conditioning.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING
- strength
    - Determines the intensity of the conditioning adjustment. Higher values indicate a stronger effect on the conditioning input.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - Defines the conditioning input area to be affected by the adjustment. It allows targeted modifications to the conditioning input.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: COND_CONST._LIST_COND_AREA

### Optional
- opt_mask
    - An optional mask that can be applied to the conditioning input for more precise adjustments.
    - Comfy dtype: MASK
    - Python dtype: Tensor
- opt_lora_hook
    - An optional Lora hook that can be applied for additional conditioning transformations.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup
- opt_timesteps
    - Optional timestep conditions, allowing temporal adjustments to the conditioning input.
    - Comfy dtype: TIMESTEPS_COND
    - Python dtype: TimestepsCond

## Output types
- positive
    - Comfy dtype: CONDITIONING
    - The positive conditioning output after applying the specified adjustments.
    - Python dtype: CONDITIONING
- negative
    - Comfy dtype: CONDITIONING
    - The negative conditioning output after applying the specified adjustments.
    - Python dtype: CONDITIONING

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

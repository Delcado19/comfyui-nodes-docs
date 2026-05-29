# Set Unmasked Cond 🎭🅐🅓
## Documentation
- Class name: ADE_ConditioningSetUnmaskedAndCombine
- Category: Animate Diff 🎭🅐🅓/conditioning/single cond ops
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is specifically designed for advanced conditional data operations on models, with a particular focus on unmasking and combining different sets of conditional inputs. It enhances or modifies the generation process by applying complex conditional transformations.

## Input types
### Required
- cond
    - The primary conditional input serving as the basis for transformation. It plays a crucial role in determining the initial state or context of the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- cond_DEFAULT
    - An additional conditional input intended to be combined with the primary conditional input. This input typically represents default or supplementary information that modifies or enhances the base condition.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

### Optional
- opt_lora_hook
    - An optional parameter that allows applying a Lora hook to the conditional input, providing further customization and control mechanisms for the conditioning process.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup

## Output types
- conditioning
    - Comfy dtype: CONDITIONING
    - The result of combining and unmasking the provided conditional inputs, representing a modified or enhanced conditional state for use with the generation model.
    - Python dtype: list

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Set Unmasked Conds 🎭🅐🅓
## Documentation
- Class name: ADE_PairedConditioningSetUnmaskedAndCombine
- Category: Animate Diff 🎭🅐🅓/conditioning
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node aims to process and combine paired conditional inputs, applying unmasking and optional LoRA hook transformations. It focuses on integrating default or baseline conditions with current conditions, preparing them for further processing or generation tasks, thereby enhancing flexibility and control over the conditioning process.

## Input types
### Required
- positive
    - The current positive conditioning input to be combined with its default counterpart.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- negative
    - The current negative conditioning input to be combined with its default counterpart.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- positive_DEFAULT
    - The default positive conditioning input to be combined with the current positive condition.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- negative_DEFAULT
    - The default negative conditioning input to be combined with the current negative condition.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]

### Optional
- opt_lora_hook
    - An optional LoRA hook for transforming the conditioning inputs before combining them.
    - Comfy dtype: LORA_HOOK
    - Python dtype: Optional[LoraHookGroup]

## Output types
- positive
    - Comfy dtype: CONDITIONING
    - The combined positive condition output after integrating current and default inputs.
    - Python dtype: Dict[str, Any]
- negative
    - Comfy dtype: CONDITIONING
    - The combined negative condition output after integrating current and default inputs.
    - Python dtype: Dict[str, Any]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

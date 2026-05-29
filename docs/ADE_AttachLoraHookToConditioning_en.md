# Set Model LoRA Hook 🎭🅐🅓
## Documentation
- Class name: ADE_AttachLoraHookToConditioning
- Category: Animate Diff 🎭🅐🅓/conditioning/single cond ops
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node aims to attach LoRA hooks to condition data, thereby dynamically modifying model behavior according to the specified LoRA hooks. It plays a key role in customization and control within the conditioning process of generative models, especially in the context of animation and differential rendering.

## Input types
### Required
- conditioning
    - The condition data to which LoRA hooks are attached. This data determines the behavior and output of the model, and attaching LoRA hooks allows for dynamic adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- lora_hook
    - The LoRA hook to be attached to the condition data. This hook makes it possible to modify model parameters at runtime, thereby enhancing control and customization of the generation process.
    - Comfy dtype: LORA_HOOK
    - Python dtype: LoraHookGroup

## Output types
- conditioning
    - Comfy dtype: CONDITIONING
    - The modified condition data with LoRA hooks attached, allowing dynamic adjustments to model behavior.
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

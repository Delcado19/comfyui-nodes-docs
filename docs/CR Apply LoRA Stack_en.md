# Documentation
- Class name: CR_ApplyLoRAStack
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ApplyLoRAStack node applies a series of LoRA (Low-Rank Adaptation) modifications to a model and its associated clip. It enhances the model's capability by stacking multiple LoRA adjustments, allowing fine‑tuning of specific features without significantly increasing model size or compute load.

# Input types
## Required
- model
- Model parameter is critical because it is the primary target of LoRA modifications. It forms the basis of LoRA stack operations, and each layer in the stack may alter its behavior.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- Clip parameter is essential because it provides contextual information that complements the model, can be used with the LoRA stack, and influences the final output.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
## Optional
- lora_stack
- lora_stack parameter is a collection of LoRA configurations that determines how the model and clip are adjusted. Each element in the stack contributes to the overall transformation.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Output types
- MODEL
- Output model represents the modified version of the input model after applying the LoRA stack. It contains the enhancements made by LoRA adjustments.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
- Output clip is the modified version of the input clip, adjusted together with the model to reflect the impact of the LoRA stack.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- show_help
- show_help output provides a URL link to documentation for further assistance and understanding of the LoRA stack application process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

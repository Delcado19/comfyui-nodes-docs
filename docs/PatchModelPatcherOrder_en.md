# Documentation
- Class name: PatchModelPatcherOrder
- Category: KJNodes/deprecated
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

NO LONGER NECESSARY OR FUNCTIONAL, keeping node for backwards compatibility. Use the TorchCompileModelAdvanced to use LoRA with torch.compile.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- patch_order
    - Patch the comfy patch_model function to load weight patches (LoRAs) before compiling the model
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- full_load
    - Disabling may help with memory issues when loading large models, when changing this you should probably force model reload to avoid issues!
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: UnetLoaderGGUFAdvanced
- Category: bootleg
- Output node: False
- Repo Ref: https://github.com/city96/ComfyUI-GGUF

GGUF Quantization support for native ComfyUI models.

# Input types
## Required
- unet_name
    - The unet_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dequant_dtype
    - The dequant_dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch_dtype
    - The patch_dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch_on_device
    - The patch_on_device input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/city96/ComfyUI-GGUF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

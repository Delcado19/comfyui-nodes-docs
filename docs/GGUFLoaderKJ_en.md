# Documentation
- Class name: GGUFLoaderKJ
- Category: KJNodes/model_loaders
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Loads a GGUF model with advanced options, requires [ComfyUI-GGUF](https://github.com/city96/ComfyUI-GGUF) to be installed.

# Input types
## Required
- model_name
    - The model_name input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- extra_model_name
    - An extra gguf model to load and merge into the main model, for example VACE module
    - Comfy dtype: COMBO
    - Python dtype: object
- dequant_dtype
    - The dequant_dtype input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- patch_dtype
    - The patch_dtype input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- patch_on_device
    - The patch_on_device input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- enable_fp16_accumulation
    - Enable torch.backends.cuda.matmul.allow_fp16_accumulation, required minimum pytorch version 2.7.1
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- attention_override
    - Overrides the used attention implementation, requires the respective library to be installed
    - Comfy dtype: COMBO
    - Python dtype: object

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

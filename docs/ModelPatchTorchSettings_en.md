# Documentation
- Class name: ModelPatchTorchSettings
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Adds callbacks to model to set torch settings before and after running the model.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- enable_fp16_accumulation
    - Enable torch.backends.cuda.matmul.allow_fp16_accumulation, requires pytorch 2.7.0 nightly.
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
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

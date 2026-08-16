# Documentation
- Class name: Lora Loader (LoraManager)
- Category: Lora Manager/loaders
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Revolutionize your workflow with the ultimate LoRA companion for ComfyUI!

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- text
    - Format: <lora:lora_name:strength> separated by spaces or punctuation
    - Comfy dtype: AUTOCOMPLETE_TEXT_LORAS
    - Python dtype: object

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output is produced by this node.
    - Comfy dtype: CLIP
    - Python dtype: object
- trigger_words
    - The trigger_words output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- loaded_loras
    - The loaded_loras output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

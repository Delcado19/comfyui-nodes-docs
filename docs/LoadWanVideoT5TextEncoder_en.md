# Documentation
- Class name: LoadWanVideoT5TextEncoder
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Loads Wan text_encoder model from 'ComfyUI/models/LLM'

# Input types
## Required
- model_name
    - These models are loaded from 'ComfyUI/models/text_encoders'
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- precision
    - The precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- load_device
    - The load_device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quantization
    - optional quantization method
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- wan_t5_model
    - The wan_t5_model output is produced by this node.
    - Comfy dtype: WANTEXTENCODER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: WhisperModelLoader
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - These models are loaded from the 'ComfyUI/models/audio_encoders' folder
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- base_precision
    - The base_precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- load_device
    - Initial device to load the model to, NOT recommended with the larger models unless you have 48GB+ VRAM
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- whisper_model
    - The whisper_model output is produced by this node.
    - Comfy dtype: WHISPERMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

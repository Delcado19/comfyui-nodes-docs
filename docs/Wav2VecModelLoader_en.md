# Documentation
- Class name: Wav2VecModelLoader
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - These models are loaded from the 'ComfyUI/models/wav2vec2' -folder
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
- wav2vec_model
    - The wav2vec_model output is produced by this node.
    - Comfy dtype: WAV2VECMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

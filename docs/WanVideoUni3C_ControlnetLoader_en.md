# Documentation
- Class name: WanVideoUni3C_ControlnetLoader
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - These models are loaded from the 'ComfyUI/models/controlnet' -folder
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- base_precision
    - The base_precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quantization
    - optional quantization method
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- load_device
    - Initial device to load the model to, NOT recommended with the larger models unless you have 48GB+ VRAM
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- attention_mode
    - The attention_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- compile_args
    - The compile_args input is used by this node during execution.
    - Comfy dtype: WANCOMPILEARGS
    - Python dtype: object

# Output types
- controlnet
    - The controlnet output is produced by this node.
    - Comfy dtype: WANVIDEOCONTROLNET
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

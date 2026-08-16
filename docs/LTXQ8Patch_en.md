# Documentation
- Class name: LTXQ8Patch
- Category: lightricks/LTXV
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXQ8Patch is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- use_fp8_attention
    - Use FP8 attention.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quantization_preset
    - The quantization_preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quantize_self_attn
    - Quantize Self Attention Layer
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quantize_cross_attn
    - Quantize Cross Attention Layer
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quantize_ffn
    - Quantize Feed Forward Layer
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
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: easy pulIDApplyADV
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- pulid_file
    - The pulid_file input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- insightface
    - The insightface input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - The weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- projection
    - The projection input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fidelity
    - The fidelity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- noise
    - The noise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - The start_at input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- attn_mask
    - The attn_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

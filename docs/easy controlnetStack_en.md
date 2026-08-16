# Documentation
- Class name: easy controlnetStack
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- toggle
    - The toggle input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- num_controlnet
    - The num_controlnet input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- optional_controlnet_stack
    - The optional_controlnet_stack input is used by this node during execution.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: object
- controlnet_1
    - The controlnet_1 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- controlnet_1_strength
    - The controlnet_1_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent_1
    - The start_percent_1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent_1
    - The end_percent_1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_soft_weight_1
    - The scale_soft_weight_1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- controlnet_2
    - The controlnet_2 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- controlnet_2_strength
    - The controlnet_2_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent_2
    - The start_percent_2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent_2
    - The end_percent_2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_soft_weight_2
    - The scale_soft_weight_2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- controlnet_3
    - The controlnet_3 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- controlnet_3_strength
    - The controlnet_3_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent_3
    - The start_percent_3 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent_3
    - The end_percent_3 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_soft_weight_3
    - The scale_soft_weight_3 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_3
    - The image_3 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- controlnet_stack
    - The controlnet_stack output is produced by this node.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

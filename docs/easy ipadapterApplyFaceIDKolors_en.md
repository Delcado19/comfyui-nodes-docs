# Documentation
- Class name: easy ipadapterApplyFaceIDKolors
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
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- preset
    - The preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_strength
    - The lora_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- provider
    - The provider input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight
    - The weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_faceidv2
    - The weight_faceidv2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_kolors
    - The weight_kolors input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- combine_embeds
    - The combine_embeds input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_at
    - The start_at input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cache_mode
    - The cache_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_tiled
    - The use_tiled input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_batch
    - The use_batch input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sharpening
    - The sharpening input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- image_negative
    - The image_negative input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- attn_mask
    - The attn_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- clip_vision
    - The clip_vision input is used by this node during execution.
    - Comfy dtype: CLIP_VISION
    - Python dtype: object
- optional_ipadapter
    - The optional_ipadapter input is used by this node during execution.
    - Comfy dtype: IPADAPTER
    - Python dtype: object

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- ipadapter
    - The ipadapter output is produced by this node.
    - Comfy dtype: IPADAPTER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

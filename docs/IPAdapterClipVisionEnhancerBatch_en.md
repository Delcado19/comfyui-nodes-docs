# Documentation
- Class name: IPAdapterClipVisionEnhancerBatch
- Category: ipadapter/dev
- Output node: False
- Repo Ref: https://github.com/pamparamm/ComfyUI_IPAdapter_plus

Updated version of IPAdapter Plus.
ComfyUI reference implementation for the IPAdapter models. The IPAdapter are very powerful models for image conditioning. The style and composition of a reference can be easily transferred to the generation. Think of it as a 1-image lora.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter input is used by this node during execution.
    - Comfy dtype: IPADAPTER
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - The weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight_type input is used by this node during execution.
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
- enhance_tiles
    - The enhance_tiles input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- enhance_ratio
    - The enhance_ratio input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- encode_batch_size
    - The encode_batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
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

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/pamparamm/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

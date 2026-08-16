# Documentation
- Class name: WanVideoUni3C_embeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- controlnet
    - The controlnet input is used by this node during execution.
    - Comfy dtype: WANVIDEOCONTROLNET
    - Python dtype: object
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start percent of the steps to apply the controlnet
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percent of the steps to apply the controlnet
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- render_latent
    - The render_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- render_mask
    - NOT IMPLEMENTED!
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- offload
    - If enabled, the controlnet model will be offloaded before main model block processing to save VRAM.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- uni3c_embeds
    - The uni3c_embeds output is produced by this node.
    - Comfy dtype: UNI3C_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

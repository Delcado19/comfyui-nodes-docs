# Documentation
- Class name: WanVideoApplyNAG
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Adds NAG prompt embeds to original prompt embeds: 'https://github.com/ChenDarYen/Normalized-Attention-Guidance'

# Input types
## Required
- original_text_embeds
    - The original_text_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- nag_text_embeds
    - The nag_text_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- nag_scale
    - The nag_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_tau
    - The nag_tau input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_alpha
    - The nag_alpha input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- inplace
    - If true, modifies tensors in place to save memory. Leads to different numerical results which may change the output slightly.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_embeds
    - The text_embeds output is produced by this node.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

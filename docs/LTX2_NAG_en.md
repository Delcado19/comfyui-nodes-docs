# Documentation
- Class name: LTX2_NAG
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

https://github.com/ChenDarYen/Normalized-Attention-Guidance

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- nag_scale
    - Strength of negative guidance effect
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_alpha
    - Mixing coefficient in that controls the balance between the normalized guided representation and the original positive representation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nag_tau
    - Clipping threshold that controls how much the guided attention can deviate from the positive attention.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- nag_cond_video
    - The nag_cond_video input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- nag_cond_audio
    - The nag_cond_audio input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- inplace
    - If true, modifies tensors in place to save memory. Leads to different numerical results which may change the output slightly.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

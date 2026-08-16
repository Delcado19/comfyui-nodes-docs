# Documentation
- Class name: LTX2AttentionTunerPatch
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

EXPERIMENTAL! Custom LTX2 forward pass with attention scaling factors per modality, also reduces peak VRAM usage.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- blocks
    - Comma separated list of transformer block indices to apply the patch to. Leave empty to apply to all blocks.
    - Comfy dtype: STRING
    - Python dtype: str
- video_scale
    - Scaling factor for video attention.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_scale
    - Scaling factor for audio attention.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_to_video_scale
    - Scaling factor for video attention.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_to_audio_scale
    - Scaling factor for audio attention.
    - Comfy dtype: FLOAT
    - Python dtype: float
- triton_kernels
    - Use Triton fused kernels for norm+scale+shift and rope application operations, can be very slightly faster.
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

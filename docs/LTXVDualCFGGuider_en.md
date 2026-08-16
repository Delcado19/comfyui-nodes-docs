# Documentation
- Class name: LTXVDualCFGGuider
- Category: model/sampling/guiders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Separate CFG scales for the video and audio modalities of a packed LTXV-AV latent.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- video_cfg
    - The video_cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_cfg
    - The audio_cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- GUIDER
    - The GUIDER output is produced by this node.
    - Comfy dtype: GUIDER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

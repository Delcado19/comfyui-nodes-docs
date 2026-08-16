# Documentation
- Class name: LTXVDurationPredictor
- Category: conditioning/video_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Predicts the natural shot duration for a prompt using the LTX 2.4 duration head (loaded with ModelPatchLoader), and snaps it to the VAE's 8k+1 frame grid.

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
- duration_head
    - LTX 2.4 duration head loaded with ModelPatchLoader.
    - Comfy dtype: MODEL_PATCH
    - Python dtype: object
- frame_rate
    - The frame_rate input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_seconds
    - The min_seconds input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_seconds
    - The max_seconds input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- num_frames
    - The num_frames output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- seconds
    - Raw (unclamped) predicted duration.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

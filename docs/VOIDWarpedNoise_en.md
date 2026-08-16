# Documentation
- Class name: VOIDWarpedNoise
- Category: model/latent/void
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

VOIDWarpedNoise is a ComfyUI node registered by `comfy_extras.nodes_void`. The live metadata did not provide a longer description.

# Input types
## Required
- optical_flow
    - Optical flow model from OpticalFlowLoader (RAFT-large).
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: object
- video
    - Pass 1 output video frames [T, H, W, 3]
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - Number of pixel frames. Rounded down to make latent_t even (patch_size_t=2 requirement), e.g. 49 → 45.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- warped_noise
    - The warped_noise output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

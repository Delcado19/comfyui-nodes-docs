# Documentation
- Class name: LTXVSetVideoLatentNoiseMasks
- Category: latent/video
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Applies multiple masks to a video latent. masks can be 2D, 3D, or 4D tensors. If there are fewer masks than frames, the last mask will be reused.

# Input types
## Required
- samples
    - The samples input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- masks
    - The masks input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

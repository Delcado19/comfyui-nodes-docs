# Documentation
- Class name: DrawArcFaceLandmarks
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Draw face landmarks on an image for visualization/debugging

# Input types
## Required
- lynx_face_embeds
    - lynx resampler model
    - Comfy dtype: LYNXIP
    - Python dtype: object
- image
    - Input images for the model
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- landmarked_image
    - The landmarked_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

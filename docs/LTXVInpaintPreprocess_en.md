# Documentation
- Class name: LTXVInpaintPreprocess
- Category: Lightricks/image_processing
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Composites images with a green background where mask is active, for inpainting conditioning.

# Input types
## Required
- images
    - Video frames to composite onto the green background.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask indicating regions to replace with green. Single-frame masks are broadcast.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: iToolsLoadImagePlus
- Category: iTools
- Output node: False
- Repo Ref: https://github.com/MohammadAboulEla/ComfyUI-iTools

An enhancement of the original ComfyUI ImageLoader node. It attempts to return the possible prompt used to create an image.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- possible prompt
    - The possible prompt output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- image name
    - The image name output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/MohammadAboulEla/ComfyUI-iTools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

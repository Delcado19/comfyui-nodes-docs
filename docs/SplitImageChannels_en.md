# Documentation
- Class name: SplitImageChannels
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Splits image channels into images where the selected channel  
is repeated for all channels, and the alpha as a mask.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- red
    - The red output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- green
    - The green output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blue
    - The blue output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: ImageBatchFilter
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Removes empty images from a batch

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- empty_color
    - The empty_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- empty_threshold
    - The empty_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- replacement_image
    - The replacement_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- removed_indices
    - The removed_indices output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

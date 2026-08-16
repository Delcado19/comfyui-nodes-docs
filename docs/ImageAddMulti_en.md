# Documentation
- Class name: ImageAddMulti
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Add blends multiple images together.    
You can set how many inputs the node has,  
with the **inputcount** and clicking update.

# Input types
## Required
- inputcount
    - The inputcount input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blending
    - The blending input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- blend_amount
    - The blend_amount input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

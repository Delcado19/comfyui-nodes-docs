# Documentation
- Class name: ImagePrepForICLora
- Category: image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- reference_image
    - The reference_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_width
    - The output_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- output_height
    - The output_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- border_width
    - The border_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent_mask
    - The latent_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- reference_mask
    - The reference_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

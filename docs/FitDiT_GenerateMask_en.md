# Documentation
- Class name: FitDiT_GenerateMask
- Category: FitDiT
- Output node: False
- Repo Ref: https://github.com/ihmily/ComfyUI-FitDiTx

FitDiT Generate Mask is a ComfyUI node registered by `custom_nodes.ComfyUI-FitDiTx`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: FITDIT_MODEL
    - Python dtype: object
- model_image
    - The model_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- category
    - The category input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- offset_top
    - The offset_top input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- offset_bottom
    - The offset_bottom input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- offset_left
    - The offset_left input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- offset_right
    - The offset_right input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- masked_image
    - The masked_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- pose_image
    - The pose_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ihmily/ComfyUI-FitDiTx)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

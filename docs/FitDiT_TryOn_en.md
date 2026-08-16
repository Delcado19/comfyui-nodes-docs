# Documentation
- Class name: FitDiT_TryOn
- Category: FitDiT
- Output node: False
- Repo Ref: https://github.com/ihmily/ComfyUI-FitDiTx

FitDiT Virtual Try-on is a ComfyUI node registered by `custom_nodes.ComfyUI-FitDiTx`. The live metadata did not provide a longer description.

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
- garment_image
    - The garment_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- pose_image
    - The pose_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- guidance_scale
    - The guidance_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- num_images
    - The num_images input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ihmily/ComfyUI-FitDiTx)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

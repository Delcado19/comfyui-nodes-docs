# Documentation
- Class name: AILab_ImageMaskToList
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- resize_mode
    - The resize_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_1
    - The mask_1 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_2
    - The mask_2 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image_3
    - The image_3 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_3
    - The mask_3 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image_4
    - The image_4 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_4
    - The mask_4 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image_5
    - The image_5 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_5
    - The mask_5 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image_6
    - The image_6 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_6
    - The mask_6 input is used by this node during execution.
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
- WIDTH
    - The WIDTH output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - The HEIGHT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- BATCH_SIZE
    - The BATCH_SIZE output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

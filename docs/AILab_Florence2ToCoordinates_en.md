# Documentation
- Class name: AILab_Florence2ToCoordinates
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- data
    - Florence2 JSON output (list per image).
    - Comfy dtype: JSON
    - Python dtype: object
- index
    - Comma-separated indexes; blank = use all boxes from first item.
    - Comfy dtype: STRING
    - Python dtype: str
- batch
    - If true, gather boxes across the batch.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- CENTER_COORDINATES
    - The CENTER_COORDINATES output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- BBOXES
    - The BBOXES output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

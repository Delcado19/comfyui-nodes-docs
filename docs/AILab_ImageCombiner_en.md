# Documentation
- Class name: AILab_ImageCombiner
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- foreground
    - The foreground input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- background
    - The background input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- foreground_opacity
    - The foreground_opacity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- foreground_scale
    - The foreground_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- position_x
    - The position_x input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- position_y
    - The position_y input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- foreground_mask
    - The foreground_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- WIDTH
    - The WIDTH output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - The HEIGHT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: AILab_SDMatte
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - SDMatte model variant: Standard or Plus version
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device
    - Auto: smart detection, CPU: force CPU, GPU: force GPU
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- process_res
    - Processing resolution: higher = better quality but slower
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - Mask: White=foreground, Black=background. If omitted and image has alpha, alpha will be used.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- transparent_object
    - Whether input image contains transparent objects
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_refine
    - Enable mask refinement using mask constraints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sensitivity
    - Sensitivity for mask constraint (0.1-1.0): higher = more strict
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_blur
    - Blur mask edges (0 = disabled)
    - Comfy dtype: INT
    - Python dtype: int
- mask_offset
    - Expand/shrink mask (positive = expand)
    - Comfy dtype: INT
    - Python dtype: int
- invert_output
    - Invert the mask output
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- background
    - Background type for output
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- background_color
    - Background color (when not Alpha)
    - Comfy dtype: COLORCODE
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- MASK_IMAGE
    - The MASK_IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

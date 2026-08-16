# Documentation
- Class name: AILab_MaskOverlay
- Category: 🧪AILab/🖼️IMAGE
- Output node: True
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- mask_opacity
    - Control mask opacity (0.0-1.0)
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_color
    - Color for the mask overlay
    - Comfy dtype: COLORCODE
    - Python dtype: object
## Optional
- image
    - Input image (RGBA will be converted to RGB)
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Input mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
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

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

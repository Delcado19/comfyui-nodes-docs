# Documentation
- Class name: AILab_ReferenceLatentMask
- Category: 🧪AILab/🎭Inpaint
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- conditioning
    - Base conditioning input for inpainting task
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - Encoded latent from VAE
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - Area to inpaint (white regions)
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- expand
    - Grow mask (+) or shrink mask (-)
    - Comfy dtype: INT
    - Python dtype: int
- blur
    - Soften mask edges
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_only
    - Only generate content in masked area
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

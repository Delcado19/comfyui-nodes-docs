# Documentation
- Class name: BiRefNetRMBG
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- image
    - Input image to be processed for background removal.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - Select the BiRefNet model variant to use.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- mask_blur
    - Specify the amount of blur to apply to the mask edges (0 for no blur, higher values for more blur).
    - Comfy dtype: INT
    - Python dtype: int
- mask_offset
    - Adjust the mask boundary (positive values expand the mask, negative values shrink it).
    - Comfy dtype: INT
    - Python dtype: int
- invert_output
    - Enable to invert both the image and mask output (useful for certain effects).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- refine_foreground
    - Use Fast Foreground Colour Estimation to optimize transparent background
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- background
    - Choose background type: Alpha (transparent) or Color (custom background color).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- background_color
    - Choose background color (Alpha = transparent)
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

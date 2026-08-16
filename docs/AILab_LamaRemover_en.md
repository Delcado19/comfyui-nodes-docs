# Documentation
- Class name: AILab_LamaRemover
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- images
    - Input images to be processed
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - Masks defining areas to be removed (white=remove)
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- removal_strength
    - Strength of the removal effect (higher values increase the effect area)
    - Comfy dtype: INT
    - Python dtype: int
- edge_smoothness
    - Controls edge smoothness (higher values create smoother transitions)
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: AILab_ImageCompare
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- text1
    - The text1 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The text2 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text3
    - The text3 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- size_base
    - The size_base input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text_color
    - The text_color input is used by this node during execution.
    - Comfy dtype: COLORCODE
    - Python dtype: object
- bg_color
    - The bg_color input is used by this node during execution.
    - Comfy dtype: COLORCODE
    - Python dtype: object
## Optional
- image1
    - The image1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The image2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - The image3 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

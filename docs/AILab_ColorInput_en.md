# Documentation
- Class name: AILab_ColorInput
- Category: 🧪AILab/🛠️UTIL/🔄IO
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- preset
    - The preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- color
    - The color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- COLOR
    - The COLOR output is produced by this node.
    - Comfy dtype: COLORCODE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: Segment
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
- prompt
    - Enter the object or scene you want to segment. Use tag-style or natural language for more detailed prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- sam_model
    - The sam_model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dino_model
    - The dino_model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- threshold
    - Adjust mask detection strength (higher = more strict)
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_blur
    - Apply Gaussian blur to mask edges (0 = disabled)
    - Comfy dtype: INT
    - Python dtype: int
- mask_offset
    - Expand/Shrink mask boundary (positive = expand, negative = shrink)
    - Comfy dtype: INT
    - Python dtype: int
- invert_output
    - Invert the mask output
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- background
    - [['Alpha', 'Color'], {'default': 'Alpha', 'tooltip': 'Choose background type'}]
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

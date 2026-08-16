# Documentation
- Class name: FaceSegment
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- Skin
    - The Skin input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Nose
    - The Nose input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Eyeglasses
    - The Eyeglasses input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Left-eye
    - The Left-eye input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Right-eye
    - The Right-eye input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Left-eyebrow
    - The Left-eyebrow input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Right-eyebrow
    - The Right-eyebrow input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Left-ear
    - The Left-ear input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Right-ear
    - The Right-ear input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Mouth
    - The Mouth input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Upper-lip
    - The Upper-lip input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Lower-lip
    - The Lower-lip input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Hair
    - The Hair input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Earring
    - The Earring input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Neck
    - The Neck input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- process_res
    - Processing resolution (higher = more VRAM)
    - Comfy dtype: INT
    - Python dtype: int
- mask_blur
    - Blur amount for mask edges
    - Comfy dtype: INT
    - Python dtype: int
- mask_offset
    - Expand/Shrink mask boundary
    - Comfy dtype: INT
    - Python dtype: int
- invert_output
    - Invert both image and mask output
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

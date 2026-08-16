# Documentation
- Class name: AILab_ImageCrop
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Width of the crop region in pixels. Will be clamped to image width.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the crop region in pixels. Will be clamped to image height.
    - Comfy dtype: INT
    - Python dtype: int
- x_offset
    - Horizontal offset (in pixels) added to the crop position. Positive values move right, negative left.
    - Comfy dtype: INT
    - Python dtype: int
- y_offset
    - Vertical offset (in pixels) added to the crop position. Positive values move down, negative up.
    - Comfy dtype: INT
    - Python dtype: int
- split
    - If True, output the cropped region and the rest of the image with the crop area set to zero. If False, the rest is a zero image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- position
    - Anchor position for the crop region. Determines where the crop is placed relative to the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- CROP
    - The CROP output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- REST
    - The REST output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

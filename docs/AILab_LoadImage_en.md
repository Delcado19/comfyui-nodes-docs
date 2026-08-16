# Documentation
- Class name: AILab_LoadImage
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- image_path_or_URL
    - The image_path_or_URL input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- upscale_method
    - The upscale_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- megapixels
    - The megapixels input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_by
    - The scale_by input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resize_mode
    - The resize_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- size
    - The size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
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
- WIDTH
    - The WIDTH output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - The HEIGHT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

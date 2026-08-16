# Documentation
- Class name: FashionSegmentClothing
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
- accessories_options
    - The accessories_options input is used by this node during execution.
    - Comfy dtype: ACCESSORIES_OPTIONS
    - Python dtype: object
- coat
    - The coat input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- jacket
    - The jacket input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cardigan
    - The cardigan input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- vest
    - The vest input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sweater
    - The sweater input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- hood
    - The hood input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- shirt, blouse
    - The shirt, blouse input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- top, t-shirt, sweatshirt
    - The top, t-shirt, sweatshirt input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sleeve
    - The sleeve input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- dress
    - The dress input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- jumpsuit
    - The jumpsuit input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cape
    - The cape input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pants
    - The pants input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- shorts
    - The shorts input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- skirt
    - The skirt input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tights, stockings
    - The tights, stockings input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sock
    - The sock input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- shoe
    - The shoe input is used by this node during execution.
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

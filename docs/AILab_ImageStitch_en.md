# Documentation
- Class name: AILab_ImageStitch
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- image1
    - The image1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- stitch_mode
    - Mode for stitching images together
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- match_image_size
    - If True, resize image2 to match image1's aspect ratio
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- megapixels
    - Target megapixels for final output (0 = no limit, overrides max_width/max_height)
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_width
    - Maximum width of output image (0 = no limit, ignored if megapixels > 0)
    - Comfy dtype: INT
    - Python dtype: int
- max_height
    - Maximum height of output image (0 = no limit, ignored if megapixels > 0)
    - Comfy dtype: INT
    - Python dtype: int
- upscale_method
    - Upscaling method for all resize operations
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- spacing_width
    - Width of spacing between images
    - Comfy dtype: INT
    - Python dtype: int
- background_color
    - Color for spacing between images and padding background
    - Comfy dtype: COLORCODE
    - Python dtype: object
## Optional
- image2
    - The image2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - The image3 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image4
    - The image4 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
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

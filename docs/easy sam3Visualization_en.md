# Documentation
- Class name: easy sam3Visualization
- Category: EasyUse/Sam3
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Sam3

Display mask visualization with objects, bounding boxes and confidence scores

# Input types
## Required
- image
    - Input image to visualize masks on
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- obj_masks
    - Individual object masks from Sam3 Image Segmentation node
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- alpha
    - Transparency of mask overlay (0=transparent, 1=opaque)
    - Comfy dtype: FLOAT
    - Python dtype: float
- stroke_width
    - Width of the mask border stroke
    - Comfy dtype: INT
    - Python dtype: int
- font_size
    - Font size for confidence score text
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- scores
    - Confidence scores from Sam3 Image Segmentation node
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- visualization
    - The visualization output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Sam3)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

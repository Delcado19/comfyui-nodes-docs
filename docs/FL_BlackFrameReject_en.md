# Documentation
- Class name: FL_BlackFrameReject
- Category: 🏵️Fill Nodes/Image
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

FL_BlackFrameReject analyzes each image in a batch to detect the percentage of black pixels.
    Images with black pixel percentage exceeding the specified threshold are removed from the batch.
    Returns the filtered batch of images and counts of kept and rejected images.
    Useful for removing black frames, fades to black, or images with excessive dark regions.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold
    - The threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- black_level
    - The black_level input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- channels
    - The channels input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert
    - The invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_progress
    - The show_progress input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- filtered_images
    - The filtered_images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- kept_count
    - The kept_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- rejected_count
    - The rejected_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

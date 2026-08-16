# Documentation
- Class name: ImageBatchExtendWithOverlap
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Helper node for video generation extension   
First input source and overlap amount to get the starting frames for the extension.  
Then on another copy of the node provide the newly generated frames and choose how to overlap them.

# Input types
## Required
- source_images
    - The source images to extend
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- overlap
    - Number of overlapping frames between source and new images
    - Comfy dtype: INT
    - Python dtype: int
- overlap_side
    - Which side to overlap on
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- overlap_mode
    - Method to use for overlapping frames
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- new_images
    - The new images to extend with
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- source_images
    - The original source images (passthrough)
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_images
    - The input images used as the starting point for extension
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- extended_images
    - The extended images with overlap, if no new images are provided this will be empty
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: SEG_ELT_BBOX_ScaleBy
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEG_ELT_BBOX_ScaleBy node is designed to resize a segmentation element (SEG_ELT) by a specified factor. It works by scaling the SEG_ELT's bounding box, then applying zero-padding to the mask to maintain segmentation integrity. This node is essential for resizing segments without losing details or introducing artifacts.

# Input types
## Required
- seg
    - The 'seg' parameter is the segmentation element (SEG_ELT) to be scaled. It is critical because it defines the input data the node operates on and directly affects the size and properties of the output segmentation.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT
- scale_by
    - The 'scale_by' parameter determines the scaling factor for the SEG_ELT's bounding box. It is a floating-point number used to adjust the size of the segmentation element, impacting the final output's resolution and coverage.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- scaled_seg
    - The 'scaled_seg' output is the result of applying the scaling operation to the input SEG_ELT. It includes the scaled bounding box and adjusted mask, ensuring the segmentation is correctly resized without information loss during the process.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

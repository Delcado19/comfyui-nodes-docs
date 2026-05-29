# Documentation
- Class name: LeReS_DepthMap_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node class preprocesses depth maps for segmentation tasks using the LeReS algorithm to optimize input data and improve segmentation output quality.

# Input types
## Required
- rm_nearest
    - This parameter adjusts the removal threshold for nearby pixels, which is critical for defining depth map precision and segmentation boundary clarity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rm_background
    - This parameter sets the threshold for removing background noise, which is critical for isolating the subject and ensuring segmentation accuracy.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- boost
    - When enabled, this parameter enhances depth map features, potentially improving segmentation results but may increase processing time.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SEGS_PREPROCESSOR
    - The output is a preprocessed depth map optimized for segmentation tasks, providing a refined foundation for further processing.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: LeReS_DepthMapPreprocessor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: imageSplitList
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node splits an image list into multiple subsets based on specific criteria, enhancing the organization and processing of image data in the workflow.

# Input types
## Required
- images
    - Image parameters are required because they serve as the primary input for the node operation, determining the subsequent splitting process and the structure of the output.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]

# Output types
- images
    - The output represents the reorganized image subsets, which are essential for further analysis or processing in the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: Tuple[List[PIL.Image.Image], List[PIL.Image.Image], List[PIL.Image.Image]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

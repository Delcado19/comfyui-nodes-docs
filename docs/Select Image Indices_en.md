# Documentation
- Class name: ImageSelector
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The ImageSelector node filters images based on specified indices, ensuring only the desired subset of images is processed further, improving the efficiency and focus of image processing tasks.

# Input types
## Required
- images
    - The images parameter is critical, serving as the primary input to the ImageSelector node, determining the dataset from which selection will be made.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- selected_indexes
    - This parameter allows users to define the specific indices of images they wish to select, directly impacting which images pass through the node for subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- selected_images
    - The selected_images output represents the filtered subset of images based on the provided indices, now ready for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

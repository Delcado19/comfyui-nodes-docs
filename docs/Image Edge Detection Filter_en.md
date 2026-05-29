# Documentation
- Class name: WAS_Image_Edge
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `image_edges` method is designed to apply edge detection to the input image. It processes the image using 'normal' or 'laplacian' mode to highlight edges within the image, enhancing visual features for further analysis or processing.

# Input types
## Required
- image
    - The 'image' parameter is critical as it is the input the node will process. It influences the node's execution by determining what content will have edges detected.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mode
    - The 'mode' parameter indicates the type of edge detection to apply. It is essential to the node's functionality as it determines the algorithm used to find edges in the image.
    - Comfy dtype: COMBO[normal, laplacian]
    - Python dtype: str

# Output types
- edges_image
    - The 'edges_image' output contains the processed image with edges highlighted according to the selected mode. It is important as it represents the direct result of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

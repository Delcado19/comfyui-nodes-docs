# Documentation
- Class name: WAS_Canny_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Canny_Filter node applies the Canny edge detection algorithm to input images, enhancing the visibility of edges in image data. It processes each image using a multi-stage algorithm including Gaussian blur, gradient computation, and thresholding to identify and highlight significant edges.

# Input types
## Required
- images
    - The 'images' parameter is critical as it serves as the input for the Canny edge detection process. It is the raw image data that the node will process to identify and enhance edges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- enable_threshold
    - The 'enable_threshold' parameter determines whether the thresholding step is applied in the Canny algorithm. This is important for controlling the sensitivity of edge detection.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: str
- threshold_low
    - The 'threshold_low' parameter sets the lower threshold for edge detection. It is a key factor in deciding which edges are strong enough to be included in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_high
    - The 'threshold_high' parameter sets the upper threshold for edge detection. It works together with the lower threshold to fine-tune the edge detection process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The 'images' output parameter contains the processed images with edges highlighted using the Canny filter. This output is important as it represents the final result of the edge detection operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

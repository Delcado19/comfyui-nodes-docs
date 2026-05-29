# Documentation
- Class name: GetImageSize
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The GetImageSize node is designed to extract the dimensions of an image, providing width and height as outputs. It plays a critical role in image processing tasks where the spatial dimensions of an image are essential for further operations such as resizing, cropping, or data analysis.

# Input types
## Required
- image
    - The image parameter is crucial for the node, as it is the source from which dimensions are determined. The node relies on this input to calculate and return the width and height of the image, which can significantly impact subsequent image operations and analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - The width output provides the horizontal dimension of the processed image. This is critical information that can be used for various purposes, such as determining the aspect ratio or compatibility checks with other image processing systems.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output represents the vertical dimension of the image. This is a fundamental parameter used in tasks that require knowledge of the image's spatial structure, such as resizing to fit a specific frame or display purpose.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

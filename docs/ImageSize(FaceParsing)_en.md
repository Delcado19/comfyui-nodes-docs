# Documentation
- Class name: ImageSize
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The ImageSize node is designed to extract and provide the dimensions of an input image, specifically its width and height. It serves as a fundamental component in image processing workflows, ensuring understanding of the spatial properties of the image and can be used in subsequent operations.

# Input types
## Required
- image
    - The image parameter is crucial because it is the input image whose dimensions will be determined. It significantly influences the node's output, determining the width and height values that will be calculated and returned.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - The width output represents the spatial extent of the input image along its horizontal axis. This is essential information for further image analysis and manipulation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output corresponds to the spatial extent of the input image along its vertical axis. This measurement is crucial for understanding the image's layout and subsequent image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

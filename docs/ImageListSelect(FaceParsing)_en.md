# Documentation
- Class name: ImageListSelect
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The ImageListSelect node can select a specific image from a list of images based on a provided index, enabling focused analysis or processing of individual images within a batch.

# Input types
## Required
- images
    - The `images` parameter is critical as it serves as the input dataset for the node's operation. It allows the node to identify and select the target image based on the provided index.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- index
    - The `index` parameter determines which image is selected from the list. It is crucial for guiding the node to make the correct selection for further processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- selected_image
    - `selected_image` represents the node's output, which is the image selected from the input list based on the provided index. It is the result of the node's operation and is ready for subsequent processing.
    - Comfy dtype: IMAGE
    - Python dtype: Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

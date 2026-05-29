# Documentation
- Class name: LoadImagePath
- Category: image
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The LoadImagePath node is designed to fetch and process image data from a specified path or URL. It can handle online images (by downloading) and local images (by opening files directly). The node converts images into a format suitable for further processing, including normalization and conversion to tensors, and extracts masks if available. This node is essential for initiating image-based operations in a workflow.

# Input types
## Required
- image
- The 'image' parameter is crucial because it defines the source of the image data. It can be a local file path or a URL pointing to an online image. The node uses this input to retrieve and process the image accordingly, making it a key element of the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
- The 'image' output is a processed version of the input image, converted into a tensor format suitable for subsequent computational tasks. It is the primary result of the node's functionality, enabling further image analysis and operations.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor
- mask
- When the 'mack' output is present, it provides additional information in the form of a binary mask derived from the input image. This mask can be used for various purposes in an image processing workflow, such as segmentation or object recognition.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*

# Documentation
- Class name: LoadImage
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoadImage node is designed to ingest image files from a specified directory, process them, and output the images along with their corresponding masks. It can handle image sequences and convert them into a format suitable for further processing, emphasizing its role in preparing data for image-related tasks.

# Input types
## Required
- image
    - The 'image' parameter is the path to the image file to be processed. It is essential to the node's operation, as it determines the specific image to be loaded and manipulated.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- IMAGE
    - The 'IMAGE' output is a tensor representing the processed image data, which has been converted to float format and normalized. This output is important as it is the primary data structure used for subsequent image analysis or manipulation tasks.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- MASK
    - The 'MASK' output is a tensor representing the binary mask associated with the image, used to distinguish different regions or objects within the image. It is essential for tasks requiring segmentation or object recognition.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
